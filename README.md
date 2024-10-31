# Scarab React Application

This is a React application that uses `react-router-dom` for client-side routing and `react-hot-toast` for displaying notifications. The application provides a product management interface with routes for viewing, creating, and updating products.

## Features

- **Product List**: View a list of all products.
- **Add New Product**: Add a new product to the list.
- **Update Product**: Update details for an existing product.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **React Router**: Enables client-side routing.
- **React Hot Toast**: Provides elegant notifications.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/scarab-react-app.git
   cd scarab-react-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the application**:
   ```bash
   npm start
   # or
   yarn start
   ```

   The app should now be running on `http://localhost:3000`.

## File Structure

```plaintext
src/
├── components/
│   └── MainLayout.js   # Main layout component wrapping all pages
├── pages/
│   ├── products/
│   │   ├── index.js    # Product list page
│   │   ├── new.js      # New product page
│   │   └── update/
│   │       └── [id].js # Update product page by ID
├── App.js              # Application's root component with routing
└── index.js            # Entry point
```

## Usage

### Routes

- `/` - Redirects to `/products`
- `/products` - Displays a list of products
- `/products/new` - Form for creating a new product
- `/products/update/:id` - Form for updating a product by ID

### Notifications

`react-hot-toast` is used for notifications throughout the app, positioned at the top center of the page.

