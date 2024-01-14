import "./admin.css";

function AdminLogin() {
    return (
        <div className="admin-login">
            <div id="login">
                <h1>Admin Login</h1>
                <form action="">
                    <input type="email" placeholder="Email/Username" />
                    <input id="lock" type="password" placeholder="Password"/>
                    <button type="submit">Log In</button>
                </form>

                <a href="#">forgot username/password</a>
            </div>
        </div>
    )
}

export default AdminLogin;