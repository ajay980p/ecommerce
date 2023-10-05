import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("users"));

    const handleLogout = () => {
        const auth = localStorage.clear();

        if (auth) {
            navigate("/login")
        }
    }

    return (
        <div style={{ position: "sticky", "zIndex": "1", top: "0px" }} className="bg-danger">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">ECOMMERCE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {/* Manage LOGIN and SIGNUP feature */}
                        {
                            auth ?
                                <>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/login" onClick={() => handleLogout()}>Logout ({auth.name})</Link>
                                        </li>

                                        <form className="d-flex" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn bg-success text-light" type="submit">Search</button>
                                        </form>

                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/cart">Cart ({useSelector((data) => data.cart.cartItems.length)})</Link>
                                        </li>
                                    </ul>
                                </>
                                :
                                <>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/login">Login</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/register">Register</Link>
                                        </li>
                                    </ul>
                                </>
                        }
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar