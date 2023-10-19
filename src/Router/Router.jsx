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
import LoginForm from "../Pages/LoginForm/LoginForm";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/addproduct',
        element: <PrivetRoute> <AddProduct></AddProduct></PrivetRoute>
      },
      {
        path:'/products/:id',
        element: <Products></Products>,
        loader:({params})=>fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/products/${params.id}`)
      },
      {
        path:'/update/:id',
        element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
        loader:({params})=>fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/singleproducts/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
        loader:({params})=>fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/singleproducts/${params.id}`)
      },
      {
        path:'/cart',
        element: <PrivetRoute><Cart></Cart></PrivetRoute>,
        loader:()=>fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/carts/`)
      },
      {
        path:'/signup',
        element: <SignUpForm></SignUpForm>
      },
      {
        path:'/login',
        element: <LoginForm></LoginForm>
      }
    ]
  },
]);

export default router;

