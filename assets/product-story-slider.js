if (!customElements.get('product-story-slider')) {
  customElements.define('product-story-slider', class extends HTMLElement {
    connectedCallback() {
      this.rail = this.querySelector('.product-story__items');
      this.controls = this.querySelector('.product-story__controls');
      if (!this.rail || !this.controls) return;
      this.events = new AbortController();
      const options = { signal: this.events.signal };
      this.controls.hidden = false;
      this.controls.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;
        const direction = getComputedStyle(this.rail).direction === 'rtl' ? -1 : 1;
        this.rail.scrollBy({
          left: this.rail.clientWidth * (button.name === 'next' ? 1 : -1) * direction,
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
      }, options);
      this.rail.addEventListener('scroll', () => this.update(), options);
      this.addEventListener('shopify:block:select', (event) => {
        const item = event.target.closest('.product-story__item');
        if (!item) return;
        this.rail.scrollBy({ left: item.getBoundingClientRect().left - this.rail.getBoundingClientRect().left, behavior: 'instant' });
      }, options);
      this.resizeObserver = new ResizeObserver(() => this.update());
      this.resizeObserver.observe(this.rail);
      this.update();
    }

    update() {
      const items = [...this.rail.children];
      const offset = Math.abs(this.rail.scrollLeft);
      const end = this.rail.scrollWidth - this.rail.clientWidth;
      this.controls.hidden = end <= 1;
      this.controls.querySelector('[name="previous"]').disabled = offset <= 1;
      this.controls.querySelector('[name="next"]').disabled = offset >= end - 1;
      const left = this.rail.getBoundingClientRect().left;
      const nearest = items.reduce((best, item, index) =>
        Math.abs(item.getBoundingClientRect().left - left) < Math.abs(items[best].getBoundingClientRect().left - left) ? index : best, 0);
      this.controls.querySelector('.product-story__counter').textContent = `${nearest + 1} / ${items.length}`;
    }

    disconnectedCallback() {
      this.events?.abort();
      this.resizeObserver?.disconnect();
    }
  });
}
