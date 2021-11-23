import React from 'react'
import Image from '../Top_Header/Images/6-6.jpg';
import './Details.css'
export const DetailsOfItems = () => {
    return (
        <>

            <div className="container">
                <div className="row details">
                    <div className="col-md-6">
                        <img src={Image} width="100%" height="600px" />
                    </div>
                    <div className="col-md-6">
                        <div class="shadow p-3 mb-5 bg-white rounded" id="shadow">

                            Solar water heater or Solar hot water Technologies are simple, reliable and cost-effective method of harnessing the sun’s energy. Demand for Solar hot water has increased exponentially in recent years as heating, cooling and energy costs continue to skyrocket. Hk traders can help you with fitting a solar water heating system both pressurized & non-pressurized to meet your specific needs, allowing you to realize immediate energy cost savings, lock in your long term energy costs, and helping protect our environment.



                            Technical Specifications of our Solar Water Heating system

                            Flower design pressed on stainless steel shell for better looks and durability.
                            Inner water tank made of super SUS304 food-grade stainless steel plates welded by  argon arc (keep water hot for up to 72 hours).
                            50 mm Polyurethane cellular padding insulation.
                            Stainless steel supports that connect using nuts and bolts for firmness, stability and  easy installation.
                            Milk-White silicon glue ring seal where the vacuum tube connects to the inner water  tank.
                            Adjustable tubes and support to ensure long life of vacuum tubes<br/>
                            <button type="button" className="btn btn-success m-4">Book Now</button>
                        </div>
                    </div>
                </div>
             

            </div>
        </>


    )
}
