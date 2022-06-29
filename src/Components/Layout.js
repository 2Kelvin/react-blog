import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <Header title="React JS Blog"/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
// carries all the react-router components that are always present