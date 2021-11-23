import Logo from '../Top_Header/Images/logo.png';
import {BsFillEnvelopeFill ,BsGeoAltFill} from "react-icons/bs";
import { FaPhoneAlt} from "react-icons/fa";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ContactUS = (props) => {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return (
        <>
            <div className="container">
                <div className="row bg-light">
                    <div className="col-md-12 bg-light text-center">
                      
                        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyARxGmpkj9DdEeZ-hsh3DwPMG6SZoGZgzU" }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent
            lat={27.687107482442176}
            lng={85.34183362578639}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
                    </div>
                </div>
                {/* end of map  section? */}
                <div className="row mb-2">
                    <div className="col-md-4 bg-light gx-4 mt-2">
                        <span className="  h5 text-primary"> New Republic Kitchen & Solar Home</span><br />
                        <span className='fw-lighter'>Balkumari, Kathmandu, Nepal</span>  <br />
                        (Near to Sunrise Bank )<br />
                        <span className="text-primary h5">Call Us:</span> <br />
                        +977-(01)-4431681 | +977-9860467896<br />

                        <span className="text-primary h5">Email:</span> <br />
                        newrepublick@gmail.com<br />

                        <span className="text-primary h5">Visit Us:</span> <br />
                        facebook.com/RepublicKitchenSolar<br />



                        <div className="row  pt-6 mt-4">
                            <div className="col-md-1"><BsGeoAltFill/></div>
                            <div className="col-md-10">
                                <span className="fs-5"> Address</span>  <br />

                                <span className="text-primary"> Baluwatar, Kathmandu, Nepal</span>

                            </div></div>
                        <div className="row  pt-6">
                            <div className="col-md-1"><FaPhoneAlt/></div>
                            <div className="col-md-10">
                                <span className="fs-5"> CALL US</span>  <br />
                                <span className="text-primary">
                                    +977 9860467896 | 01-4431681

                                </span>

                            </div></div>
                        <div className="row  pt-6">
                            <div className="col-md-1"><BsFillEnvelopeFill/></div>
                            <div className="col-md-10">
                                <span className="fs-5"> Email</span>  <br />

                                <span className="text-primary">newrepublick@gmail.com</span>
                            </div></div>
                    </div>
                    <div className="col-md-6 bg-light gx-4 gy-4 ">
                        <form>
                            <div className="form-group m-2">

                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />

                            </div>
                            <div className="form-group m-2">

                                <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                            </div>
                            <div className="form-group m-2">

                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Subject" />
                            </div>
                            <div className="form-group m-2">

                                <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                            </div>
                            <div className="form-group m-2">

                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your  Message" rows="3"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>











                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUS