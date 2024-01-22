import { NavLink } from "react-router-dom";
import "./login.css";

function AdminLogin() {
    return (
        <div className="admin-login">
            <div id="login">
                <h1>Admin Login</h1>
                <form action="">
                    <input required type="email" placeholder="Email/Username" />
                    <input required id="lock" type="password" placeholder="Password"/>
                    <button type="submit"><NavLink class to="/dashboard">  Log In </NavLink></button> 
                </form>

                <NavLink className="forgot-password" to="/forgotpassword"> forgot username/password </NavLink>
            </div>
        </div>
    )
}

export default AdminLogin;