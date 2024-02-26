import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ErrorPage from "../Page/ErrorPage";
import LayOut from "../LayOut";
import Signup from "../Register/Signup";
import Login from "../Register/Login";
const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut></LayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
    ]
    },

  ]);

  export default router;
