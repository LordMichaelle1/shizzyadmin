import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/admindash";
import AdminLogin from "./screens/adminlogin";
import ForgotScreen from "./screens/forgot";

function App() {
    return (
        <div>
            <article>
            <Routes>
                <Route path="/" element={<AdminLogin/>}></Route>
                <Route path="/forgotpassword" element={<ForgotScreen />}> </Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
            </article>
        </div>
    )
}


export default App;