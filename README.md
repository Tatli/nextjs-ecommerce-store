# WELCOME TO THE NUMBER ! WEBSITE SHOP ON THIS PLANET!

## Description

Introducing Your Path to Online Success - Custom Websites Tailored to Your Unique Vision!

🌐 Are you ready to make your online dreams a reality? We're here to make it happen, one pixel at a time! Welcome to AccessIT, your go-to destination for exceptional, tailor-made websites that truly reflect your brand's essence.

🚀 Why Choose Us? 🚀

🌟 Bespoke Creations: At AccessIT, we're all about turning your ideas into stunning digital masterpieces. Our team of web design wizards is ready to transform your vision into a website that's uniquely yours.

💡 Innovative Solutions: We're not just another web design company. We're innovators, crafting websites that not only look amazing but also function seamlessly. Whether you're a small business looking to establish a digital presence or an e-commerce powerhouse seeking to optimize user experience, we've got you covered.

🌐 Responsive Design: In today's digital landscape, your website must adapt to every screen size. We create responsive websites that look gorgeous on smartphones, tablets, and desktops, ensuring that your visitors have an unforgettable experience.

🎨 Aesthetics That Pop: We understand that your website is a reflection of your brand, and first impressions count. Our designs are not just visually appealing but strategically designed to capture attention and maintain engagement.

🔒 Top-Notch Security: Rest easy knowing your website is in safe hands. We implement robust security measures to safeguard your site against cyber threats, providing peace of mind for you and your users.

📈 SEO Optimization: Get noticed on search engines with our SEO-friendly websites. We employ best practices to ensure that your site ranks well and attracts the audience you desire.

🔧 Easy Maintenance: We believe in making your life easier. Our user-friendly content management systems allow you to update your site with ease, ensuring your website is always up-to-date.

💪 Dedicated Support: Our commitment to your success doesn't end with the website launch. We provide ongoing support and maintenance to keep your site running smoothly.

🌐 Your Vision, Our Expertise: Every website we create is a fusion of your vision and our expertise. We take the time to understand your goals, brand identity, and target audience, allowing us to build a website that exceeds your expectations.

💼 Suitable for All Industries: No matter your niche, we have the skills and experience to create a website that perfectly suits your industry, whether you're in retail, hospitality, healthcare, finance, or any other sector.

🌈 Endless Possibilities: Your website's potential is as limitless as your imagination. We're ready to bring your wildest digital dreams to life. Let's start building something extraordinary together!

Ready to take the plunge into the digital world with a website that wows your audience? Contact us today, and let's get started on your online journey. Your success is our mission, and we can't wait to make it happen.

🌟 [Shop Now] and let's turn your vision into a digital masterpiece that takes your online presence to the next level! 🌟

## List of Technologies used

- Next.js
- Node.js
- TypeScript
- SCSS
- HTML
- Docket
- Jest
- Ley
- Playwright
- Postgres

## Screenshots

## Setup instructions

Install dependencies
`pnpm install`

Create a file named ".env" in the root directory and fill in the fields whose value is xxx

```
PGHOST=localhost
PGUSERNAME=xxx
PGPASSWORD=xxx
PGDATABASE=xxx
```

## Deployment instructions

- Deploy to [Fly.io](https://fly.io/) ([cheatsheet](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-deployment/#deploying-a-nextjs--postgresql-app-to-flyio))

## TypeScript / JSDoc

- Write at least 2 pages with props and 4 other non-migration, non-database files in TypeScript (type the React props like in [the cheatsheet](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-typescript-jsdoc/))

## Tests

This project should also include tests written for the following functionality:

- E2E: Add to cart, change quantity and remove from cart
- E2E: Checkout flow, payment page, thank you page
- Unit: Test function that combines the product data from the database with the product quantity data from your cookie
- Unit: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
- Unit: Test cart sum function
- Set up GitHub Actions to automatically test your code

## SEO

- Add titles to all pages
- Add meta descriptions to all pages

## Deploying

## Documentation

- Create a readme with:
  - Title
  - Description
  - List of all technologies used
  - 1 or 2 screenshots
  - Setup instructions
  - Deployment instructions

## Stretch goals

- Loading indicator (text or animation) that displays during loading of a page, including an HTML element with the attribute `data-test-id="loading"`
- Allow changing quantity of items in the cart
- Add a unique `slug` to each product to allow for URLs like `/products/<product slug>`
  - Also change all of the `data-test-id` attributes on all pages to use the `slug` instead of the `id`, eg. on the Products page, `data-test-id="product-<product slug>"`
  - A `slug` is a URL-friendly string that is used to identify a product (eg. "apple-iphone-11-pro-max") - hyphens instead of spaces, all lowercase, no special characters
- Add validation for data entered by the user
  - Add frontend validation with error messages
  - Add server-side validation to check the information being submitted by the user and return errors
  - Write unit test for server-side validation functions
- Save the cart data to a database table in addition to a cookie (eg. using a join table)
- Add search functionality
- Make authentication system with users
- Allow admin login to edit and delete products
- Use Next.js API routes for returning information from the database
- Use GraphQL to send information between React and the backend
- Set up Stripe as a payment handler between the Checkout and Thank You page
  - Don't skip creating the full Checkout page, including all shipping and payment form fields - this is still a required part of the project
  - To add Stripe to the checkout page, a button or anchor element should be visible with the HTML attribute `data-test-id="stripe-pay"`
  - Clicking on this button should send the user to a Stripe payment form, where it accepts the credit card details (this page needs to accept the `4242 4242 4242 4242` Stripe test card number)
  - Upon submitting the Stripe payment form, the user needs to be directed to the Thank You page on your website
- Right after [creating your first (empty) Git commit](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-command-line/#5-create-and-push-an-initial-commit), create a new branch. Use this branch to [open a pull request on GitHub](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-git-github/#opening-pull-requests)
- Accessibility: Fully keyboard- and screenreader-accessible
- Create a favicon that identifies your app: (see [Generating and Adding Favicons](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-design-ux/#generating-and-adding-favicons))
- Test and further improve your SEO (meta tags, performance, image optimization, sitemaps, etc)

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: Fly.io deployed website
- [ ] [Drone bot](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-git-github/#writing-commit-messages))
