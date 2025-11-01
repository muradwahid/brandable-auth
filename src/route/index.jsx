import { createBrowserRouter, Navigate } from "react-router";
import Login from "../auth/Login";
import RegisterForm from "../auth/RegisterForm";
import Layout from "../Layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Error</div>,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/signin" replace />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <RegisterForm />,
      },
    ]
    },

]);

export default router;
