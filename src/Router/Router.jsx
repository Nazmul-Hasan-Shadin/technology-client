import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Product from "../Components/Products/Product";
import Products from "../Components/Products/Products";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../Pages/PoductDetails/ProductDetails";
import Cart from "../Pages/Carts/Carts";

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
      },
      {
        path:'/update/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5000/singleproducts/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`http://localhost:5000/singleproducts/${params.id}`)
      },
      {
        path:'/cart',
        element: <Cart></Cart>,
        loader:()=>fetch(`http://localhost:5000/carts/`)
      }
    ]
  },
]);

export default router;

