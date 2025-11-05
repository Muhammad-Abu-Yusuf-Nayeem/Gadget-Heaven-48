# GadgetHeaven — Ultimate Gadget E-Commerce

GadgetHeaven is a feature-rich e-commerce platform built with **React (Vite)**, designed for gadget enthusiasts to explore, shop, and manage gadgets effortlessly. The project focuses on structured navigation, dynamic product categories, and seamless cart and wishlist functionalities.

---

## 🔗 Live Demo

**Website:** [https://gadget-heaven-48.netlify.app/](https://gadget-heaven-48.netlify.app/)
**GitHub Repo:** [https://github.com/Muhammad-Abu-Yusuf-Nayeem/Gadget-Heaven-48](https://github.com/Muhammad-Abu-Yusuf-Nayeem/Gadget-Heaven-48)

---

## 🛠 Tech Stack

- **React (Vite)** — Frontend framework
- **Tailwind CSS** — Styling and layout
- **React Router** — Client-side routing
- **Context API & LocalStorage** — State management
- **React Toastify** — User notifications
- **Charts (Recharts)** — Visualizing product data
- **Netlify** — Deployment

---

## 📁 Directory Structure

```
public/
├─ Products.json
├─ vite.svg
├─ _redirects

src/
├─ App.jsx
├─ main.jsx
├─ index.css
├─ assets/
│  ├─ banner.jpg
│  ├─ cart.png
│  └─ wish.png
├─ Components/
│  ├─ Banner.jsx
│  ├─ Cart.jsx
│  ├─ Dashboard.jsx
│  ├─ DetailsCard.jsx
│  ├─ Footer.jsx
│  ├─ GadCard.jsx
│  ├─ GadgetCards.jsx
│  ├─ HeaderCard.jsx
│  ├─ Hero.jsx
│  ├─ Home.jsx
│  ├─ NavBar.jsx
│  ├─ ProDetails.jsx
│  ├─ ProductCategories.jsx
│  ├─ Root.jsx
│  ├─ Statistics.jsx
│  └─ WishList.jsx
│  └─ Cart/
│     ├─ CartCard.jsx
│     └─ WishCard.jsx
└─ utility/
   ├─ context.js
   └─ DB.js
```

> Includes Vite config, linting rules, and a batch script to generate directory tree.

---

## 🌟 Key Features

1. **Dynamic Product Categories** — Computers, Phones, Smart Watches, Chargers, Power Banks.
2. **Gadget Cards** — Grid layout with image, title, price, and details navigation.
3. **Cart & Wishlist** — Add/remove items with toast notifications, total price, and limit checks.
4. **Dashboard & Statistics** — Tabbed view for Cart/Wishlist, Price sorting, and Charts for data insights.
5. **Enhanced UX** — 404 page, dynamic titles, favicon, background color adjustments, and modals for purchase confirmation.

---

## 🏡 Pages & Functionalities

### Home Page

- Banner with CTA to Dashboard
- Sidebar for product categories
- Product grid displaying gadgets
- Footer with meaningful links

### Details Page

- Complete product info: image, price, description, specs, rating
- Add to Cart & Wishlist functionality
- Disabled wishlist button after first click
- React rating component

### Dashboard

- Tabs for Cart & Wishlist
- Total price calculation
- Sorting by price
- Cart/Wishlist removal
- Optional purchase modal with redirect

### Statistics Page

- Composed chart: Price vs Product Name
- Scatter chart for ratings

### Misc

- Navbar highlights active route
- Persistent state with Context API & optional LocalStorage
- Toast notifications for key actions
- Page-specific background colors using `useLocation()`

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/Muhammad-Abu-Yusuf-Nayeem/Gadget-Heaven-48.git
cd Gadget-Heaven-48
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Build for Production

```bash
npm run build
npm run preview
```

---

## 📜 Available Scripts

| Script                            | Description                       |
| --------------------------------- | --------------------------------- |
| `npm run dev`                     | Start development server          |
| `npm run build`                   | Create optimized production build |
| `npm run preview`                 | Preview production build locally  |
| `npm run lint` / `npm run format` | Optional: Linting and formatting  |

---

## ⚙️ Notes

- SPA routing handled via `_redirects` in Netlify
- Reloading pages does not break routing
- Cart & Wishlist limits enforced
- Toast notifications differentiate actions (Cart vs Wishlist)
- Optional enhancements include cart removal, wishlist transfer, and purchase limits

---

## 📄 Data Structure

All product data is stored in `Products.json` with the following schema:

```json
{
  "product_id": "string",
  "product_title": "string",
  "product_image": "string",
  "category": "string",
  "price": "number",
  "description": "string",
  "Specification": ["string"],
  "availability": true,
  "rating": "number"
}
```

- Each category contains multiple unique items.
- Minimum price per item: $50.
- Categories include: Computers, Phones, Smart Watches, Chargers, Power Banks.

---

## 🎯 React Fundamentals Used

- Components & Props
- State Management with `useState` & `useContext`
- Routing with `React Router`
- Conditional Rendering
- Effects with `useEffect`
- Event Handling
- Dynamic Class & Styling (`useLocation` for background colors)
- List Rendering & Mapping
- Forms & Button Handlers
- Modal & Toast interactions

---

## 💡 Challenges & Solutions

1. **Cart/Wishlist Limit Handling**

   - Ensured cart total ≤ $1000
   - Show error toast if exceeding limit

2. **State Persistence**

   - Context API + optional LocalStorage
   - Prevents data loss on page reload

3. **Dynamic Page Titles & Backgrounds**

   - `useEffect` + `useLocation` used for dynamic title & page-specific styling

4. **Responsive Layout**

   - Grid layouts for product cards
   - Sidebar for categories

5. **Purchase Flow**

   - Modal confirmation
   - Cart cleared without page reload
   - Redirect to Home Page

---

## 🔔 Toast Notifications

- **Cart Actions:** "Item added to cart!"
- **Wishlist Actions:** "Item added to wishlist!"
- **Limit Exceeded:** "Cannot add, cart total exceeds $1000!"

---

## ✅ Optional Enhancements Implemented

- Remove items from Cart/Wishlist
- Move wishlist items to Cart with proper checks
- Disable buttons dynamically after action
- Charts for product analytics (Price & Rating)
- Background color and UI differentiation per page

---

## 📌 Additional Notes

- Navbar & Footer appear on all pages except 404
- Minimum 3 categories implemented
- All pages fully functional without errors on reload
- Fully deployed and tested on **Netlify**
- `_redirects` ensures SPA routing works seamlessly

---

**GadgetHeaven combines professional design, smooth UX, and modern React practices to deliver a polished e-commerce experience for gadget lovers.**
