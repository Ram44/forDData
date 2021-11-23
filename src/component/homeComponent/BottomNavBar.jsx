import React from 'react'
import { NavLink, useHistory } from "react-router-dom"

export const BottomNavBar = () => {
    let history = useHistory();
    return (
        <div className="container">
            <div className="row bg-light">
                <div className="col-md-4">
                    <p className="h2 text-primary">Quick  Links</p>
                 <NavLink  className="text-decoration-none" to="/">  Home </NavLink> <br />
                
                 <NavLink className="text-decoration-none" to="/about"> About us </NavLink> <br />
                 <NavLink className="text-decoration-none" to="/free">   Get Free Service</NavLink><br />
                 <NavLink className="text-decoration-none" to="/contact">   Contact Us</NavLink>
                 </div>
                <div className="col-md-4"> <p className="h2 text-primary">Contact</p>


                    If you have any queries please contact us

                    Balkumari, Kathmandu, Nepal<br />
                    +977 9860467896 | 01-4431681<br />
                    newrepublick@gmail.com
                </div>
                <div className="col-md-4">
                    <p className="h2">   Facebook Page</p>
                    <p>this section is for facebook page</p>
                </div>
            </div>
        </div>
    )
}
