import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateComponent = () => {

    const navigate = useNavigate();

    const auth = localStorage.getItem("users");

    useEffect(() => {
        if (!auth) {
            navigate("/login")
        }
    }, [])

    return (
        <div>
            {
                auth ?
                    <Outlet />
                    :
                    <></>
            }
        </div>
    )
}

export default PrivateComponent