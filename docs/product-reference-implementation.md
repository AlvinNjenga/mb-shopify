# Product reference implementation

Current template: `templates/product.cosmetics.json`, assigned to all three
cosmetics products. The former `product.hydra-boost.json` was removed on
21 October 2026 after migration. Earlier Hydra-specific template references
below document the implementation history. See
[cosmetics-template-migration.md](cosmetics-template-migration.md) for current
assignments and migration validation.

Reviewed and started on 21 October 2026.

- Local product: http://127.0.0.1:9292/products/hydra-boost-daily-moisturiser
- New reference: https://flux-demo-6.myshopify.com/products/balance-oil
- Earlier reference: https://flux-demo-6.myshopify.com/products/aromatherapy-candle
- Active local preview theme: `209798365523`, Development (ae6f4d-Alvin).
  The previous development theme `209422188883` also received the initial
  first-stage upload before the newly active preview theme was identified.
  No live theme was published.

## Balance Oil differences

The lower page uses the same sequence as the candle reference: scrolling values,
lavender story panel, illustrated feature grid, second image/story panel,
image-backed results, FAQ, testimonials, related products, service strip and
image gallery. Changing the reference does not remove the previously identified
lower-section work.

| Area | Balance Oil | Hydra-Boost / implementation advice |
| --- | --- | --- |
| Sizes | 12ml, 60ml, 120ml; selected size repeated in the label | Hydra-Boost has one default variant. Use real native Shopify variants, not custom text or metafields. |
| Size prices | EUR 9.90, 13.90, 19.90 respectively at inspection | Set actual Hydra-Boost prices separately for each sellable size. Do not copy oil prices. |
| Price presentation | Selected 12ml variant is not on sale | Hydra-Boost is on sale. Preserve its actual price and compare-at price. |
| Gallery | Five images, vertical desktop thumbnail rail and mobile navigation | One existing image. Rail support is implemented; more merchant images are required to show it on Hydra-Boost. |
| Benefit icons | Four icons, including dermatologist-tested | Three icons now describe existing Hydra-Boost information. No certification claims were copied. |
| Complementary products | Six products, two compact cards visible on desktop | Store currently has only two other products. Both are selected in the editor-compatible product list. |
| Product details | Compact introduction at top; labelled skin details in the lower story | Moved existing detail blocks into the lower story, preserving their IDs and settings. |
| Purchase information | Product Info, 24/7 Support, Shipping & Returns, delivery estimate | Product Info and Contact-based Support display. Policy links and delivery note stay hidden while unpopulated. No 24/7 claim was added. |
| Payments | Several methods and an unbranded purchase button in the captured session | Store exposes PayPal. Render actual enabled methods; accelerated checkout branding is Shopify-controlled. |
| Badge / breadcrumb | Certification badge and Best Sellers collection | Preserve Megyn Beauty branding and the actual collection context; do not invent certifications. |

## Stage 1 completed: opening product area

- Added opt-in `reference_product_layout` presentation, enabled for the dedicated
  Hydra-Boost template. Other product templates retain their previous layout.
- Added optional introductory-paragraph display without changing the stored
  native product description.
- Moved all six original Product detail blocks into the existing story section.
  Their block IDs, types and original settings are preserved; five have content.
- Added native benefit icons using existing Hydra-Boost information.
- Added curated complementary product cards using a `product_list` setting and
  Dawn's slider. Leaving the list empty retains native complementary recommendations.
- Added Product Info, contact-page Support, real shipping/refund-policy links,
  optional delivery text and enabled payment icons as editor blocks.
- Updated title sizing, vendor badge presentation, sale-price order, neutral sale
  badge, inventory divider, quantity control and outlined purchase button.
- Added vertical desktop thumbnail styling and active-thumbnail scrolling.
- Added the selected option value to reference-layout pill labels, such as
  `Size: 60ml`. Dawn still handles selection, variant URLs, prices, availability,
  media and cart form IDs. No Shopify product variants were created.

At the tested 1440px width, the populated opening section is approximately
664px high versus the earlier 1024px. Different title lengths, image counts,
recommendations and available purchase information affect exact height.

## Typography update, 21 October 2026

Added `assets/cosmetics-product-typography.css` (originally named
`product-reference-typography.css`), loaded by the main product
section only when reference styling is enabled. Its selectors apply to the
product page's main content; other page templates and global settings are
unchanged. Reuses the existing Fraunces/Inter files and includes the actual
Inter bold face for product text.

Matched measured reference sizes, weights, line heights and letter spacing:

| Text | Desktop | Mobile |
| --- | --- | --- |
| Product title | Fraunces bold, 32px | 30px |
| Opening description | Inter, 12.96px / 20.736px line height | Same |
| Purchase accordion title | Inter, 16px | Same |
| Accordion body | Inter, 12.96px / 24.48px | Same |
| Size label / buttons | Inter, 11.7px / 13.5px | Same |
| Purchase button | Inter bold, 14.4px | Same |
| Story heading | Fraunces bold, 62px | 40px |
| Ingredients/results heading | Fraunces bold, 62px | 50px |
| Story body | Inter, 14.58px / 27.54px | 14.4px / 27.2px |
| Feature heading | Fraunces bold, 26px | 22px |
| FAQ heading / question | Fraunces bold 36px / Inter 18px | 30px / 17px |

Also aligned prices, tax text, complementary-card headings and FAQ answers.
Text content, variant data and section layout are preserved. Browser checks
at 320, 390, 768 and 1440px confirmed the product page rendered, all three
font faces loaded and no horizontal overflow occurred. Measurements and
screenshots are in the temporary `product-typography-validation.json` and
`product-typography-*.png` files. No live theme was published.

