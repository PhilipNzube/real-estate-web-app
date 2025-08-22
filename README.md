# Real Estate Web App

A modern React application built with Vite, Material-UI, and React Router, featuring a clean feature-based architecture.

## 🚀 Features

- **Feature-based folder structure** - Organized like Flutter's feature-first approach
- **Material-UI v5** - Modern, accessible UI components
- **React Router v6+** - Client-side routing
- **Responsive design** - Mobile-friendly interface
- **Authentication system** - Login functionality with demo credentials
- **Clean architecture** - Scalable and maintainable code structure

## 📁 Project Structure

```
src/
├── app/                    # Application-level configuration
│   ├── router/            # Routing configuration
│   ├── theme/             # MUI theme setup
│   └── store/             # State management (future)
├── features/              # Feature-based modules
│   ├── home/              # Home feature
│   │   ├── components/    # Feature-specific components
│   │   └── pages/         # Feature pages
│   └── auth/              # Authentication feature
│       ├── components/    # Auth components
│       ├── pages/         # Auth pages
│       └── services/      # Auth services
├── shared/                # Shared resources
│   ├── components/        # Reusable components
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utility functions
│   └── constants/         # App constants
├── App.jsx               # Main app component
└── main.jsx              # Application entry point
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Material-UI v5** - UI component library
- **React Router v6+** - Client-side routing
- **Emotion** - CSS-in-JS styling

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication

The app includes a demo authentication system:

- **Demo credentials:**

  - Email: `demo@example.com`
  - Password: `password`

- **Features:**
  - Login form with validation
  - Loading states
  - Error handling
  - Success feedback
  - Local storage persistence

## 🎨 Customization

### Theme

The MUI theme is configured in `src/app/theme/theme.js`. You can customize:

- Color palette
- Typography
- Component styles
- Spacing and breakpoints

### Adding New Features

1. Create a new folder in `src/features/`
2. Follow the structure: `components/`, `pages/`, `services/`
3. Add routes in `src/app/router/routes.js`
4. Update navigation in `src/shared/components/Layout.jsx`

## 📱 Pages

### Home Page (`/`)

- Welcome card with real estate imagery
- Call-to-action buttons
- Responsive design

### Login Page (`/login`)

- Clean login form
- Form validation
- Loading states
- Error/success feedback

## 🔧 Development

### Code Style

- Use functional components with hooks
- Follow feature-based organization
- Keep components small and focused
- Use Material-UI components consistently

### State Management

Currently using React's built-in state management. For larger applications, consider adding:

- Redux Toolkit
- Zustand
- React Query (for server state)

## 🚀 Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

## 🤝 Contributing

1. Follow the existing code structure
2. Add new features in the appropriate feature folder
3. Update documentation as needed
4. Test thoroughly before submitting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
