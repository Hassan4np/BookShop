import { Outlet } from "react-router-dom";
import Navbar from "./Page/Navbar";
import Footer from "./Page/Footer";


const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;