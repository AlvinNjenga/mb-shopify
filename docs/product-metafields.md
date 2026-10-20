# Product-specific content

The default product template includes six Product detail blocks. Each reads a
metafield from the current product and renders nothing when its value is empty.
Theme files do not create metafield definitions in Shopify Admin.

## Create definitions in Shopify Admin

Open Settings → Custom data → Products (or Metafields and metaobjects → Products).
Add these definitions with the exact namespace and key below:

| Name | Namespace and key | Type |
| --- | --- | --- |
| Skin types | `custom.skin_types` | Single line text |
| Skin benefits | `custom.skin_benefits` | Rich text |
| Target concerns | `custom.target_concerns` | Single line text |
| Texture | `custom.texture` | Single line text |
| Ingredients | `custom.ingredients` | Rich text |
| How to use | `custom.usage` | Rich text |
| Short introduction (optional) | `custom.short_introduction` | Rich text |
| Supporting image (optional) | `custom.supporting_image` | File, restricted to images |

Then open Products → a product → Metafields, enter its real content and save.
Repeat for each product. No sample claims or ingredients have been entered.

## Theme editor

Under Default product → Product information, Product detail blocks can be
reordered in the details column, renamed, added or removed. Their metafield key
setting uses the `custom` namespace, so enter `ingredients`, not
`custom.ingredients`. The heading only appears when content or an image exists.

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
Sizes, prices, SKU and stock remain native Shopify variants.

## Lower product page sections

The default template includes eight Product story sections, in this order:
product values, brand/product story, ingredients, rituals, results, FAQ,
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
storefront. The story, ingredients and rituals sections automatically read
custom.short_introduction, custom.ingredients and custom.usage respectively
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
