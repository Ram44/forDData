import React from 'react'

import './Card.css'
import {NavLink} from 'react-router-dom';
export const CardList = (props) => {
  

    return (
        <>
        <div className="row gx-0 gy-4">
                    
                    <div className='col-md-6'>
                        <div className="row">
                            <div className="col-md-4"><img className="img-fluid" src={props.image}></img></div>
                            <div className="col-md-8">
                                <p className="fs-2">Aqua Royal Crown</p><br></br>
                                <p className="">Aqua Royal Crown is the
                                    Latest technologically advanced RO water purifier with a new design</p><br></br>
                                <p  className="price"><del className='Strike'> Rs 25000 </del>  Rs 20000</p><br></br>
                                <NavLink to='/details' >  <button type="button" className="btn btn-primary">Red More</button></NavLink> 

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="row">
                            <div className="col-md-4"><img className="img-fluid" src={props.image}></img></div>
                            <div className="col-md-8">
                                <p className="fs-2">Aqua Royal Crown</p><br></br>
                                <p className="">Aqua Royal Crown is the
                                    Latest technologically advanced RO water purifier with a new design</p><br></br>
                                <p  className="price"><del className='Strike'> Rs 25000 </del>  Rs 20000</p><br></br>
                                <NavLink to='/details' >  <button type="button" className="btn btn-primary">Red More</button></NavLink> 

                            </div>
                        </div>
                    </div>
                    
                </div>
        </>
    )
}
