import { createBrowserRouter } from "react-router";
import App from "../App";
import Roots from "../Pages/Root/Roots";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import ShowAllApps from "../Pages/AllApps/ShowAllApps";

 const router = createBrowserRouter([
{
  path:'/',
  Component: Roots,
  errorElement: <ErrorPage />,
children: [
      {
        index: true,  
        Component: Home
      },
      {
        path: 'all-apps',  
        Component: ShowAllApps
      }
    ]
},
])

export default router;