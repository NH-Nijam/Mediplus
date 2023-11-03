import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import TopHeader from './TopHeader';

const Layout = () => { 
    return (
        <div>   
            <TopHeader/>
            <Header />     
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;