
import './LoginCSs.css';
import React, {useState} from 'react';
const Login = () => {
    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
               
        } else {
            console.log("show error");
        }
    }
   
    return (
        <div className="container justify-content-center" id="formControl">
            <p className='h5 mb-4'> Login with Email and Password</p>
            <div className="row ">
                <div className="card col-md-5">
                    <form>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email"
                                className="form-control mt-2"

                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={state.email}
                       onChange={handleChange}
                            />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password"
                                className="form-control mt-2"

                                placeholder="Password"
                                value={state.password}
                        onChange={handleChange} 
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary mt-4 mb-2"
                            onClick={handleSubmitClick}
                            
                            >
                            LOGIN
                        </button>
                    </form>

                </div>
            </div>
        </div>


    )
}
export default Login
