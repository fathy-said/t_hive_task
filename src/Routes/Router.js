import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
export let Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>errorElement</div>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <div>errorElement</div>,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <div>errorElement</div>,
      },
    ],
  },
    {
        path: "*",
        element: <div>not found</div>,
    },
]);
