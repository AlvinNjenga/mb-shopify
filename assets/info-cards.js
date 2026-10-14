(() => {
  if (window.referenceInfoCardsInitialized) return;
  window.referenceInfoCardsInitialized = true;
  let activeCard;
  let previousOverflow;
  const close = () => {
    if (!activeCard) return;
    const card = activeCard;
    activeCard = null;
    card.open = false;
    document.body.style.overflow = previousOverflow;
    if (typeof removeTrapFocus === 'function') removeTrapFocus(card.querySelector('summary'));
    else card.querySelector('summary').focus();
  };
  document.addEventListener('toggle', (event) => {
    const card = event.target;
    if (!card.matches?.('.reference-infocard')) return;
    if (!card.open) {
      if (activeCard === card) close();
      return;
    }
    if (activeCard === card) return;
    close();
    activeCard = card;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const panel = card.querySelector('.reference-infocard__panel');
    if (typeof trapFocus === 'function') trapFocus(panel, panel.querySelector('button'));
    else panel.querySelector('button').focus();
  }, true);
  document.addEventListener('click', (event) => {
    if (event.target.closest('.reference-infocard__close')) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeCard) {
      event.preventDefault();
      close();
    }
  });
  document.addEventListener('shopify:section:unload', close);
  document.addEventListener('shopify:block:select', (event) => {
    const card = event.target.closest('.reference-infocard');
    if (card) card.open = true;
  });
  document.addEventListener('shopify:block:deselect', close);
})();
