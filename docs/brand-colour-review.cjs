// Read-only local storefront review. Requires Node 22+ and Chrome on Windows.
const {spawn} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
 const browser = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless', '--disable-gpu', '--no-first-run', '--remote-debugging-port=9246', '--user-data-dir='+path.join(process.env.TEMP,'megyn-colour-review'), 'about:blank'], {windowsHide:true,stdio:'ignore'});
 let ws;
 try {
  let tabs;
  for(let i=0;i<40;i++){try{tabs=await(await fetch('http://127.0.0.1:9246/json/list')).json();break;}catch{await pause(250);}}
  if(!tabs) throw Error('Chrome unavailable');
  ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
  await new Promise(resolve=>ws.addEventListener('open',resolve,{once:true}));
  let id=0;const pending=new Map();
  ws.addEventListener('message',event=>{const data=JSON.parse(event.data);if(data.id){pending.get(data.id)?.(data);pending.delete(data.id);}});
  const call=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;const timer=setTimeout(()=>reject(Error(method+' timed out')),15000);pending.set(n,data=>{clearTimeout(timer);data.error?reject(Error(JSON.stringify(data.error))):resolve(data.result)});ws.send(JSON.stringify({id:n,method,params}));});
  const evaluate=async expression=>(await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result?.value;
  await call('Page.enable');
  const routes = process.argv.includes('--hero') ? ['/'] : process.argv.includes('--header') ? ['/', '/products/hydra-boost-daily-moisturiser'] : process.argv.includes('--actions')
    ? ['/', '/collections/all', '/products/hydra-boost-daily-moisturiser', '/pages/faq']
    : ['/', '/collections/all', '/products/hydra-boost-daily-moisturiser', '/cart', '/pages/faq', '/pages/contact', '/pages/about'];
  for(const route of routes){
   for(const width of [1440,390]){
    await call('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<750});
    await call('Page.navigate',{url:'http://127.0.0.1:9292'+route});await pause(2200);
    for(let wait=0;wait<12;wait++){if(await evaluate('!!document.querySelector(".footer")'))break;await pause(500);}
    const report=await evaluate(`(()=>{
      const styles=s=>{const e=document.querySelector(s);if(!e)return null;const c=getComputedStyle(e);return {background:c.backgroundColor,text:c.color,label:e.textContent.trim().slice(0,45)}};
      const faq=document.querySelector('.faq-group details');let faqToggles=null;if(faq){const before=faq.open;faq.querySelector('summary')?.click();faqToggles=faq.open!==before;faq.querySelector('summary')?.click()}
      const button=document.querySelector('.product-form__submit,.faq-categories .button,.custom-hero__button,.cart__checkout-button');
      button?.focus();button?.classList.add('focused');const focus=button?getComputedStyle(button).outlineStyle:null;button?.classList.remove('focused');
      return {title:document.title,overflow:document.documentElement.scrollWidth>innerWidth,liquidError:document.body.innerText.includes('Liquid error'),footer:styles('.footer'),header:styles('.header-wrapper'),add:styles('.product-form__submit'),quickAdd:styles('.quick-add__submit'),hero:styles('.custom-hero__button'),faqToggles,focus,productForm:!!document.querySelector('form[action*="/cart/add"]')};
    })()`);
    console.log(JSON.stringify({route,width,...report}));
    if(process.argv.includes('--hero')) console.log(JSON.stringify({width,image:await evaluate(`(()=>{const e=document.querySelector('.custom-hero__image');return {source:e?.currentSrc,loaded:e?.complete&&e?.naturalWidth>0,width:e?.naturalWidth,height:e?.naturalHeight}})()`)}));
    if(process.argv.includes('--header')){
      await evaluate('window.scrollTo(0,600)');await pause(700);
      console.log(JSON.stringify({route,width,scrolled:await evaluate(`(()=>{const e=document.querySelector('.header-wrapper');const h=document.querySelector('.section-header');const c=getComputedStyle(e);return {background:c.backgroundColor,text:c.color,expanded:h?.classList.contains('floating-header-expanded'),position:h?getComputedStyle(h).position:null,menu:document.querySelector('.header__menu-item')?getComputedStyle(document.querySelector('.header__menu-item')).color:null,icon:document.querySelector('.header__icon')?getComputedStyle(document.querySelector('.header__icon')).color:null}})()`)}));
    }
    if(['/', '/products/hydra-boost-daily-moisturiser'].includes(route)){
      await evaluate('window.scrollTo(0,0)');
      const shot=await call('Page.captureScreenshot',{format:'png'});
      const out=path.join(process.env.TEMP,'megyn-stage3-'+(route==='/'?'home':'product')+'-'+width+'.png');
      fs.writeFileSync(out,Buffer.from(shot.data,'base64'));
    }
   }
  }
  await call('Browser.close');
 } finally {ws?.close();browser.kill();}
})().catch(error=>{console.error(error);process.exitCode=1});
