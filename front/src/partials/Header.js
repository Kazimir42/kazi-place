import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Header() {
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        isConnected();
    }, [])

    function isConnected() {
        setConnected(!!sessionStorage.getItem('token'))
    }

    function logout() {
        sessionStorage.clear();
        window.location.reload();
    }

    function NotConnectedLinks() {
        return (
            <div className="flex flex-row gap-4 items-center">
                <Link to="/login">
                    Login
                </Link>
                <Link to="/register">
                    Register
                </Link>
            </div>
        )
    }

    function ConnectedLinks() {
        return (
            <div className="flex flex-row gap-4 items-center">
                <Link to="/my-profile">
                    My profile
                </Link>
                <a onClick={logout} className="cursor-pointer">
                    Log out
                </a>
            </div>
        )
    }

    return (
        <header className="py-4 px-8 w-full bg-gray-200 ">
            <div className="flex flex-row mx-auto container gap-4 items-center">
                <Link to="/">
                    Home
                </Link>
                {
                    connected ?
                        <ConnectedLinks />
                        :
                        <NotConnectedLinks />
                }

            </div>
        </header>
    )
}export default Header;