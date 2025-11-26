# Scarb Yard

A modern React application built with Vite, featuring user authentication, multi-page routing, and responsive design.

## Features

- **User Registration**: Secure registration form with validation using Zod and React Hook Form.
- **Routing**: Client-side routing with React Router DOM for multiple pages (Home, Products, Blogs, About Us, Contact Us, Login, Register, My Account).
- **State Management**: Redux Toolkit with RTK Query for API interactions and global state.
- **Styling**: Tailwind CSS for responsive and modern UI components.
- **Layout**: Consistent app layout with Header, Navbar, and Footer.
- **Error Handling**: 404 Not Found page for invalid routes.

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit, RTK Query
- **Routing**: React Router DOM
- **Forms**: React Hook Form, Zod
- **Build Tool**: Vite
- **Linting**: ESLint

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd scarb-yard
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (default Vite port).

## Project Structure

```
scarb-yard/
├── public/
│   └── vite.svg  # Static assets served by Vite
├── src/
│   ├── assets/  # Additional assets like fonts or icons
│   ├── components/  # Reusable UI components
│   │   ├── AppLayOut/
│   │   │   └── AppLayOut.jsx  # Main layout wrapper with Header, Navbar, Footer, and Outlet for pages
│   │   ├── Footer/
│   │   │   ├── Footer.jsx  # Main footer component
│   │   │   ├── FooterCopyRight.jsx  # Copyright section of footer
│   │   │   ├── FooterHeader.jsx  # Header part of footer
│   │   │   └── FooterNav.jsx  # Navigation links in footer
│   │   ├── Header/
│   │   │   ├── Header.jsx  # Top header component
│   │   │   └── Navbar.jsx  # Navigation bar with links
│   │   ├── images/  # Static images used in components
│   │   │   ├── banner3.png
│   │   │   ├── logo.png
│   │   │   ├── view-bg.jpg
│   │   │   ├── blogs/  # Images for blogs section
│   │   │   ├── footer/  # Images for footer (e.g., social icons)
│   │   │   └── social/  # Social media icons
│   │   ├── NotFound/
│   │   │   └── NotFound.jsx  # 404 error page component
│   │   └── PagesLayout/
│   │       └── PageLayOut.jsx  # Layout component for specific pages
│   ├── pages/  # Page components for routing
│   │   ├── AboutUs.jsx  # About Us page
│   │   ├── Blogs.jsx  # Blogs listing page
│   │   ├── ContactUs.jsx  # Contact Us page
│   │   ├── Home.jsx  # Home/landing page
│   │   ├── Login.jsx  # Login page (uses PageLayOut)
│   │   ├── MyAccount.jsx  # User account page
│   │   ├── Products.jsx  # Products listing page
│   │   └── Register.jsx  # User registration page with form validation
│   ├── App.jsx  # Main app component with routing configuration
│   ├── index.css  # Global CSS styles
│   └── main.jsx  # Application entry point, wraps App with Redux Provider
├── store/  # Redux state management
│   ├── appStore.js  # Redux store configuration with middleware
│   └── userSlice.js  # RTK Query API slice for user-related endpoints (e.g., registration)
├── .gitignore  # Git ignore rules
├── eslint.config.js  # ESLint configuration
├── index.html  # Main HTML template
├── package.json  # Project dependencies and scripts
├── package-lock.json  # Lockfile for exact dependency versions
├── README.md  # This file
└── vite.config.js  # Vite build configuration
```

## Usage

- Navigate through the app using the navbar.
- Register a new user via the `/register` page.
- Access different sections like Products, Blogs, etc.
- The app uses a black background as per the App.jsx styling.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint for code linting.
- `npm run preview`: Preview the production build locally.

## Contributing

Feel free to submit issues and pull requests.

## License

This project is public.
