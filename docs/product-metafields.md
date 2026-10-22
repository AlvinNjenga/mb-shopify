# Product-specific content

The current cosmetics products use `templates/product.cosmetics.json`.
Select Products > cosmetics in the theme editor when editing their shared
layout. Product-specific content should use metafields or dynamic sources.
See [cosmetics-template-migration.md](cosmetics-template-migration.md) for
assignment details; jewellery remains separate and has not been uploaded yet.

The default product template includes six Product detail blocks. Each reads a
metafield from the current product and renders nothing when its value is empty.
Theme files do not create metafield definitions in Shopify Admin.

## Create definitions in Shopify Admin

Open Settings → Custom data → Products (or Metafields and metaobjects → Products).
Add these definitions with the exact namespace and key below:

| Name | Namespace and key | Type | Cosmetics content | Jewellery content |
| --- | --- | --- | --- | --- |
| Recommended for | `custom.recommended_for` | Single line text | Suitable skin types | Occasion or intended wearer |
| Benefits | `custom.benefits` | Rich text | Product benefits | Comfort, versatility or design benefits |
| Key features | `custom.features` | Single line text | Formula or application features | Clasp, setting or adjustable fit |
| Texture / finish | `custom.finish` | Single line text | Cream, oil or matte finish | Polished, brushed or satin finish |
| Ingredients / materials | `custom.composition` | Rich text | Actual ingredient list | Metals, plating, stones and other materials |
| Use & care | `custom.usage` | Rich text | Application and storage instructions | Wearing, cleaning and storage instructions |
| Short introduction (optional) | `custom.short_introduction` | Rich text | Product overview | Product overview |
| Supporting image (optional) | `custom.supporting_image` | File, restricted to images | Product detail or application image | Material or craftsmanship detail image |

The examples describe what belongs in each field; enter only information that
applies to the actual product. Leave irrelevant fields empty to hide their blocks.
There is no need to enter skin information for jewellery or metal information for
cosmetics. Use separate product templates if you want category-specific headings
such as Ingredients for cosmetics and Materials for jewellery.

Then open Products → a product → Metafields, enter its real content and save.
Repeat for each product. Theme changes do not create or rename Admin definitions,
copy stored values, or populate product content.

### Existing cosmetic metafields

Create the generic definitions above for new content. Existing values remain
supported through these fallbacks in Product detail and Product story blocks:

| New field | Existing fallback |
| --- | --- |
| `custom.recommended_for` | `custom.skin_types` |
| `custom.benefits` | `custom.skin_benefits` |
| `custom.features` | `custom.target_concerns` |
| `custom.finish` | `custom.texture` |
| `custom.composition` | `custom.ingredients` |

A populated generic field takes precedence. If it is empty, the existing field
is used. This also works when a saved block still specifies the old key. The
`custom.usage`, `custom.short_introduction` and `custom.supporting_image` keys
are unchanged. Do not delete existing definitions until any content you want to
keep has been copied to the new fields and checked on the storefront.

Explicit Content overrides and dynamic-source connections keep their existing
precedence; a connection to an old definition continues reading that definition
until you reconnect it. Saved merchant headings are not automatically renamed.
The repository's default template uses the generic headings listed above.

## Theme editor

Under Default product → Product information, Product detail blocks can be
reordered in the details column, renamed, added or removed. Their metafield key
setting uses the `custom` namespace, so enter `composition`, not
`custom.composition`. The heading only appears when content or an image exists.

Leave Content empty to read the configured metafield automatically. Alternatively,
connect Content to a compatible dynamic source. A nonempty Content value takes
precedence over the metafield key. Literal content is shared across all products
using this template; use dynamic sources for product-specific values.

For a supporting image, connect the block's Supporting image setting to the
product's supporting image metafield using the dynamic source icon. Leaving that
connection empty produces no image. Add a Product detail block connected to the
short introduction if needed; it is not enabled by default to avoid duplicating
the existing product description.

Existing Dawn Collapsible row blocks can also connect their Content settings to
compatible rich text metafields. Empty rows are hidden when both their content
and selected page content are empty. Product popup links are hidden until their
selected page has content. Empty text blocks are also hidden.

Product title, main description and gallery remain native product fields.
Sizes, colours, prices, SKU and stock remain native Shopify variants.

## Lower product page sections

The default template includes eight Product story sections, in this order:
product values, brand/product story, ingredients/materials, use & care, results, FAQ,
testimonials and shopping services. They appear under Product information and
disclosures, before recommendations. Move, hide or remove them in the theme editor.

These sections work before metafield definitions exist: enter Introduction,
choose an Image and populate Content items directly in the editor. Each item has
a heading/question, rich text content/answer, optional image/icon, result value
and testimonial attribution. The Layout setting selects how these fields render.
FAQ rows require both a question and an answer. For other layouts, enter content
or choose an image to display an item. Result values and author names alone do
not display a card.

Rich text containing only empty HTML tags is treated as empty. Sections only
count items that can actually render, so an incomplete FAQ cannot leave an empty
section heading or padded area on the storefront. An image can display a story
section or non-FAQ card without accompanying text. Empty details or purchase
columns are omitted, and the remaining information column expands on desktop.

