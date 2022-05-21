import {Link} from "react-router-dom";

function Footer() {

    return(
        <footer className="py-16 px-2 mt-auto bg-dark-background">
            <div className="container mx-auto flex px-8 flex-row justify-between text-lg">

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