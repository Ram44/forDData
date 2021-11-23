import React from 'react'


import { CardList } from './Card';
import { useHistory } from 'react-router-dom'
import One from '../Top_Header/Images/6-6.jpg';
import Two from '../Top_Header/Images/aquaosmo-Undersink.jpg';
import Three from '../Top_Header/Images/heateer.jpg';
import Four from '../Top_Header/Images/Kent-Pearl.png';
import Five from '../Top_Header/Images/osmo-baffle-T.jpg';
export const OurProduct = () => {
    let history=useHistory();
    return (
        <>

            <div className="container bg-light">
                <div className='row'>
                    <div className='col-12 mx-auto text-center h1 text-decoration-underline text-success'> OUR PRODUCTS</div>
                    <CardList image={One}/>
                    <CardList image={Two}/>
                    <CardList image={Three}/>
                    <CardList image={Four}/>
                    <CardList image={Five}/>
                    
                </div>
                
            </div>
        </>
    )
}
