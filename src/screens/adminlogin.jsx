import { NavLink } from "react-router-dom";
import "../styles/login.css";

function AdminLogin() {
    return (
        <div className="admin-login">
            <div id="login">
                <h1>Admin Login</h1>
                <form action="http://localhost:80/shizzyadmin-master/php/loginvalid.php" method="POST">
                    <input required type="email" placeholder="Email/Username" name="email" />
                    <input required id="lock" type="password" placeholder="Password" name="pass"/>
                    <input type="submit" value="Log in" name="subBtn" />
                    {/* <button type="submit"><NavLink class to="/dashboard">  Log In </NavLink></button>  */}
                </form>
                <NavLink className="forgot-password" to="/forgotpassword"> forgot username/password </NavLink>
            </div>
        </div>
    )
}

export default AdminLogin;
