import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;