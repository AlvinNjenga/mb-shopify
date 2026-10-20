if (!customElements.get('faq-group')) {
  customElements.define('faq-group', class extends HTMLElement {
    connectedCallback() {
      if (this.onToggle) return;
      this.onToggle = (event) => {
        const opened = event.target;
        if (opened.tagName !== 'DETAILS' || !opened.open) return;
        this.querySelectorAll('details[open]').forEach((row) => {
          if (row !== opened) row.open = false;
        });
      };
      this.addEventListener('toggle', this.onToggle, true);
      this.onBlockSelect = (event) => {
        const row = event.target.closest('.faq-group__row');
        if (!row || !this.contains(row)) return;
        const details = row.querySelector('details');
        details.open = true;
        this.onToggle({ target: details });
      };
      document.addEventListener('shopify:block:select', this.onBlockSelect);
    }

    disconnectedCallback() {
      this.removeEventListener('toggle', this.onToggle, true);
      document.removeEventListener('shopify:block:select', this.onBlockSelect);
      this.onToggle = null;
    }
  });
}

if (!customElements.get('faq-categories')) {
  customElements.define('faq-categories', class extends HTMLElement {
    connectedCallback() {
      if (this.onBlockSelect) return;
      this.onBlockSelect = (event) => {
        const card = event.target.closest('.faq-categories__card');
        if (card && this.contains(card)) {
          card.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
        }
      };
      document.addEventListener('shopify:block:select', this.onBlockSelect);
    }

    disconnectedCallback() {
      document.removeEventListener('shopify:block:select', this.onBlockSelect);
      this.onBlockSelect = null;
    }
  });
}
