# Car Center

A React storefront for browsing and buying cars: a home page, a product
listing, product detail pages, a cart, and a login-protected checkout.

Built with React 18, React Router 6 and Create React App.

## Features

- **Product listing and details.** Browse the catalog at `/products` and open
  `/product/:id` for a car's description and specs.
- **Cart.** "Add to Cart" on a details page adds the car, or bumps its quantity
  if it's already there. The navbar shows a live count.
- **Protected checkout.** `/checkout` redirects to `/login` until you sign in,
  then shows an order summary with the total, plus shipping and payment forms.

The catalog is hardcoded in `src/pages/ProductListing.js` and
`src/pages/ProductDetails.js`, and cart and auth state live in `App.js`
(`useState`). There's no backend: the demo login is `user@example.com` /
`password`.

## Project structure

```
src/
  App.js              routes, cart and auth state
  components/         Navbar, Footer
  pages/              Home, ProductListing, ProductDetails, Cart, Checkout, Login
public/images/        car photos
```

## Getting started

```bash
npm install
npm start        # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server with hot reload |
| `npm test` | Jest + React Testing Library (`CI=true npm test` for a single run) |
| `npm run build` | Production build in `build/` |

## License

[MIT](LICENSE)
