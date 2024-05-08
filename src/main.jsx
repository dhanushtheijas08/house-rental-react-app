import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/store/store";
import { Provider } from "react-redux";
const queryClient = new QueryClient();

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./app/auth/Login.jsx";
import AppLayout from "./AppLayout.jsx";
import MainPage from "./app/home/MainPage.jsx";
import SignUp from "./app/auth/SignUp.jsx";
import Payment from "@/components/Payment";
import AllHouseList from "./app/home/AllHouseList";
import AdminDashboard from "./app/admin/AdminDashboard";
import HouseCardList from "./app/home/HouseCardList";
import CreateNewHouseForm from "./app/admin/CreateNewHouseForm";

import HouseDetails from "./pages/HouseDetails/HouseDetails";
import { ProtectedRoute } from "./app/admin/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/all-houses",
        element: <AllHouseList />,
      },
      {
        path: "house/:id",
        element: <HouseDetails />,
      },
    ],
  },
  {
    path: "house/:id/payment",
    element: <Payment />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/admin/dashboard",

    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <HouseCardList />,
      },
      {
        path: "/admin/dashboard/new-house",
        element: <CreateNewHouseForm />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);