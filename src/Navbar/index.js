
import React from "react";
import './style.css'
import { Link } from "react-router-dom";


const Navbar = () =>{
    return(
        <div>
            <div className="navbar">
                <ul className="navigate">
                 <li><a>
                    <Link to={'/'}>
                    HOME
                    </Link>
                    </a></li>
                 <li>
                    <Link to={'./Products'}>
                      PRODUCTS
                    </Link>
                 </li>
                 {/* <li>
                    <Link to={'./SingleProduct'}>
                     
                    </Link>
                 </li> */}
                </ul>
            </div>
        </div>
    )

}
export default Navbar