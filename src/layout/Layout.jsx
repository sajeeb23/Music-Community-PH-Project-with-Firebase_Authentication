
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='my-6 container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;