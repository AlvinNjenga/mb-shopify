# Hydra-Boost product content

This records the original product setup. Hydra-Boost now uses the shared
`cosmetics` template; the old `hydra-boost` template was removed after migration.
See [cosmetics-template-migration.md](cosmetics-template-migration.md) for the
current configuration and backup location.

Updated 20 October 2026 in Megyn Beauty, using Hydra-Boost's existing product
description and image. The Flux reference informed the section structure;
candle content and unverified demo claims were not copied.

## Shopify changes

- Product: `Hydra-Boost Daily Moisturiser`, ID `10588603416915`.
- Audited all existing product metafields. Only the two SEO metafields were
  populated; both were preserved.
- The eight custom metafield definitions already existed.
- Filled seven previously absent custom metafields with create-only digest
  protection: `recommended_for`, `benefits`, `features`, `finish`, `composition`,
  `short_introduction` and `supporting_image`.
- Ingredients explicitly identify hyaluronic acid and shea butter as the known
  key ingredients, not a complete ingredient list.
- Supporting image reuses the existing product image; no new media was uploaded.
- Product title, description, vendor, variants, prices, inventory and SEO were
  not changed.

## Dedicated template

Created `templates/product.hydra-boost.json` from the development theme's current
default product template, retaining section and block IDs and configuration.
Uploaded only this new file to development theme `209422188883` with deletion
disabled, then assigned template suffix `hydra-boost` to this product.

Populated product values, the image and story section, two ingredient cards,
a 24-hour hydration statement and four product FAQs. Content entered directly
in this template is shared only with any other products subsequently assigned
to the same template. Existing default product template content is unchanged.

To edit, open the development theme editor, select Products > hydra-boost,
and preview Hydra-Boost Daily Moisturiser.

No theme was published. Product metafield values and template assignment are
store-wide data changes; the dedicated template file was uploaded only to the
development theme.

## Still needed from the merchant

- Actual application, frequency, storage and care instructions for `custom.usage`.
- Complete ingredient list, if it is to replace the clearly labelled key ingredients.
- Genuine testimonials, service promises and any additional product imagery.

Use & care, testimonials and shopping services remain empty and hidden. No
clinical percentages, candle ingredients, certifications or reference policies
were inserted.

## Validation

- Shopify returned no errors for either product mutation or template upload.
- Local preview renders five product detail blocks, five lower sections and
  four FAQ rows, without Liquid errors.
- Browser checks at 390px and 1440px found no horizontal overflow; FAQ opens.
- Desktop screenshot reviewed, including the existing image in the story section.
- Theme Check reported no findings for the new template, but the whole-theme
  check fails on existing missing breadcrumb translations in unrelated locales.

Preview: http://127.0.0.1:9292/products/hydra-boost-daily-moisturiser

Hosted development preview:
https://h67rbv-zy.myshopify.com/products/hydra-boost-daily-moisturiser?preview_theme_id=209422188883
