# Product page validation

Reviewed on 17 October 2026 using the local Hydra Boost Daily Moisturiser preview:
`http://127.0.0.1:9292/products/hydra-boost-daily-moisturiser`.

## Verified

- Browser checks at 320, 390, 768, 1024 and 1440 pixel widths: no horizontal
  overflow. Product heading remains 32px. Sticky title is black.
- Sticky bar hidden at the top and visible after the main purchase controls
  scroll above the viewport, at all five widths.
- Main quantity plus/minus controls update the sticky quantity. Sticky quantity
  updates the main input.
- Sticky submission reaches Dawn's original product form with variant
  `53743977431379` and the selected quantity of 3.
- A simulated cart endpoint response (422) displays the error in both the main
  form and sticky bar. No real cart add request was sent and no cart was changed.
- Disabling the main purchase button disables the sticky purchase button.
  This checks mirroring, not a real sold-out variant transition.
- Product image modal opens and closes.
- Empty product detail and story sections remain absent from the storefront.
- No uncaught JavaScript exceptions during the browser checks.
- JavaScript syntax check passes. Shopify Theme Check reports zero errors and
  11 pre-existing warnings; the newly introduced complexity warning was removed.

## Corrections during validation

- Reserved bottom space equal to the visible sticky bar's height so footer
  content can be scrolled clear of the fixed bar. Space updates on resize and is
  removed when the bar is hidden or disconnected.
- Extracted the optional product accordion into a reusable snippet, retaining
  Dawn's IDs, block attributes and empty-content handling.

## Checks still requiring data or Admin access

Hydra Boost currently has one default variant, one image and no populated custom
product details. The following have not been verified end to end:

- Several sizes with different prices, variant images, stock and unavailable
  combinations; a named single-value option alongside another multi-value option.
- Thumbnail navigation across multiple images; vertical thumbnail presentation
  remains unimplemented.
- Populated metafield content, product-specific images, long content and the
  lower story/cards/results/FAQ/testimonial layouts with actual merchant data.
- Actual theme-editor section reloads, block reordering and dynamic-source
  connections in Shopify Admin.
- Successful cart add and cart drawer contents, checkout, accelerated payments,
  gift-card recipient fields, selling plans and app-provided purchase properties.

After entering product data, repeat these checks with appropriate products and
review the populated page visually. The current checks establish the available
local behaviour; they do not establish production readiness for every product
configuration. Nothing has been published.
