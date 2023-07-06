
import React from "react";
import './style.css'
import { Link } from "react-router-dom";


const Navbar = () =>{
    return(
        <div>
            <div>
                <ul className="navigate">
                 <li>
                    <Link to={'/'}>
                    HOME
                    </Link>
                 </li>
                 <li>
                    <Link to={'./Products'}>
                      Products
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