# FAQ reference capture

Source: https://flux-demo-6.myshopify.com/pages/faq
Captured: 20 October 2026. Step 1 only; no storefront files changed.

## Structure and appearance

- No separate visible FAQ page title or hero before the category cards.
- Three desktop category cards with circular images, serif titles, descriptions, and black rounded View Faq buttons. Thin vertical dividers separate the cards.
- Buttons target #orders, #shipping, and #product respectively.
- Mobile uses a horizontal swipe carousel, with a partial next card visible. At a 390px viewport, cards measured 340.5px wide with 10px gaps; document width remained 390px.
- Three stacked FAQ groups, each with Support FAQs above its heading and five accordion rows. Orders and Product groups use pale grey section backgrounds with white rows; Shipping uses a white section background with pale grey rows.
- Desktop FAQ content is approximately 990px wide and centred. Desktop group titles: Fraunces, 52px, weight 700, line height 66.04px. Category titles: Fraunces, 22px, weight 700. Questions: Inter, 18px, weight 400, line height 22.86px. Text colour: #1d1d1d.
- Closed summary rows measured 50px high, with 13.5px padding and 8px corner radii. Question-mark icons sit left; chevrons sit right.
- Reference section padding is 36px top/bottom on desktop and 27px below 750px for cards and FAQ groups.
- First Orders question opens initially; the other fourteen start closed. Opening another question in that group closes the previous one after the animation. Cross-group exclusivity has not been separately tested.
- Contact area follows the groups: Can't find an Answer? Get in Touch!, with Answer italicised and decorated by an animated underline. Image and text appear beside a contact form on desktop; the form contains Name, required Email, Phone number, Comment, and Send.
- Contact image: hero-2.webp; overlay caption: Get in Touch. Overlay copy: Have questions or need assistance? We're here to help! Contact us anytime, and we'll get back to you as soon as possible.
- Existing store header/footer surround the page. Implementation should use this store's existing shared header/footer.

## Capture files

- content-and-desktop.json: all fifteen answers as HTML, category copy, image URLs, initial open states, and measured desktop styles.
- desktop.png: full-page desktop screenshot (1440px configured viewport).
- mobile.png: full-page mobile screenshot (390px configured viewport), captured after testing the second Orders accordion.
- mobile.json: mobile carousel measurements and rendered text after the interaction test.
- Screenshots disable scroll-reveal opacity/transforms so below-fold content can be reviewed. These captures document the layout rather than animation timing. The contact form was inspected but not submitted.

## Category cards
### Orders & Support

Orders & Support

We’re here to ensure your shopping experience is smooth and enjoyable. If you have any questions or need assistance with an order, our support team is ready to help.

View Faq

Image: https://flux-demo-6.myshopify.com/cdn/shop/files/orders.webp?v=1773567707&width=1420

Target: #orders

### Shipping & Returns

Shipping & Returns

We want you to love your purchase! Our shipping process is quick and reliable, with options that fit your needs. If for any reason you’re not completely satisfied, our simple returns process makes it easy to return items.

View Faq

Image: https://flux-demo-6.myshopify.com/cdn/shop/files/shipping.webp?v=1773567720&width=1420

Target: #shipping

### Product Info

Product Info

Explore the unique features of each product in our collection. From high-quality materials to thoughtful design, we provide detailed information to help you make the best choice.

View Faq

Image: https://flux-demo-6.myshopify.com/cdn/shop/files/face-oil-2-c.webp?v=1772622546&width=1420

Target: #product

## Exact accordion content

### Orders & Support

#### How can I place an order?

<p>Placing an order  is quick and easy. Simply browse our online store, select the products you desire, and add them to your cart. Proceed to the checkout process, where you'll provide your shipping and payment details. Once your order is confirmed, we'll take care of the rest.</p>

#### What payment methods do you accept?

<p>We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and other secure online payment platforms. Rest assured that your payment information is protected and encrypted for a secure transaction.</p>

#### How long will it take to receive my order?

<p>We strive to process and ship orders as quickly as possible. After your order is placed, please allow 1-2 business days for processing. Shipping times may vary depending on your location and the shipping method selected at checkout. You can find more information about estimated delivery times on our website or contact our support team for specific inquiries.</p>

#### Can I track my order?

<p>Yes, absolutely! Once your order is shipped, we'll provide you with a tracking number via email. You can use this tracking number to monitor the progress of your package and stay updated on its estimated delivery date. If you have any issues with tracking your order, feel free to reach out to our support team for assistance.</p>

#### What if I have questions or need assistance with my order?

<p>We're here to help! If you have any questions or need support regarding your order, our dedicated customer support team is available to assist you. You can reach out to us through our contact form, email, or phone. We strive to provide prompt and helpful responses to ensure your shopping experience with us is seamless.</p>

### Shipping & Returns

#### Do you offer international shipping?

<p>Yes, we offer international shipping to many countries. However, please note that international shipping times and costs may differ from domestic shipping. Make sure to review the shipping options available for your country during the checkout process.</p>

#### How long does shipping take?

<p>Shipping times can vary depending on your location and the shipping method chosen. Typically, domestic orders within [Country] are delivered within 3-5 business days. International shipping times may range from 7-14 business days, depending on the destination. Please note that these are estimated times and delays may occur due to unforeseen circumstances or customs procedures.</p>

#### What is your return policy?

<p>We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, we accept returns within 30 days of the original purchase date. Please ensure that the product is unopened, unused, and in its original packaging for a successful return. Kindly refer to our Returns Policy on our website for detailed instructions on initiating a return.</p>

#### How do I initiate a return?

<p> Initiating a return is easy. Simply contact our customer support team with your order details and reason for return. Our team will guide you through the process and provide you with further instructions on returning the product. Please note that return shipping costs may be the responsibility of the customer, unless the return is due to an error on our part.</p>

#### What if my order arrives damaged or there is an issue with the product?

<p>We apologize for any inconvenience caused by a damaged or defective product. If you receive a damaged item or there is an issue with the product, please contact our customer support team immediately. We will gladly assist you in resolving the issue and arranging a replacement or refund as necessary.</p>

### Product Info

#### Are your products vegan?

<p>Yes, all our products are 100% vegan. We are proud to offer a wide range of food that are free from any animal-derived ingredients or by-products.</p>

#### Are your products organic?

<p>Absolutely! We prioritize the use of organic and natural ingredients in our formulations. Our products are carefully crafted to harness the power of nature.</p>

#### Are your products cruelty-free?

<p>Yes, we are proud to be a cruelty-free brand. We do not conduct any animal testing, and our products are certified cruelty-free by reputable organizations. We believe in the ethical treatment of animals and ensure that our products are developed without any harm to our furry friends.</p>

#### What are the main ingredients used in your products?

<p>We use a wide range of natural and organic ingredients in our products. Each product has a unique formulation designed to provide specific benefits. Common ingredients you'll find in our products include botanical extracts, plant oils, vitamins, and minerals, all carefully selected for their nourishing your body.</p>

#### Do you offer products for specific skin concerns?

<p>Yes, we offer a variety of products tailored to address specific skin concerns such as dryness, acne, aging, and sensitivity. Our range includes moisturizers, serums, cleansers, masks, and more, each formulated to target and improve specific skin issues. Explore our product descriptions or reach out to our customer support team for personalized recommendations.</p>

