import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home";
import Product from "./component/product";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
