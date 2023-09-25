import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("");
    const [sports, setSports] = useState("");
    const [address, setAddress] = useState("")

    const handleSubmit = async () => {

        try {
            const response = await axios.post("http://localhost:4000/register", {
                name: name,
                email: email,
                password: password,
                phone: phone,
                sports: sports,
                address: address
            });

            let responseData = response.data;

            delete responseData.password;
            delete responseData.phone;
            delete responseData.sports;
            delete responseData.address;

            if (response) {
                const data = localStorage.setItem("users", JSON.stringify(responseData))
                navigate('/');
            }
            else {
                navigate('/login')
            }

        }
        catch (err) {
            console.log("Register error : ", err)
        }
    }

    const auth = localStorage.getItem("users")
    useEffect(() => {
        navigate("/")
    })

    return (
        <div>
            <section className="p-4" style={{ backgroundColor: "#eee" }}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration Form</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" >Your Name</label>
                                                        <input type="text" className="form-control" placeholder='name' onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" >Your Email</label>
                                                        <input type="email" className="form-control" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" >Password</label>
                                                        <input type="password" className="form-control" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label">Phone Number</label>
                                                        <input type="number" className="form-control" placeholder='phone number' onChange={(e) => setPhone(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label">Favourite Sports</label>
                                                        <input type="text" className="form-control" placeholder='sports' onChange={(e) => setSports(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label">Your Address</label>
                                                        <div className="form-floating">
                                                            <textarea className="form-control" placeholder="Leave a comment here" style={{ height: "100px" }} onChange={(e) => setAddress(e.target.value)}></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => handleSubmit()}>Register</button>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Register