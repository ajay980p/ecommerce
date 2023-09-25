import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const ShowProducts = () => {
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