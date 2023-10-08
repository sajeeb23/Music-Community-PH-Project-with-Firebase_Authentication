
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='my-6 container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;