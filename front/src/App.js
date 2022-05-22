import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";
import {useEffect, useState} from "react";
import GuestRoute from "./GuestRoute";

function App() {
    const [token, setToken] = useState(null)

    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    }, [])

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <BrowserRouter>
                <Header/>
                <div className="container mx-auto mt-8">
                    <Routes>
                        <Route element={<PrivateRoute token={token} />}>
                            <Route path="/" exact element={<Home/>}/>
                        </Route>
                        <Route element={<GuestRoute token={token} />}>
                            <Route path="/register" exact element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Route>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;
