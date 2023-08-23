import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./ShopPage.jsx";
import ErrorPage from "./ErrorPage.jsx"
import HomePage from "./HomePage.jsx";
import NavBar from "./navBar.jsx";

export default function Router() {
  const navBar = <NavBar/>

    const router = createBrowserRouter ([
        {
          path: "/",
          element: <HomePage navBar={navBar}/>,
          errorElement: <ErrorPage />,
        },
        {
          path: '/shop',
          element: <ShopPage navBar={navBar}/>
        },
      ])

    return <RouterProvider router={router} />;
}