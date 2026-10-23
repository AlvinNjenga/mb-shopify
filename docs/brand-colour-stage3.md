# Stage 3: component colour rollout

Implemented for approval. Uses the six RGB brand tokens and existing schemes established in Stage 2.

## Components updated

- Header and navigation: signature-pink underline, deep-pink hover/active links and plum-on-pink basket count. Existing floating/scrolled/mobile layouts and logo rendering remain intact.
- Homepage: deep-pink hero action, plum hero text directly over photography, token-based decorative underline, pink/blush info cards, collection features, benefits, testimonials, loved products and promotional accents. The hero panel, padding and rounded corners were removed following review.
- Listings and search cards: white cards, plum titles and prices, more readable muted prices, blush supporting surfaces, deep-pink quick-add controls, filters and load-more action styling. Collection-specific quick-add overrides were corrected after browser review.
- Product: filled deep-pink Add to Basket and Buy It Now, white labels, pink selected variants, blush delivery/complementary panels and plum sticky-bar text. Purchase actions use brand variables even when the existing buy-buttons snippet assigns a secondary class. Preserved loading-label transparency and existing disabled behaviour.
- Saved product stories/offers: replaced reference lavender with selected light pink and blush through the existing editable panel settings.
- Basket: retains the approved shared white/plum scheme and deep-pink checkout action; basket count uses signature pink. No cart or checkout scripts changed.
- Footer/newsletter: footer assigned existing scheme 2 for blush background and plum text; subtle plum separators. Separate disabled newsletter and announcement sections remain disabled.
- About, FAQ and contact: replaced reference black/grey/lavender styling and saved section defaults with plum, white, blush and pink. FAQ buttons use deep pink; existing accordions and contact form behaviour remain in place.

Existing section and block IDs, colour-control IDs, typography, photography, logos, product swatches, semantic inventory colours and payment-provider graphics were preserved. Schema colour defaults and known saved reference colours were updated without replacing editable controls. Black image/video overlays, neutral shadows and white shimmer effects remain deliberately contextual.

The homepage hero photograph itself includes lavender; this is image content, not a remaining CSS colour. It was not recoloured.

## Verification

- Changed JSON settings/templates parse successfully.
- Browser review covered homepage, collection, Hydra-Boost product, empty basket, FAQ, contact and about at 1440px and 390px. Checked rendered colours, Liquid error markers, page overflow, representative focus styles and FAQ toggling. No horizontal overflow or Liquid error markers on those pages.
- Computed quick-add, hero and product purchase buttons use `rgb(172, 33, 111)` with white labels after correcting the collection override. The solid colour pair has 6.56:1 contrast.
- Visually inspected homepage and product screenshots; shopping surfaces remain predominantly white. The hero panel was subsequently removed at the user's request; text-over-image contrast needs review in Stage 4.
- Source scan found none of the audited legacy lavender/black-text colour values in storefront CSS, Liquid or JSON templates. Remaining black values are overlays/shadows, not the legacy text palette.
- Theme Check continues to report the same 90 existing translation errors and 12 warnings recorded in Stage 2. No new check category appeared.

Read-only browser review is reproducible with `docs/brand-colour-review.cjs` against the local theme server. It does not submit forms or change the basket.

## Remaining Stage 4 work

Full rendered contrast and keyboard checks, hover/active/disabled states, a populated basket and shopping-interaction verification remain for the final validation stage. The empty-basket review does not validate populated basket or checkout behaviour. Hosted checkout branding was not modified or verified. No live publication was performed.
