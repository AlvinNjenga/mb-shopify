if (!customElements.get('ritual-slider')) {
  customElements.define('ritual-slider', class extends HTMLElement {
    connectedCallback() {
      this.slides = Array.from(this.querySelectorAll('.ritual-slider__slide'));
      this.current = 0;
      this.paused = false;
      this.explicitPlay = false;
      this.hovered = false;
      this.editorSelected = false;
      this.motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.abort = new AbortController();
      const options = { signal: this.abort.signal };
      this.querySelector('[data-previous]')?.addEventListener('click', () => this.show(this.current - 1), options);
      this.querySelector('[data-next]')?.addEventListener('click', () => this.show(this.current + 1), options);
      this.querySelector('[data-pause]')?.addEventListener('click', () => {
        this.paused = !this.paused;
        this.explicitPlay = !this.paused;
        const button = this.querySelector('[data-pause]');
        button.setAttribute('aria-label', this.paused ? button.dataset.playLabel : button.dataset.pauseLabel);
        button.querySelector('span').textContent = this.paused ? '▶' : 'Ⅱ';
        this.schedule();
      }, options);
      this.addEventListener('mouseenter', () => { this.hovered = true; this.explicitPlay = false; this.schedule(); }, options);
      this.addEventListener('mouseleave', () => { this.hovered = false; this.schedule(); }, options);
      this.addEventListener('focusin', () => { this.explicitPlay = false; this.schedule(); }, options);
      this.addEventListener('focusout', () => queueMicrotask(() => this.schedule()), options);
      this.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        if (event.target.matches('input, textarea, select')) return;
        event.preventDefault();
        this.show(this.current + (event.key === 'ArrowRight' ? 1 : -1));
      }, options);
      this.addEventListener('touchstart', (event) => {
        this.touch = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }, { ...options, passive: true });
      this.addEventListener('touchend', (event) => {
        if (!this.touch) return;
        const dx = this.touch.x - event.changedTouches[0].clientX;
        const dy = this.touch.y - event.changedTouches[0].clientY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) this.show(this.current + (dx > 0 ? 1 : -1));
        this.touch = null;
      }, { ...options, passive: true });
      document.addEventListener('visibilitychange', () => this.schedule(), options);
      this.motion.addEventListener('change', () => this.schedule(), options);
      this.addEventListener('shopify:block:select', (event) => {
        const index = this.slides.findIndex((slide) => slide.dataset.blockId === event.detail.blockId);
        if (index < 0) return;
        this.editorSelected = true;
        this.show(index);
      }, options);
      this.addEventListener('shopify:block:deselect', () => { this.editorSelected = false; this.schedule(); }, options);
      if (this.slides.length > 1) this.querySelector('.ritual-slider__controls').hidden = false;
      this.show(0);
    }

    show(index) {
      if (!this.slides.length) return;
      this.current = (index + this.slides.length) % this.slides.length;
      this.slides.forEach((slide, position) => {
        const active = position === this.current;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
        slide.inert = !active;
      });
      const counter = this.querySelector('[data-current]');
      if (counter) counter.textContent = this.current + 1;
      this.schedule();
    }

    schedule() {
      clearTimeout(this.timer);
      if (this.dataset.autoplay !== 'true' || this.slides.length < 2 || this.paused || this.editorSelected || document.hidden) return;
      if (!this.explicitPlay && (this.hovered || this.motion.matches || this.contains(document.activeElement))) return;
      this.timer = setTimeout(() => this.show(this.current + 1), Number(this.dataset.interval) || 4000);
    }

    disconnectedCallback() {
      clearTimeout(this.timer);
      this.abort?.abort();
    }
  });
}
