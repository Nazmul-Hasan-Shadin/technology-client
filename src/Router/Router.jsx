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
import SignUpForm from "../Pages/SignUpForm/SignUpForm";

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
        loader:({params})=>fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/products/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/singleproducts/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/singleproducts/${params.id}`)
      },
      {
        path:'/cart',
        element: <Cart></Cart>,
        loader:()=>fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/carts/`)
      },
      {
        path:'/signup',
        element: <SignUpForm></SignUpForm>
      }
    ]
  },
]);

export default router;

