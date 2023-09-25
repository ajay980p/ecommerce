import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("users"));

    const handleLogout = () => {
        const auth = localStorage.removeItem("users")

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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* Manage LOGIN and SIGNUP feature */}
                            {
                                auth ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Categories
                                            </a>
                                            <ul className="dropdown-menu" style={{ backgroundColor: "green", opacity: 1, color: "white" }}>
                                                <li><Link className="dropdown-item" style={{ color: "white", cursor: "pointer" }} to="#">Men</Link></li>
                                                <li><Link className="dropdown-item" style={{ color: "white", cursor: "pointer" }} href="#">Women</Link></li>
                                                <li><Link className="dropdown-item" style={{ color: "white", cursor: "pointer" }} href="#">Smartwatch</Link></li>
                                                <li><Link className="dropdown-item" style={{ color: "white", cursor: "pointer" }} href="#">Clock</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/login" onClick={() => handleLogout()}>Logout</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/login">Login</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/register">Register</Link>
                                        </li>
                                    </>
                            }

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn bg-success text-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar