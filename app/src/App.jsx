import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import React from "react";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent/ForgotPasswordSent";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import ResetPasswordDone from "./pages/Auth/ResetPasswordDone/ResetPasswordDone";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./components/Auth/ProctectedRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/transactions",
    element: (
      <ProtectedRoute>
        <TransactionPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/support",
    element: (
      <ProtectedRoute>
        <Support />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <AlreadySigninRoute>
        <Signup />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <AlreadySigninRoute>
        <Signin />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <AlreadySigninRoute>
        <RegisterEmailVerify />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/register-success",
    element: (
      <AlreadySigninRoute>
        <RegisterSuccess />{" "}
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AlreadySigninRoute>
        <ForgotPassword />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/forgot-password-sent",
    element: (
      <AlreadySigninRoute>
        <ForgotPasswordSent />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <AlreadySigninRoute>
        <ResetPassword />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/reset-password-done",
    element: (
      <AlreadySigninRoute>
        <ResetPasswordDone />
      </AlreadySigninRoute>
    ),
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
