if (!customElements.get('about-looping-video')) {
  customElements.define('about-looping-video', class extends HTMLElement {
    connectedCallback() {
      this.abort = new AbortController();
      const options = { signal: this.abort.signal };
      const video = this.querySelector('video');
      const button = this.querySelector('button');
      if (!video || !button) return;
      video.controls = false;
      button.hidden = false;
      const update = () => {
        button.setAttribute('aria-label', video.paused ? button.dataset.playLabel : button.dataset.pauseLabel);
        button.querySelector('[data-play]').toggleAttribute('hidden', !video.paused);
        button.querySelector('[data-pause]').toggleAttribute('hidden', video.paused);
      };
      button.addEventListener('click', () => {
        if (video.paused) video.play().catch(update);
        else video.pause();
      }, options);
      video.addEventListener('play', update, options);
      video.addEventListener('pause', update, options);
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const respectMotion = () => {
        if (motion.matches) {
          video.autoplay = false;
          video.pause();
        }
        update();
      };
      motion.addEventListener('change', respectMotion, options);
      respectMotion();
    }
    disconnectedCallback() {
      this.abort?.abort();
      this.querySelector('video')?.pause();
    }
  });
}
