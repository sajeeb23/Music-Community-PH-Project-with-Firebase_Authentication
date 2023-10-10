import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Description from "../pages/Description/Description";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const createdRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/music.json')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
                
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: 'service/:id',
                element: <Description></Description>,
                loader: ()=> fetch('/music.json')
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]   
    }
])


export default createdRoute;