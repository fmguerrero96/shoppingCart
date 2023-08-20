import App from "../App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./ShopPage.jsx";
import ErrorPage from "./ErrorPage.jsx"

export default function Router() {
    const router = createBrowserRouter ([
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/shop',
          element: <ShopPage />
        },
      ])

    return <RouterProvider router={router} />;
}