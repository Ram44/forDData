import { NavLink } from "react-router-dom";
import Logo from '../Top_Header/Images/download.jpg'

import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className="container nav-bg">
                <div className='row'>
                    <div className='col-md-12 mx-auto'>

                        <nav class="navbar navbar-expand-lg navbar-light bg-info">
                            <div class="container">
                                <NavLink

                                    className="navbar-brand"
                                    to="/">
                                    <img src={Logo} height="60" width="60" alt="logo" />
                                </NavLink>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <NavLink className="nav-link text-white"
                                                activeClassName="menu_active"
                                                aria-current="page" to="/"> Home</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink
                                                activeClassName="menu_active"

                                                className="nav-link text-white " to="/about"> About Us </NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link text-white"
                                                activeClassName="menu_active"

                                                to="free"> Get free Service </NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link text-white "
                                                activeClassName="menu_active"

                                                to="contact"> Contact </NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar
