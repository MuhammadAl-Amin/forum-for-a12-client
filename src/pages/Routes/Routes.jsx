import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../Home/Home/Home";
import Membership from "../membership/membership";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/membership",
        element: (
          <PrivateRoute>
            <Membership></Membership>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
