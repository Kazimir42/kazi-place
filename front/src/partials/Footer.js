import {Link} from "react-router-dom";

function Footer() {

    return(
        <footer className="py-16 mt-auto bg-gray-800">
            <div className="container mx-auto flex flex-row justify-between text-lg">

                <ul>
                    <li>
                        <Link to="/" className="ml-auto text-white hover:text-primary duration-200">Home</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )

}
export default Footer;