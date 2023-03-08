import { Link } from "react-router-dom";
import logo from "../images/logo.webp"
import CartIcon from "../CartWidget"
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="bg-400 shadow text-gray">
            <nav className='md:flex md:items-center md:justify-between'>
                <div className="flex justify-between items-center">
                    <span className="text-xl mx-6">
                        <Link to={`/`} >
                            <img className="h-12 mx-3" src={logo} alt="logo"></img>
                        </Link>
                    </span>
                </div>

                <ul className='md:flex md:items-center bg-500 md:bg-500  md:static w-full left-0 md:w-auto py-5 md:pl-0 pl-7'>
                    <div className="md:flex py-1 text-xl text-gray-700 dark:text-gray-800">
                        <div>
                            <NavLink to={`/category/pillow`} className="block rounded-t-lg py-2 px-6 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pillow</NavLink>
                        </div>
                        <div>
                            <NavLink to={`/category/bag`} className="block rounded-t-lg py-2 px-8 hover:bg-yellow-100 dark:hover:bg-gray-600 dark:hover:text-white">Bag</NavLink>
                        </div>
                    </div>

                    <li className="text-xl hover:text-black-800 duration-500 my-4 mx-4 md:my-0">
                        <a href="#">Contacto</a>
                    </li>
                    <li className="text-xl hover:text-gray-800 duration-500 my-4 mx-4 md:my-0 ">
                        <CartIcon />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
