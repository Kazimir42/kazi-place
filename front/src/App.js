import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <BrowserRouter>
                <Header/>
                <div className="container mx-auto mt-8">
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/register" exact element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;
