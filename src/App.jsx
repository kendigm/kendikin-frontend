import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Product from "./pages/product/Product";
import Products from "./Components/products/Products";
import PaymentConfirm from "./pages/payments/PaymentConfirm";
const Layout = () => {
  return <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
}
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
        path: "products",
        element: <Products />,
      },
      {
        path: "products/1",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <Product />,
      }, {
        path: "checkout-success",
        element: <PaymentConfirm />,
      },
    ]
  },
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;