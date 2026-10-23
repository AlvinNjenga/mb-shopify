# Official logo pink for actions

Current decision: action pink is official logo pink `#FF65C3` again, with plum labels/icons on filled controls (5.63:1 contrast). Updated current/preset button colours, action token/default, custom buttons, selected variants and arrows. Focus and navigation text accents remain plum for readability. The existing header backdrop matching and 16px navigation are preserved. The unused scheme 6 was migrated from deep pink to primary pink with plum text as well. The previous deep-pink restoration described below is superseded.

Latest decision: deep action pink `#AC216F` has been restored to its previous action roles, superseding the official-pink action preview below. Current and preset scheme buttons, the editable action setting and token fallback use deep pink again. Custom purchase buttons, quick add, FAQ/load-more controls, selected variants and arrow accents use white labels/icons on deep pink. Light-surface focus and navigation hover accents use deep pink again; pink-panel focus stays plum. White/deep-pink contrast is 6.56:1. Signature pink remains decorative, the hero remains without a panel and the header stays on white scheme 1 with default typography. Commerce logic and logos are untouched.

Historical official-pink preview:

- Replaced `#AC216F` with official logo pink `#FF65C3` in the current and preset colour schemes, brand action default and reusable token fallback.
- Preserved the existing `brand_action` setting ID, renamed its label to Action pink and kept it editable. Its default now matches signature pink.
- Buttons, quick add, selected variants and action icons use dark plum labels/icons on pink: 5.63:1 solid-colour contrast. Dark hover fills retain white labels.
- Kept navigation text and focus indicators plum on light surfaces for readability; signature pink provides decorative link accents. Pink alone on white has insufficient contrast for a focus indicator.
- Hero remains without a text panel. Logo, imagery and shopping logic remain unchanged.

No deep action pink remains in storefront CSS, Liquid, templates or configuration. Historical audit and stage notes retain the original decisions for context. Full Stage 4 validation is still pending.

Browser checks at 1440px and 390px confirm official-pink backgrounds and plum labels on homepage, collection quick-add and product purchase buttons, with no horizontal overflow or Liquid errors on the reviewed pages. FAQ toggling and representative focus styles remain working. Settings JSON parses successfully.

## Header refinement

Latest header treatment: header and menu use existing editable scheme 4, logo background pink `#FFC3E9` with dark plum `#34212E` text and icons (10.15:1 contrast). Existing font sizes and weights remain. Header labels use full-opacity scheme text, including hover states, and focus indicators are plum on the pink surface. The same scheme applies in floating and sticky states. Deep action pink remains on buttons elsewhere. This supersedes the header experiments described below. Original image logos remain untouched.

Header and menu now select the existing scheme 5: official logo pink `#FF65C3` with dark plum `#34212E` text, superseding the earlier light-pink header. Shared header styles use full-opacity scheme text for navigation, the shop-name fallback and icons. Original logo images remain untouched. This pairing has 5.63:1 contrast.

Browser checks at 1440px and 390px confirm identical background, text, menu and icon colours before scrolling and after the homepage header expands into its sticky state. Inner-page header colours match. The existing floating/sticky behaviour and theme-editor scheme controls are preserved.
