import { createBrowserRouter, Navigate } from "react-router";
import Login from "../auth/Login";
import RegisterForm from "../auth/RegisterForm";
import Layout from "../Layout/Layout";
import ResetPassFields from "../auth/ForgotPassword/ResetPassFields";
import EmailForm from "../auth/ForgotPassword/EmailForm";
import VerifyOtp from "../auth/ForgotPassword/VerifyOtp";


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
      {
        path: "/forgot-password",
        element: <EmailForm />,
      },
      {
        path: "/forgot-password/verify",
        element: <VerifyOtp />,
      },
      {
        path: "/forgot-password/new-password",
        element: <ResetPassFields />,
      }
    ]
    },

]);

export default router;
