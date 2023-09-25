import React from 'react'

const Content = () => {
    return (
        <div className=' pr-5 mt-5'>
            <div className='text-center fs-2'>All Products</div>

            <div className='m-4'>

                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://media.istockphoto.com/id/1141778521/vector/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-websites.jpg?s=612x612&w=0&k=20&c=DdQVkRexW_o2b86c4yqz24UpNpUA0IIVTS2_tFXECjo=" className="card-img-top" alt="..." />
                    <hr />

                    <div className="card-body">
                        <div className='d-flex flex-column flex-md-row justify-content-md-between flex-wrap'>
                            <h5 className="card-title">Card title</h5>
                            <h5 className="card-title text-success">Price</h5>
                        </div>

                        <div className='d-flex flex-column flex-md-row justify-content-md-between flex-wrap'>
                            <a href="#" className="btn btn-success mb-2">More Details</a>
                            <a href="#" className="btn btn-primary mb-2">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto text-center mt-4'>
                <a href="#" className="btn btn-dark mb-2 mx-auto">Load more</a>
            </div>
        </div>
    )
}

export default Content