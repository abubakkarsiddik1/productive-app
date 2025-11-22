import { createBrowserRouter, Link } from "react-router";
import App from "../App";
import Roots from "../Pages/Root/Roots";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import ShowAllApps from "../Pages/AllApps/ShowAllApps";
import RatingsChart from "../Pages/RatingsChart/RatingsChart";
import AppDetails from "../Pages/Details/AppDetails";
import InstalledApps from "../Pages/InstalledApps/InstalledApps";

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
      },
        {
        path: 'all-apps/:id',  
        Component: AppDetails
      },
      {
        path: "installed-app",
        Component: InstalledApps
      }
      // {

      //   path: 'rating',
      //   Component: <RatingsChart></RatingsChart>
      // }
    
    ]
},
])

export default router;