import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/about"; 
import Error from "./components/error";
import Contact from "./components/contact"
import RestaurantMenu from "./components/restaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Profile from "./components/Profile";

const AppLayout = () => { 
    return (
        <>   
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

// need to provide this appRouter to the app 
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [

        {
            path: '/',
            element:<Body/>
        },
        {
            path: "/about",
            element: <About/>,
            children: [
                {
                    path: 'profile',
                    element: <Profile/>
                }
            ]
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/restaurant/:restId",
            element: <RestaurantMenu/>
        },
    ],
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);