if (!customElements.get('collection-layout-switcher')) {
  customElements.define('collection-layout-switcher', class extends HTMLElement {
    connectedCallback() {
      this.root = this.closest('collection-component');
      this.storageKey = `collection-layout:${this.root.querySelector('#product-grid')?.dataset.id || location.pathname}`;
      try {
        const saved = JSON.parse(sessionStorage.getItem(this.storageKey) || '{}');
        this.querySelectorAll('button[data-columns]').forEach((button) => {
          const columns = saved[button.dataset.device];
          const allowed = button.dataset.device === 'desktop' ? [2, 3, 4] : [1, 2];
          if (!allowed.includes(Number(columns))) return;
          this.root.style.setProperty(`--collection-columns-${button.dataset.device}`, columns);
          button.setAttribute('aria-pressed', String(button.dataset.columns === String(columns)));
        });
      } catch { /* Storage can be unavailable in private or embedded contexts. */ }
      this.onClick = (event) => {
        const button = event.target.closest('button[data-columns]');
        if (!button || !this.contains(button)) return;
        this.root.style.setProperty(`--collection-columns-${button.dataset.device}`, button.dataset.columns);
        this.querySelectorAll(`button[data-device="${button.dataset.device}"]`).forEach((item) => {
          item.setAttribute('aria-pressed', String(item === button));
        });
        try {
          const saved = JSON.parse(sessionStorage.getItem(this.storageKey) || '{}');
          saved[button.dataset.device] = button.dataset.columns;
          sessionStorage.setItem(this.storageKey, JSON.stringify(saved));
        } catch { /* The selected layout still works without storage. */ }
      };
      this.addEventListener('click', this.onClick);
    }
    disconnectedCallback() { this.removeEventListener('click', this.onClick); }
  });
}

if (!customElements.get('collection-load-more')) {
  customElements.define('collection-load-more', class extends HTMLElement {
    connectedCallback() {
      this.onClick = async (event) => {
        const link = event.target.closest('a');
        if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        if (this.loading) return;
        this.loading = true;
        link.setAttribute('aria-disabled', 'true');
        this.setAttribute('aria-busy', 'true');
        try {
          const response = await fetch(link.href);
          if (!response.ok) throw new Error('Unable to load products');
          const page = new DOMParser().parseFromString(await response.text(), 'text/html');
          const grid = page.querySelector('#product-grid');
          if (!grid) throw new Error('Missing product grid');
          const current = this.closest('collection-component').querySelector('#product-grid');
          const items = [...grid.children];
          items.forEach((item) => item.querySelectorAll('.scroll-trigger').forEach((node) => node.classList.add('scroll-trigger--cancel')));
          items.forEach((item) => item.classList.add('scroll-trigger--cancel'));
          current.append(...items);
          const firstLink = items[0]?.querySelector('a');
          firstLink?.focus({ preventScroll: true });
          const next = page.querySelector('collection-load-more a');
          if (next) link.href = next.href;
          else this.remove();
        } catch {
          window.location.assign(link.href);
        } finally {
          this.loading = false;
          this.removeAttribute('aria-busy');
          link.removeAttribute('aria-disabled');
        }
      };
      this.addEventListener('click', this.onClick);
    }
    disconnectedCallback() { this.removeEventListener('click', this.onClick); }
  });
}
