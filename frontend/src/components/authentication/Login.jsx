import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        // console.log(email, password)

        try {
            const response = await axios.post("http://localhost:4000/login", {
                email: email,
                password: password
            })

            const userDetails = localStorage.setItem("users", JSON.stringify(response.data));

            if (response) {
                navigate("/")
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const auth = localStorage.getItem("users");
    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    })

    return (
        <section className="container mt-5">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div>
                                <h2 className='text-center'>Login Here</h2>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-outline mb-3">
                                <label className="form-label" >Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={() => handleLogin()} > Login</button>

                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link
                                    className="link-danger" to="/register">Register</Link>
                                </p>

                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Login