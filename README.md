# Real Estate Web App

A responsive real estate website built with React, Vite, Material UI, and React Router. The project focuses on a clean user interface and a feature-based architecture that makes the code easier to understand, maintain, and extend.

## About the Project

This project is a web application built around the real estate and property discovery space. It provides a foundation for presenting property-related information through a dedicated website, with an emphasis on responsive design, navigation, and a structured frontend codebase.

The idea is to create a web experience that can be developed further into a property platform, whether for showcasing properties, presenting property information, or supporting other real estate-related workflows.

The application also explores how to organise a React project so that new features can be added without placing the entire codebase into a few large components.

## The Problem It Addresses

A real estate website needs to do more than display attractive images. It should provide a clear browsing experience, work across different screen sizes, and make it easy for users to move between pages.

From a development perspective, it also needs a code structure that can accommodate additional pages and features as the application grows.

This project addresses those frontend concerns by combining a responsive interface with feature-based organisation and client-side routing.

## Features

### Responsive Interface

The application is designed to work across different screen sizes, helping maintain a usable experience on both desktop and mobile devices.

### Home Page

The home page provides a starting point for the real estate experience, using property-related imagery and calls to action to introduce the platform.

### Login Page

The application includes a login interface with form validation, loading states, and success or error feedback.

### Demo Authentication

The project includes a demo authentication flow intended to demonstrate the login experience. It should not be treated as a production identity or security system.

Demo credentials documented by the project:

- **Email:** `demo@example.com`
- **Password:** `password`

### Client-Side Routing

React Router is used to organise navigation between pages without requiring a full page reload for each route.

### Material UI Components

Material UI provides reusable interface components and a consistent approach to styling the application's user interface.

### Feature-Based Architecture

The codebase separates application-level configuration, feature-specific code, and shared resources. This makes the project easier to navigate and provides a clear place to add new functionality.

## Technology Stack

- **React 19** — Building the user interface.
- **Vite** — Development server and build tooling.
- **Material UI v5** — UI components and styling.
- **React Router v6+** — Client-side routing.
- **Emotion** — CSS-in-JS styling.
- **JavaScript** — Application programming language.

## Project Structure

The source code is organised around application configuration, feature modules, and reusable resources.

```text
src/
├── app/
│   ├── router/
│   ├── theme/
│   └── store/
├── features/
│   ├── home/
│   │   ├── components/
│   │   └── pages/
│   └── auth/
│       ├── components/
│       ├── pages/
│       └── services/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── constants/
├── App.jsx
└── main.jsx
```

The feature-based approach keeps related components and pages together. Shared UI elements, utilities, and application-wide configuration are kept separate from individual features.

## Getting Started

### Prerequisites

- Node.js 16 or later
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/PhilipNzube/real-estate-web-app.git
cd real-estate-web-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal. The default Vite development URL is usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

- `dev` starts the development server.
- `build` creates a production build.
- `preview` serves the production build locally.
- `lint` runs ESLint.

## Customisation and Extension

The project structure makes it possible to extend the application with additional features.

Potential areas for further development include property listings, search and filtering, property details, saved properties, and more complete user account functionality. These would require additional implementation beyond the features currently documented.

The Material UI theme can also be customised to adjust the application's colour palette, typography, spacing, and component styles.

## Deployment

The project can be built for deployment using:

```bash
npm run build
```

The generated `dist` directory can then be deployed to a compatible static hosting provider.

## Live Demo

https://naija-luxury-homes.netlify.app/

## Source Code

https://github.com/PhilipNzube/real-estate-web-app

## License

The repository README identifies the project as available under the MIT License. Review the repository's licence file and any third-party asset licences before redistributing the project.
