import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./ShopPage.jsx";
import ErrorPage from "./ErrorPage.jsx"
import HomePage from "./HomePage.jsx";

export default function Router({isOpen, onCartToggle}) {
    const router = createBrowserRouter ([
        {
          path: "/",
          element: <HomePage onCartToggle={onCartToggle} isOpen={isOpen} navBar={navBar}/>,
          errorElement: <ErrorPage />,
        },
        {
          path: '/shop',
          element: <ShopPage onCartToggle={onCartToggle} isOpen={isOpen} navBar={navBar}/>
        },
      ])

    return <RouterProvider router={router} />;
}