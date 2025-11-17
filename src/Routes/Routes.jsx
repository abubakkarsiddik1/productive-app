import { createBrowserRouter, Link } from "react-router";
import App from "../App";
import Roots from "../Pages/Root/Roots";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import ShowAllApps from "../Pages/AllApps/ShowAllApps";
import RatingsChart from "../Pages/RatingsChart/RatingsChart";

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
        path:'RatingsChat',
        Component: RatingsChart
      }
    ]
},
])

export default router;