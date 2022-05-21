import {Link} from "react-router-dom";

function Header() {

    return (
        <header className="py-4 px-8 absolute w-full">
            <div className="flex flex-row mx-auto container justify-between items-center">
                <Link to="/">
                    Home
                </Link>
                <div className="flex flex-row items-center gap-8">
                    <div className="flex flex-row items-center gap-4">
                    </div>
                </div>
            </div>
        </header>
    )
}export default Header;