# MEGYN BEAUTY colour audit and proposed mapping

Stage 1 — 23 October 2026. Proposal only; no storefront changes made.

## Existing system

- The theme identifies itself as Shopify Sense 16.0.0 in `config/settings_schema.json`. It uses Dawn-style Online Store 2.0 Liquid sections, JSON templates and plain CSS; no package.json was found.
- `config/settings_data.json` contains five saved colour schemes plus a Sense preset. They include cream, lime, purple and gradients.
- `layout/theme.liquid` generates Dawn RGB colour variables from the saved schemes, then loads `base.css` and `olivelle.css`.
- `assets/olivelle.css` overrides schemes 1, 2, 4 and 5 with white/black, then sets schemes 4 and 5 to lavender. Scheme 3 is dark. This overrides merchant colour settings and obscures the saved palette.
- Typography is also defined in `olivelle.css` using Inter and Fraunces assets. Preserve it for this colour-only work.
- Custom section CSS and section/block settings contain additional literal colours. Global scheme edits alone will not cover these.
- Header and menu use scheme 1. The floating header and inner-page header have separate styles. Footer currently uses scheme 1; the grey footer override targeting scheme 2 does not match this saved assignment.
- The announcement bar and separate footer newsletter are disabled. Preserve those states; the footer's own newsletter is enabled.
- Logo markup uses the existing `settings.logo` image picker, with shop-name fallback. The local current settings do not include a selected logo image. Preserve the markup and any live merchant logo selection; do not apply image filters.

## Proposed tokens

Keep all existing scheme and setting IDs. Add named brand colour settings to the existing theme settings system and emit reusable RGB variables through a small shared Liquid snippet. Existing Dawn variables remain the component API. Replace the conflicting palette overrides rather than stacking another competing palette over them.

| Proposed token | Value | Role |
| --- | --- | --- |
| `--brand-pink` | `255, 101, 195` | Signature decorative accents and small details |
| `--brand-light-pink` | `255, 195, 233` | Selected promotional panels |
| `--brand-action` | `172, 33, 111` | Primary actions, active controls and light-surface focus indicators |
| `--brand-blush` | `255, 241, 249` | Supporting sections and newsletter/footer backgrounds |
| `--brand-text` | `52, 33, 46` | Text, headings and dark surfaces |
| `--brand-white` | `255, 255, 255` | Shopping surfaces, cards and primary button labels |

Use existing `--color-background`, `--gradient-background`, `--color-foreground`, `--color-button`, `--color-button-text`, `--color-link` and badge variables. Border and muted-text treatments can derive from plum; verify the composited colours. Keep explicit section colour controls editable, with approved palette values for known legacy defaults and saved reference colours. Preserve unrelated merchant values.

## Proposed scheme mapping

| Existing ID | Background / text | Intended role |
| --- | --- | --- |
| `scheme-1` | White / plum | Header, navigation, main shopping areas, product cards, product detail and basket |
| `scheme-2` | Soft blush / plum | Supporting sections, footer and newsletter |
| `scheme-3` | Plum / white | Existing dark sections; use sparingly |
| `scheme-4` | Light logo pink / plum | Selected promotional panels |
| `scheme-5` | Signature pink / plum | Compact accent badges rather than large page areas |

Primary buttons on light schemes: deep pink with white labels. On dark surfaces, retain an accessible inverse treatment where required. Use deep pink hover accents and blush hover backgrounds; plum can provide a darker pressed state. Use a visible offset focus ring with a contrasting separation on dark surfaces. Keep navigation labels plum. Use signature pink decoratively; meaningful icons need a darker colour or sufficient surrounding contrast.

Scheme 5 is currently selected for sale badges; retain its ID and use plum labels. Footer can use scheme 2 explicitly without changing any setting IDs. Avoid a bulk reassignment of sections: select blush and promotional backgrounds individually to retain predominantly white pages.

## Component follow-through in Stage 3

- Header/navigation: floating, scrolled, inner-page and mobile states; cart count, menus, search and focus.
- Homepage: info-card saved colours in `templates/index.json`, feature panels, section buttons and newsletter.
- Listings/search: `olivelle-card-product.css`, `collection-reference-cards.css`, `collection-toolbar.css`, filters, quick add, badges and pagination. Keep photography and cards white.
- Product: `section-cosmetics-product.css`, standard product styles, selected variants, quantity controls, complementary products and sticky product bar. The current custom Add to Basket is white/black and the buy-buttons snippet can assign a secondary class when dynamic checkout is enabled: style the purchase action deliberately without changing checkout logic.
- Saved product panels: `templates/product.cosmetics.json` includes lavender offer and brand-story panels, including `#e9e4fc` and `#efecf7`.
- Basket: page, notification and drawer styles, including the existing checkout button. Current cart mode is notification; preserve it.
- Footer, FAQ, contact and about pages: remove applicable hard-coded reference palette colours while retaining image overlays needed for legibility.
- Preserve product swatch values, photography, logos, payment-provider marks and semantic error/success colours. These require contextual review rather than blanket replacement.

## Accessibility findings

Calculated using sRGB relative luminance for solid, fully opaque colours. These are palette checks, not a claim that all rendered components pass.

| Foreground / background | Contrast | Proposed use |
| --- | --- | --- |
| White / deep pink | 6.56:1 | Primary button labels |
| Plum / white | 14.97:1 | Main text |
| Plum / light logo pink | 10.15:1 | Promotional text |
| Plum / soft blush | 13.69:1 | Supporting text |
| Plum / signature pink | 5.63:1 | Accent badge labels |
| Deep pink / soft blush | 6.00:1 | Supporting links |
| White / signature pink | 2.66:1 | Avoid for text and meaningful icons |
| Deep pink / light logo pink | 4.45:1 | Avoid for normal-size text; use plum |

Review opacity-based text, placeholder text, muted prices, selected filters and focus states at their actual rendered values. Current custom styles contain `#777`, `#aaa`, low-opacity text and hard-coded black focus indicators. Links in prose need an underline or another non-colour distinction.

## Checkout scope and verification limits

The repository contains basket checkout controls and product purchase controls, but no checkout layout or checkout branding configuration. Storefront changes can cover those controls. Hosted checkout branding availability and the store plan cannot be established from these files; inspect the store's checkout editor/settings before promising or applying hosted checkout changes. Preserve accelerated payment integrations and their provider branding.

Stage 1 was a source audit and palette calculation. No browser verification, live admin inspection or functional testing was performed. Git was unavailable on the shell PATH, so an initial Git working-tree status could not be obtained. Only this audit document was added.

## Approval boundary

Approve the token roles and scheme mapping before Stage 2. Stage 2 will implement the tokens and shared component states for review; section-by-section rollout remains Stage 3. No deployment is included in this audit.
