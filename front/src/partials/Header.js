import {Link} from "react-router-dom";

function Header() {

    return (
        <header className="py-4 px-8 w-full bg-gray-200 ">
            <div className="flex flex-row mx-auto container gap-4 items-center">
                <Link to="/">
                    Home
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <Link to="/register">
                    Register
                </Link>

            </div>
        </header>
    )
}export default Header;