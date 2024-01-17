import { NavLink } from "react-router-dom";
import "./admin.css";

function AdminLogin() {
    return (
        <div className="admin-login">
            <div id="login">
                <h1>Admin Login</h1>
                <form action="">
                    <input required type="email" placeholder="Email/Username" />
                    <input required id="lock" type="password" placeholder="Password"/>
                    <NavLink to="/dashboard"> <button type="submit">Log In</button> </NavLink>
                </form>

                <a href="#">forgot username/password</a>
            </div>
        </div>
    )
}

export default AdminLogin;