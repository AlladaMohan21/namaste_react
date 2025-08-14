import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantCard from "./components/RestaurantCard";  
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";




const AppLayout=()=>{
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>

  )
}

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout></AppLayout>,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
      {
    path:"/about",
    element:<About></About>
      },
      {
    path:"/contact",
    element:<Contact></Contact>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu></RestaurantMenu>
      }

    ],
    errorElement:<Error></Error>

  },
  
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);