# House GRW

House GRW is a house rental application designed to streamline the booking process and provide a seamless experience for users.

## Features

- **Booking System**: Easily book houses for rent.
- **Admin Panel**: Manage properties and bookings efficiently.
- **Map Integration**: View property locations on a map for better understanding.
- **Custom House Pages**: Each house has its own page with detailed information.
- **Sample Payment Integration**: Seamless payment process for booking confirmation.
- **Authentication**: Firebase authentication ensures secure access to the platform.

## Tech Stack

- **Frontend**: React with Vite for a fast development experience.
- **State Management**: Redux for managing application state.
- **Routing**: React Router for navigation between pages.
- **Backend**: Firebase used for authentication and backend services.
- **Data Fetching**: React Query for efficient data fetching and caching.
- **Styling**: Tailwind CSS for styling components.

## Routes

- **Main Page**: `/` - Landing page for the application.
- **All Houses**: `/all-houses` - View all available houses for rent.
- **House Details**: `/house/:id` - Detailed view of a specific house.
  - **Overview**: `/house/:id/overview` - Overview of the property.
  - **Location**: `/house/:id/location` - Location details of the property.
- **Payment**: `/payment` - Payment integration for booking confirmation.
- **Login**: `/login` - User login page.
- **Sign Up**: `/sign-up` - User sign-up page.
- **Admin Dashboard**: `/admin/dashboard` - Dashboard for managing properties.
  - **House List**: `/admin/dashboard` - List of houses available for management.
  - **New House**: `/admin/dashboard/new-house` - Form for adding a new house.
- **Not Found**: `*` - Page displayed when a route is not found.

## Screenshots

![House Example 1](/public/sample-3.png)
![House Example 2](/public/sample-2.png)
![House Example 3](/public/sample-1.png)

## Installation

To get started with House GRW, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/house-rental-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd house-rental-app
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

Once you have installed the dependencies, you can run the project locally:

```bash
npm run dev
# or
yarn dev
```

This will start the development server. You can now access the application by navigating to `http://localhost:3000` in your web browser.
