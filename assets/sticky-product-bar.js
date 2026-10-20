if (!customElements.get('sticky-product-bar')) {
  customElements.define('sticky-product-bar', class extends HTMLElement {
    connectedCallback() {
      this.main = document.querySelector('product-info[id^="MainProduct-"]');
      if (!this.main) return;
      this.button = this.querySelector('[data-sticky-submit]');
      this.quantity = this.querySelector('[data-sticky-quantity]');
      this.price = this.querySelector('[data-sticky-price]');
      this.error = this.querySelector('[data-sticky-error]');
      this.controller = new AbortController();
      const options = { signal: this.controller.signal };
      document.addEventListener('shopify:section:load', () => {
        if (this.main !== document.querySelector('product-info[id^="MainProduct-"]')) {
          this.disconnectedCallback();
          this.connectedCallback();
        }
      }, options);
      this.button.addEventListener('click', () => this.submit(), options);
      this.quantity.addEventListener('change', () => {
        const input = this.main.querySelector('.quantity__input');
        if (!input || !this.quantity.reportValidity()) return;
        input.value = this.quantity.value;
        input.dispatchEvent(new Event('change', { bubbles: true }));
        this.sync();
      }, options);
      this.main.addEventListener('change', () => this.sync(), options);
      window.addEventListener('scroll', () => this.updateVisibility(), { ...options, passive: true });
      window.addEventListener('resize', () => this.updateVisibility(), options);
      this.observer = new MutationObserver(() => this.sync());
      this.observer.observe(this.main, { subtree: true, childList: true, attributes: true, characterData: true });
      this.resizeObserver = new ResizeObserver(() => this.updateVisibility());
      this.resizeObserver.observe(this);
      this.sync();
    }

    sync() {
      this.mainButton = this.main.querySelector('product-form button[name="add"]');
      const input = this.main.querySelector('.quantity__input');
      this.quantity.parentElement.hidden = !input;
      if (input) {
        for (const name of ['min', 'max', 'step']) {
          const value = input.getAttribute(name);
          if (value === null) this.quantity.removeAttribute(name);
          else this.quantity.setAttribute(name, value);
        }
        if (document.activeElement !== this.quantity) this.quantity.value = input.value;
      }
      const price = this.main.querySelector('[id^="price-"]');
      if (price) {
        const markup = price.hidden || price.classList.contains('hidden') ? '' : price.innerHTML;
        if (this.price.innerHTML !== markup) this.price.innerHTML = markup;
      }
      const busy = this.mainButton?.getAttribute('aria-disabled') === 'true';
      this.button.disabled = !this.mainButton || this.mainButton.disabled || busy;
      this.button.toggleAttribute('aria-busy', busy);
      this.button.querySelector('span').textContent = this.mainButton?.querySelector('span')?.textContent.trim() || '';
      const error = this.main.querySelector('.product-form__error-message-wrapper');
      this.error.textContent = error && !error.hidden ? error.querySelector('.product-form__error-message')?.textContent || '' : '';
      this.error.hidden = !this.error.textContent;
      const image = this.querySelector('.sticky-product-bar__image');
      const selectedImage = this.main.querySelector('.product__media-item.is-active img');
      if (image && selectedImage && image.src !== selectedImage.currentSrc) {
        image.removeAttribute('srcset');
        image.src = selectedImage.currentSrc || selectedImage.src;
        image.alt = selectedImage.alt;
      }
      this.updateVisibility();
    }

    updateVisibility() {
      this.hidden = !this.mainButton || !this.mainButton.isConnected || this.mainButton.getBoundingClientRect().bottom >= 0;
      document.body.style.setProperty('--sticky-product-bar-height', `${this.hidden ? 0 : this.getBoundingClientRect().height}px`);
    }

    submit() {
      if (this.button.disabled || !this.quantity.reportValidity()) return;
      const form = this.mainButton?.form;
      const input = this.main.querySelector('.quantity__input');
      if (!form) return;
      if (input) {
        input.value = this.quantity.value;
        input.dispatchEvent(new Event('change', { bubbles: true }));
        if (!input.reportValidity()) return;
      }
      // Submit Dawn's original form, preserving app properties, selling plans,
      // gift-card fields, error handling and the configured cart drawer.
      if (!form.reportValidity()) return;
      form.requestSubmit(this.mainButton);
    }

    disconnectedCallback() {
      this.controller?.abort();
      this.observer?.disconnect();
      this.resizeObserver?.disconnect();
      document.body.style.removeProperty('--sticky-product-bar-height');
    }
  });
}
