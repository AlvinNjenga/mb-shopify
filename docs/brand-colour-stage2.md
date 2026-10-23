# Stage 2: global colour foundation

Implemented for review; section-specific colour cleanup remains Stage 3.

## Changes

- Added six editable colour settings under **Theme settings → MEGYN BEAUTY palette**: signature pink, light logo pink, deep action pink, soft blush, dark plum and white.
- Added `snippets/brand-colour-tokens.liquid`, emitting the six `--brand-*` RGB tokens. These are available in storefront and password layouts.
- Updated existing schemes 1–5 in current settings and the saved Sense preset to the approved mapping. Removed legacy gradients. All IDs and non-colour configuration are preserved.
- Removed conflicting palette overrides from `assets/olivelle.css`; retained its typography. Scheme backgrounds, text, buttons and badges now come from Shopify's existing editable colour schemes.
- Added `assets/brand-colours.css`: full-opacity body text, underlined prose links, restrained button hover treatments and opaque offset keyboard focus indicators, with inverse focus on dark surfaces and plum focus on pink panels. Disabled and loading behaviour remains with the existing theme.
- Logos, imagery, product data, commerce scripts and section assignments were not changed.

## Editing behaviour

**Colors** controls each scheme's surface/text/button colours. **MEGYN BEAUTY palette** supplies shared accent tokens. These are separate editable controls: changing an accent does not overwrite saved schemes. If the brand palette changes later, update the related scheme fields too and recheck contrast.

## Review

In the theme editor, review scheme 1 on the header/shopping surfaces, scheme 2 on a supporting section, scheme 3 on a dark section and schemes 4/5 on a panel or badge. Use Tab to check focus on links and buttons. Shared styles are loaded on desktop and mobile with no layout changes.

Solid palette contrast: white/deep pink 6.56:1, plum/white 14.97:1, plum/blush 13.69:1, plum/light pink 10.15:1 and plum/signature pink 5.63:1. Primary button hover adds an 8% label-colour tint; section overrides and opacity-based secondary text still need rendered review in Stages 3–4.

Custom sections can still show hard-coded black, grey and lavender until Stage 3. This includes some purchase buttons, FAQ styles and promotional panels. Hosted checkout is outside this repository's verified styling scope.

## Verification performed

- Both settings files parse successfully as JSON (after removing Shopify's generated comment header).
- The local storefront at `http://127.0.0.1:9292` returns HTTP 200, renders all six expected RGB tokens, loads the shared stylesheet, emits white scheme-1 surfaces and deep pink button variables, and contains no Liquid error marker.
- Shopify Theme Check reports no findings for the new snippet, styles or settings. The full check remains failing on 90 breadcrumb translation errors in untouched locale files and 12 existing warnings, including the existing `scheme_classes` assignments in both layouts.
- No visual browser review or end-to-end shopping test has been completed at this stage. Rendered component accessibility remains subject to Stages 3–4.
