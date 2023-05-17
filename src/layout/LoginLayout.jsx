import { Link, Outlet } from "react-router-dom";


const LoginLayout = () => {
    return (
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;