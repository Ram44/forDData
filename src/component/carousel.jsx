import React from 'react'
import One from './Top_Header/Images/one.jpg'
import Two from './Top_Header/Images/two.png';
import Three from './Top_Header/Images/banner.jpg_large';

const Carousel = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Three} className="d-block img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Two} className="d-block img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={One} className="d-block img-fluid" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel
