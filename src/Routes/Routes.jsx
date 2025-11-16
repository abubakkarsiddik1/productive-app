import { createBrowserRouter } from "react-router";
import App from "../App";
import Roots from "../Pages/Root/Roots";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";

 const router = createBrowserRouter([
{
  path:'/',
  Component: Roots,
  errorElement: <ErrorPage />,
  children: [
    {
        index: true,
        path:'/',
        Component: Home
    }
  ]
},
])

export default router;