Empty sections display a setup message only in the editor and stay hidden on the
storefront. The story, ingredients/materials and use & care sections automatically read
`custom.short_introduction`, `custom.composition` and `custom.usage` respectively
when their Introduction setting is blank. Other fields and images can connect
to compatible dynamic sources after the Admin setup. Literal section settings
and testimonials are shared across products using this template.

All layouts support images, color schemes and top/bottom spacing. Image and story
can place its image on either side on desktop, stacking on mobile. Claims,
results, service promises and testimonials are deliberately empty until you add
your own content. The existing Customer reviews section remains available via
Add section if its product-linked carousel is preferred to testimonial cards.

## Sticky purchase bar

Default product → Sticky purchase bar controls the bar's enabled state, desktop
and mobile visibility, and color scheme. It appears only after the main Buy
buttons block has scrolled above the viewport. On a short page with a tall
viewport it may never need to appear.

The bar follows the main form's price, availability and quantity. Its quantity
field updates the main quantity selector, and its purchase button submits Dawn's
original form, including selected variant, app properties and selling plans.
Keep the main Buy buttons block enabled. Size selection remains in Product
information; the bar does not introduce a second variant picker.

### Reference lower layouts (cosmetics template)

The cosmetics template now enables reference styling on Product story sections.
The new Scrolling product values, Mixed feature and image grid and Horizontal
image gallery layouts preserve existing content fields. For the mixed grid,
choose Feature presentation: Lifestyle photo on image blocks; other items use
small icons. Two empty photo slots and four gallery slots are ready to populate.
Review stars default to zero (hidden); enter only the actual review rating.
Story panel background is configurable, and Desktop image position still controls
the split panels. Mobile split panels place the image first. Results and gallery
items scroll horizontally on small screens. Empty sections stay hidden.

### Cosmetics text-only overview

The cosmetics template's About the product section uses the Text-only product
information layout. It displays custom.short_introduction and the existing
Product detail blocks, with custom.usage labelled How to Use. Empty fields hide
their blocks. Section and block images are omitted in this layout; other layouts
retain their image settings. Select Products > cosmetics in the theme editor to
edit this section's labels, block order and dynamic sources.

### Optional product promotion

Products > cosmetics > Product information > Product promotion controls an offer
panel below the About/How to Use accordions. It is empty and hidden by default.
Enter a heading and/or offer details, with an optional labelled link and color
scheme. Use compatible product dynamic sources for product-specific offers;
literal text applies to every product using cosmetics. This display block does
not configure a Shopify discount.

### Cosmetics lower-page sections

The lower page now orders Store offers, Brand stories, FAQ, Three benefits,
Customer stories and Share Your Glow. Configure them under Products > cosmetics.
Brand stories and benefits use each product's existing benefits, usage, composition,
recommended-for and finish fields. With Use product images enabled, missing card
images use the corresponding product image; explicit block images take priority.
The gallery fallback still runs only when all gallery content items are empty.

Content item blocks now support a labelled link and, for testimonials, a Reviewed
product selector. Enter only genuine review copy, rating and attribution. Store
offers and reviews stay hidden while empty. Offer copy is display content and does
not create discounts. New section copy and links entered literally are shared by
all products using cosmetics. The former values, ingredients, results,
recommendations and service sections remain saved but disabled.

### Content audit - 22 October 2026

All eight product definitions exist in Shopify. Hydra-Boost's existing values are
preserved. Radiance Vitamin C Serum now has seven product-content fields sourced
from its description; Velvet Lip Butter has five. Lip usage and recommended skin
types remain blank pending supplied content. Composition fields contain known
key ingredients rather than a complete ingredient list.

Content item blocks and Purchase information now offer a Fallback product field
setting. The cosmetics template connects it for Product Info, brand stories,
benefits and FAQ. A populated Content override/dynamic source takes precedence;
when it is empty, the fallback key supports generic and legacy cosmetic metafields.
Missing text hides brand/benefit cards that would otherwise contain only an
automatic fallback product image. Explicit merchant images still display.

The shared testimonials now copy four reviews from the merchant-owned reference
website, with existing bundled product images/portraits. Edit their quote, author,
rating, image, portrait and optional Reviewed product in the Customer stories
layout. Selecting a real product enables its local product link; unuploaded
reference products remain text labels. The heading and quotes apply across the
cosmetics template. Historical notes above about empty reviews are superseded.

### Per-product benefit card copy

The Three benefits section can enable Use product benefit copy. It reads
custom.benefit_card_copy (JSON): an array of up to three objects containing title
and text, in block order. Both values are required for an override; otherwise the
existing block copy remains. Images continue using their existing sources.
Hydra-Boost has moisturiser-specific copy here; other products retain their
previous content. Edit the product's Benefit card copy metafield to change it.

### Usage summary (optional)

custom.usage_summary is an optional rich-text product field for the short caption
in Your skincare ritual. It takes precedence there; the existing custom.usage
fallback is retained for products without a summary. How to Use and its FAQ answer
continue to display the complete custom.usage instructions. Hydra-Boost now has
three ordered usage steps and retains its original short copy as the summary.
