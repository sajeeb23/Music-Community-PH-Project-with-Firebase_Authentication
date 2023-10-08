import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

const createdRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/music.json')
            },
            {
                path: '/services',
                element: <Services></Services>,
                
                
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])


export default createdRoute;