import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountDone from "./Pages/AccountDone";
import ForgetPassword from "./Pages/ForgetPassword";
import LoginPage from "./Pages/LoginPage";
import ResetYourPassword from "./Pages/ResetYourPassword";
import SignupPage from "./Pages/SignupPage";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignupPage />,
  },
  {
    path: "/reset-your-password",
    element: <ResetYourPassword />,
  },
  {
    path: "/account",
    element: <AccountDone />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
