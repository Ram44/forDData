import './Testomonial.css'
const Testimonial = () => {
    return (
        <div ClassName="container">
            <div ClassName="row" id="bgColor">
                
                <div ClassName="col-md-12 ">
                    <section class="testimonial-slider mt-2">
                        <div className="h3 text-center mt-5 text-decoration-underline">TESTIMONIALS</div>
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner py-4 text-center">
                                <div class="carousel-item active">
                                    <i class="bi bi-chat-right-quote fs-1 text-danger"></i>
                                    <figure class="text-cent col-md-6 offset-md-3">
                                        <blockquote class="blockquote">
                                            <p>Best place for the all kind of kitchen appliance. Hk traders provide solar water heater, water purifier and many more kitchen & home appliances at competitive price</p>
                                        </blockquote>
                                        <figcaption class="blockquote-footer mt-2 ">Ram Prasad Sharma</figcaption>
                                    </figure>
                                </div>
                                <div class="carousel-item">
                                    <i class="bi bi-chat-right-quote fs-1 text-danger"></i>
                                    <figure class="col-md-6 offset-md-3 mt-4">
                                        <blockquote class="blockquote">
                                            <p>Best place for the all kind of kitchen appliance. Hk traders provide solar water heater, water purifier and many more kitchen & home appliances at competitive price</p>
                                        </blockquote>
                                        <figcaption class="blockquote-footer mt-2">Sujan Neupane</figcaption>
                                    </figure>
                                </div>
                                <div class="carousel-item">
                                    <i class="bi bi-chat-right-quote fs-1 text-danger"></i>
                                    <figure class="col-md-6 offset-md-3 mt-4">
                                        <blockquote class="blockquote">
                                            <p>service is very good. once i got problem with my water purifier, i complained them about it, they fix it within 24 hours. thanks for that.</p>
                                        </blockquote>
                                        <figcaption class="blockquote-footer mt-2">Gita Rijal</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
export default Testimonial