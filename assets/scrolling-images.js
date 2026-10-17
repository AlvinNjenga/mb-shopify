if (!customElements.get('image-marquee')) {
  customElements.define('image-marquee', class extends HTMLElement {
    connectedCallback() {
      this.track = this.querySelector('.scrolling-images__track');
      this.group = this.querySelector('.scrolling-images__group');
      this.motion = matchMedia('(prefers-reduced-motion: reduce)');
      this.abort = new AbortController();
      const options = { signal: this.abort.signal };
      this.refresh = this.refresh.bind(this);
      this.addEventListener('mouseenter', () => { this.hovered = true; this.updatePlayback(); }, options);
      this.addEventListener('mouseleave', () => { this.hovered = false; this.updatePlayback(); }, options);
      this.addEventListener('focusin', () => { this.focused = true; this.updatePlayback(); }, options);
      this.addEventListener('focusout', () => { this.focused = false; this.updatePlayback(); }, options);
      this.addEventListener('shopify:block:select', () => { this.selected = true; this.updatePlayback(); }, options);
      this.addEventListener('shopify:block:deselect', () => { this.selected = false; this.updatePlayback(); }, options);
      this.group.querySelectorAll('img').forEach(image => image.addEventListener('load', this.refresh, options));
      this.motion.addEventListener('change', this.refresh, options);
      this.resize = new ResizeObserver(this.refresh);
      this.resize.observe(this);
      this.resize.observe(this.group);
      this.visibility = new IntersectionObserver(([entry]) => { this.visible = entry.isIntersecting; this.updatePlayback(); });
      this.visibility.observe(this);
      this.refresh();
    }

    refresh() {
      this.animation?.cancel();
      this.track.querySelectorAll('[data-marquee-copy]').forEach(copy => copy.remove());
      const width = this.group.getBoundingClientRect().width;
      if (!width || this.motion.matches) return;
      const copies = Math.ceil(this.clientWidth / width);
      for (let index = 0; index < copies; index++) {
        const copy = this.group.cloneNode(true);
        copy.dataset.marqueeCopy = '';
        copy.setAttribute('aria-hidden', 'true');
        copy.inert = true;
        copy.querySelectorAll('[data-shopify-editor-block]').forEach(item => item.removeAttribute('data-shopify-editor-block'));
        this.track.append(copy);
      }
      const speed = Number(this.dataset.speed) / (innerWidth > 751 ? 1 : 1.5);
      this.animation = this.track.animate([
        { transform: 'translateX(0)' },
        { transform: `translateX(-${width}px)` }
      ], { duration: width / speed * 1000, iterations: Infinity, easing: 'linear' });
      this.updatePlayback();
    }

    updatePlayback() {
      if (!this.animation) return;
      if (this.hovered || this.focused || this.selected || !this.visible) this.animation.pause();
      else this.animation.play();
    }

    disconnectedCallback() {
      this.abort.abort();
      this.resize.disconnect();
      this.visibility.disconnect();
      this.animation?.cancel();
    }
  });
}
