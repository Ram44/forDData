import React from 'react'
import Call from '../Top_Header/Images/phone-call.png';
import Map from '../Top_Header/Images/placeholder.png';
import Banners from '../Top_Header/Images/banner.jpg_large';

const TopHeader = () => {
    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-md-4">
                <img className="img-fluid" src={Banners} height="20px" width="350px"></img>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-2"><img className="img-fluid" src={Call} height="60px" width="60px"></img></div>
                        <div className="col-md-10">
                            GET IN TOUCH<br />
                            +977 9860467896 | 01-4431681
                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                    <div className="row ">
                        <div className="col-md-2 "><img className="img-fluid" src={Map} height="60px" width="60px"></img></div>
                        <div className="col-md-10">
                            OUR OFFICE<br />
                            KUMARIPATI, KATHMANDU, NEPAL
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader

// <div className="container">
//             <div className="row">
//                 <div className="col-md-10">

//                 </div>
//             </div>
//         </div>