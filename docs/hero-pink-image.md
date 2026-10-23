# Logo-background-pink hero photograph

Colour-match refinement: generated JPEG backdrop samples are `#FCBEE7` on desktop and approximately `#FCC0E6` on mobile, rather than exact requested `#FFC3E9`. The scheme-4 header locally matches these measured colours at the existing 749px image-source breakpoint, including the sticky state. Other scheme-4 surfaces retain the official palette value. The photograph may still contain small tonal/compression variations.

Created desktop and mobile edits with the built-in image generation tool, using the existing respective hero photographs as edit targets. Requested only the lavender studio background change to official logo pink `#FFC3E9`, preserving people, products, lighting, poses and composition. AI edits retain the overall scene but are not pixel-identical foreground copies.

Final assets:

- `assets/megyn-hero-desktop-light-pink.jpg` â€” 1698 Ã— 926, approximately 165 KiB.
- `assets/megyn-hero-mobile-light-pink.jpg` â€” 1448 Ã— 1086, approximately 206 KiB.

Generated PNGs were encoded to JPEG at quality 92 for storefront delivery. Original hero files remain available. `sections/custom-hero.liquid` references the new assets in its existing desktop/mobile fallback branches, retaining merchant image-picker overrides, responsive cropping, priority/loading behaviour, text and buttons. Collection hero photography is unchanged.

Final prompt (desktop; mobile uses the corresponding original and its 4:3 composition):

> Edit target: attached existing ecommerce hero photograph. Change ONLY the flat lavender studio background to official MEGYN BEAUTY logo pink #FFC3E9 (RGB 255,195,233), uniform solid pink. Preserve everything else as faithfully as possible: same three women, exact faces, skin tones, hair, clothing, poses, expressions, hands, beauty roller, gua sha tool, serum bottle and label, lighting, photographic realism, composition and crop. Keep wide 2200x1200 aspect ratio and large empty left/top negative space exactly as reference. Do not add text, logos, objects, gradients, panels, or change foreground colours. Output a single full landscape edited photograph.

The earlier bright-pink JPEG assets were deleted from the project at the user's request. New edits were generated from the original lavender photographs using the built-in image generation tool, requesting only a uniform soft light pink backdrop (#FFC3E9) and preservation of the foreground and composition.
