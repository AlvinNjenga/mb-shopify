# Editing the FAQ template

## Shopify page

Created on 20 October 2026 in Megyn Beauty:

- Page: `FAQ`, handle `faq`, template suffix `faq`, published.
- Page ID: `185194185043`.
- Admin API store domain: `h67rbv-zy.myshopify.com` (canonical domain).
- Uploaded the seven FAQ template/section/snippet/asset files to development theme `209422188883` without deleting remote files or publishing the theme.
- Preview: https://megyn-beauty.myshopify.com/pages/faq?preview_theme_id=209422188883
- The live theme needs the FAQ files before it can display the custom design. Header navigation remains a separate step.

Once a Shopify page is assigned the `faq` template, open that page in the theme editor.

- **FAQ categories:** add, remove, or reorder category blocks. Edit headings, descriptions, button labels, links, and images. An uploaded image takes priority over the fallback image URL. On mobile, selecting a category block brings its card into view.
- **FAQ group:** edit the heading, caption, background option, top/bottom padding, and initial first-question state. Add, remove, or reorder question blocks; edit each question and its rich-text answer. Selecting a question block opens its answer in the preview.
- **Category links:** keep each link paired with its group anchor. For example, `#orders` links to the group whose Anchor ID is `orders`. Use a unique, lowercase, hyphenated anchor for each group. Update the card link whenever you change its group anchor.
- **Spacing:** both section types default to 36px top/bottom on desktop and scale that spacing to 75% below 750px.

All previously introduced setting IDs and populated template content remain intact. Existing shared sections and merchant configuration were not modified for this step. New sections can be added using their presets; header and footer groups exclude them.

Validation: Shopify Theme Check reported no FAQ findings. Script checks covered question selection, single-open behaviour, category selection, duplicate script loading, listener cleanup/reconnection, and the populated template's setting IDs. Live theme-editor interaction remains to be verified when the Shopify page is created and assigned the template.
