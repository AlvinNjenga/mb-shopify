# Cosmetics template migration

## Step 1: confirmed

Created `templates/product.cosmetics.json` from `product.hydra-boost.json`.
The original template, product assignments, metafields, setting IDs, shared
Liquid sections and CSS filenames are unchanged.

The new template retains section/block IDs, order and layout settings, with
these changes to prevent Hydra-Boost content appearing on other cosmetics:

- Benefit icon labels use each product's features, finish and recommended-for
  metafields. Icons use generic check mark, bottle and heart symbols.
- Product values uses the current product's benefits metafield.
- Story text, image, details, ingredients and usage read the current product's
  existing metafields.
- FAQ questions are generic, with answers from the product's benefits, usage,
  composition and short-introduction metafields. Unanswered rows stay hidden.
- Removed Hydra-specific ingredient-card text and result numbers from the new
  template. Empty card blocks remain available for future dynamic sources;
  results stays hidden until populated. The original template retains its content.
- Cleared the fixed serum/lip-butter selections so complementary products can
  use Shopify's product-specific recommendations instead of a shared fixed list.
- Support and returns wording remains shared across cosmetics as previously
  requested. No Shopify policy records were changed.

No new metafield definitions are required for this step. Products with missing
metafield values show less content until their own data is entered. Adding
literal content in the cosmetics template editor shares it across all products
using this template; use dynamic sources for product-specific cards or results.

## Validation

- JSON, section types, block types and section/block ordering checks passed.
- No Hydra-specific literal product names, ingredients, skin types, hydration
  claims or fixed complementary-product handles remain in the new template.
- Confirmed the original Hydra-Boost template was unchanged by creation.
- Shopify Theme Check reports no findings for the new template. The whole
  theme has 90 pre-existing locale errors and 11 warnings.
- Existing development-server syncing made the new file available in the
  development preview; no explicit push or product assignment was performed.
- Alternate-template previews for Hydra-Boost and Radiance Vitamin C Serum
  rendered product pages without Liquid errors or Hydra-specific FAQ text.
  Empty serum metafields correctly leave product FAQ answers hidden.

Review without changing the product's assigned template:

- Hydra-Boost: http://127.0.0.1:9292/products/hydra-boost-daily-moisturiser?view=cosmetics
- Serum: http://127.0.0.1:9292/products/radiance-vitamin-c-serum?view=cosmetics

## Step 2: confirmed

Renamed the files locally and updated their stylesheet references in
`sections/main-product.liquid`:

| Previous name | New name |
| --- | --- |
| `assets/section-reference-product.css` | `assets/section-cosmetics-product.css` |
| `assets/product-reference-typography.css` | `assets/cosmetics-product-typography.css` |

SHA-256 checks confirmed both CSS files are byte-for-byte unchanged by the
renames. CSS classes, font-family aliases and setting IDs were retained.
The typography implementation document now points to the new filename.

Validation:

- No runtime references to either previous CSS filename remain in sections,
  snippets, layouts, templates or assets.
- The original Hydra-Boost preview and alternate cosmetics preview each link
  to both renamed assets; all four asset requests returned HTTP 200 with
  the expected file sizes. Neither page reports Liquid errors.
- Theme Check reports no new errors. Main product retains its two existing
  warnings; unrelated whole-theme locale findings remain unchanged.
- Existing development-server syncing served the renamed assets automatically.
  No explicit upload, publication or product assignment was performed in step 2.

## Step 3: confirmed

Verified that the local preview uses development theme `209798365523`,
Development (ae6f4d-Alvin), then explicitly uploaded only these migration files:

- `templates/product.cosmetics.json`
- `sections/main-product.liquid`
- `assets/section-cosmetics-product.css`
- `assets/cosmetics-product-typography.css`

The upload completed successfully with remote deletion disabled. Downloaded
these four files into a separate temporary audit directory and confirmed the
remote contents match the local files. Shopify adds an auto-generated comment
header/formatting to the JSON template; its parsed configuration is identical.

Both Hydra-Boost and serum alternate-template previews render without Liquid
errors and include both renamed stylesheets. Product assignments were not
changed; the old Hydra-Boost template remains available. No live theme was
published and no remote files were deleted.

## Step 4: confirmed

Audited the complete Shopify catalogue: three products, each in Shopify's
Cosmetics taxonomy. Assigned `templateSuffix: cosmetics` to those products
without changing other product fields.

| Product | Product ID | Previous template | Assigned template |
| --- | --- | --- | --- |
| Radiance Vitamin C Serum | `10588600861011` | Default (empty suffix) | `cosmetics` |
| Hydra-Boost Daily Moisturiser | `10588603416915` | `hydra-boost` | `cosmetics` |
| Velvet Lip Butter | `10588607447379` | Default (empty suffix) | `cosmetics` |

All three Shopify mutation results returned the intended suffix with no user
errors. Their normal local product URLs, without `view=cosmetics`, now render
with cosmetics styling, no Liquid errors and no old Hydra-specific FAQ text.

Template assignments are store-wide Shopify product data; the cosmetics theme
files have been uploaded to development theme `209798365523`. No live theme was
published. New cosmetic products still require an explicit template assignment;
this step does not create an automatic category-to-template rule.

At the end of step 4, the old template was retained. To reverse the assignments
after step 6, restore the old template file from backup before restoring its
suffix. The audit and mutation results are in the
workstation temporary files `cosmetics-step4-before.json` and
`cosmetics-step4-assignment-results.json`.

## Step 5: deferred by merchant

Jewellery separation checks are deferred because jewellery has not been
uploaded yet. Leave future jewellery products on Default product or assign a
separate jewellery template; category alone does not choose the template.

## Step 6: completed

Re-audited the complete catalogue and confirmed all three products use
`cosmetics`; no products use `hydra-boost`. Saved a backup outside the theme at
`%TEMP%/cosmetics-migration-backup/product.hydra-boost.json`, then removed
`templates/product.hydra-boost.json` locally and from development theme
`209798365523`. Remote deletion was restricted to that exact filename.

Downloaded matching templates into a fresh audit directory: the old template
is absent remotely and `product.cosmetics.json` remains present. No runtime
references to the old file remain. All three normal local product URLs render
with cosmetics styling and no Liquid errors after removal.

No live theme or other development theme was modified in step 6. Nothing was
published. The cosmetics migration is complete for the current catalogue;
jewellery validation remains deferred until jewellery products are available.
