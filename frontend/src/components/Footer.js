import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="sm:flex h-40 p-4 mx-auto text-gray-300 bg-gray-900 ">
             <div className="flex-1">
                 <div className="sm:space-x-8 space-x-2 text-left">
                     <Link to="/">
                        Home
                     </Link>
                     <Link to="/Gallery">
                        Gallery
                     </Link>
                     <Link to="/Shop">
                        Store
                     </Link>
                     <Link to="/About">
                        About
                     </Link>
                     <Link to="/Contact">
                        Contact
                     </Link>
                 </div>
             </div>
             <div className="flex-1 text-right">
                 <span>Todos los derechos resevados</span>
             </div>
        </div>
    )
}

export default Footer;
