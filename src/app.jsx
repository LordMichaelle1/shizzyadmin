import { Routes, Route } from "react-router-dom";
import Dashboard from "./admindash";
import AdminLogin from "./adminlogin";

function App() {
    return (
        <div>
            <article>
            <Routes>
                <Route path="/" element={<AdminLogin/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
            </article>
        </div>
    )
}


export default App;