## How to add real sizes

### Accordion copy update, 21 October 2026

At the merchant's subsequent request, Support and Shipping and Returns now use
adapted reference wording as explicit template content overrides. Support links
to the existing Contact page and refers to usual business hours. Shipping and
Returns states a 30-day return/exchange period without a return charge, with
replacement, store credit or original-payment refund options. The shipping block
is now visible even though store policy records remain unpopulated. These edits
do not create or change Shopify's legal policy records.

Product Info retains Hydra-Boost's ingredient metafield: Balance Oil's ingredient
list was not applied to the moisturiser. Existing source settings and block IDs
remain intact. The local development preview renders all three accordions and
their updated content without Liquid errors. No live theme was published.

### Size setup

1. In Shopify Admin, open the product and add an option named Size with its
   actual sellable values. Balance Oil's example values are not Hydra-Boost data.
2. Set each variant's price, optional compare-at price, SKU, stock by location,
   shipping data and optional associated image. Preserve the existing variant
   deliberately when converting it; do not discard its inventory or SKU.
3. In the product template's Variant picker, use Buttons. Turn off
   Hide options with only one value if a genuine single named size should display.
4. Enable the reference product styling together with the three-column layout
   for templates that should use this presentation.
5. Check each variant and direct `?variant=...` link. Confirm selected-size label,
   price, availability, image, quantity rules and main/sticky submission agree.
   Include sold-out sizes and unavailable combinations when applicable.

The current store has three products, all with default single variants. Actual
multi-size storefront transitions remain unverified until real size data exists.

## Remaining implementation order

1. **Lower section structures:** replace static values with a scrolling strip;
   create full-width lavender story panels; build mixed image/icon feature grid,
   the second ritual panel and asymmetric image-backed results. Match FAQ,
   testimonial cards, related-product carousel, service strip and image gallery.
2. **Merchant content and assets:** additional product and lifestyle images,
   directions, supported results, genuine reviews, actual service policies and
   any real size variants. Keep populated product fields intact.
3. **Styling:** match section heading scale, lavender/grey backgrounds, widths,
   crops, spacing, borders and card treatments. Header, footer, floating social
   links and back-to-top control remain separate page-wide differences.
4. **Responsive behaviour:** match stacking, image-first order and sliders across
   desktop, tablet and mobile. The new top-area changes include mobile sizing.
5. **Validation:** compare identical viewport screenshots, run editor reload and
   reorder checks, then validate real variants, cart and checkout as data permits.

## Validation performed

- Theme Check: no errors in changed files. Two existing main-product warnings
  remain (unused `seo_media` and an existing `continue` expression); the full
  theme still has unrelated missing breadcrumb translations in locale files.
- JavaScript syntax check passed for `media-gallery.js`.
- Browser checks at 320, 390, 768, 1024 and 1440px: no horizontal overflow,
  five details render in the story and none repeat in the main product area,
  two complementary cards render, title is 30px on mobile and 32px on desktop.
- Product accordion opens, quantities sync and sticky visibility follows the
  main controls. Intercepted sticky submission used variant `53743977431379`
  and quantity 2; a simulated 422 response displayed an error. No real cart
  request was sent and checkout was not attempted.
- Mobile complementary carousel scrolls.
- An eight-image DOM-only gallery fixture selected the eighth image, updated
  `aria-current`, scrolled the vertical rail, hid the rail on mobile and caused
  no page overflow. The fixture did not create product media in Shopify.
- No uncaught browser exceptions during these checks. Native multi-size changes
  and interactive Shopify theme-editor reload/reordering still need real data
  or an editor session for end-to-end validation.

Reference captures and test output are in the current workstation's temporary
directory (`balance-product-comparison.json`, `phase1-validation.json` and
`phase1-hydra-*-top.png`); those temporary artifacts are not repository fixtures.

## Stage 2: lower layout implementation, 21 October 2026

Extended Product story with opt-in reference styling, preserving all existing
setting and block IDs. Enabled it on the shared cosmetics template only.

- Added scrolling outlined values with reduced-motion support and a hidden,
  inert duplicate track. Existing benefits provide a fallback; item headings can
  supply shorter values without changing product data.
- Added full-width lavender split panels: story copy left/image right on desktop,
  rituals image left/copy right, and image-first mobile order. Missing images do
  not create a blank image column.
- Added mixed feature/icon and lifestyle-photo presentation, including two empty
  photo slots; asymmetric image-backed results with mobile scroll snapping;
  testimonial cards with optional genuine star ratings; centred service items;
  and a horizontal gallery with four empty image slots.
- FAQ uses question icons and chevrons. Existing questions and dynamic answers
  remain intact. Related products now support an opt-in native Dawn carousel
  and grey background, positioned before services and the final gallery.
- No product imagery, reviews, results, certifications or merchant claims were
  fabricated. Empty sections remain hidden outside the editor. Populate images,
  review content and supported results in the cosmetics template editor.

Theme Check reported no offenses in the changed Liquid or template files.
The full theme still reports existing unrelated locale/translation errors.
No live theme was published. Exact reference screenshot comparison, populated
asset layouts and interactive theme-editor reload checks remain outstanding.

Local Chrome checks after the Stage 2 changes passed at 320, 390, 768 and
1440px: the product page rendered, fonts loaded and no horizontal page overflow
was detected. These checks cover currently populated content, not empty photo,
review or results slots. Screenshots are in the workstation temporary directory.
