import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Product from "../Components/Products/Product";
import Products from "../Components/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path:'/products/:id',
        element: <Products></Products>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      }
    ]
  },
]);

export default router;

