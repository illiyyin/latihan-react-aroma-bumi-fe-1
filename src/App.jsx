import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home";
import Product from "./component/product";
import Contact from "./component/contact";
import Store from "./component/store";
import Layout from "./component/shared/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
