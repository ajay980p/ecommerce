import React, { useEffect } from 'react'
import Content from './Content'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

const ShowProducts = () => {

    const navigate = useNavigate();

    const auth = localStorage.getItem("users");

    useEffect(() => {
        if (!auth) {
            navigate('/login')
        }
    }, [])

    return (
        <div className='d-flex w-100 gap-4'>
            <div className='w-25'>
                <Sidebar />
            </div>
            <div className='w-75'>
                <Content />
            </div>
        </div>
    )
}

export default ShowProducts