import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../app/cartSlice'

const Content = ({ products }) => {

    const dispatch = useDispatch();

    // Giving Load more button functionalities
    const [noOfElements, setNoOfElements] = useState(6);
    let data = products.slice(0, noOfElements);

    return (
        <div className='pr-5 mt-5'>
            <div className='text-center fs-2 fw-bold'>All Products</div>
            {
                <div className='pr-5 d-flex flex-wrap justify-content-center align-items-center'>
                    {
                        data.map((product) => (

                            <div className='m-4 d-inline-flex flex-wrap' key={product._id}>

                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={product.image_link} className="card-img-top" alt="Image" style={{ height: "300px" }} />

                                    <div className="card-body">
                                        <div className='d-flex flex-column flex-md-row justify-content-md-between flex-wrap'>
                                            <h5 className="card-title fs-6">{product.product_name.substring(0, 20)}</h5>
                                            <h5 className="card-title text-success fs-6">&#8377;{product.price}</h5>
                                        </div>

                                        <div className='d-flex flex-column flex-md-row justify-content-md-between flex-wrap'>
                                            <Link to={`/product/${product._id}`} className="btn btn-success mb-2">More Details</Link >
                                            <a href="#" className="btn btn-primary mb-2" onClick={() => dispatch(addProduct(product))}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            <div className='mx-auto text-center mt-4'>
                <button className="btn btn-dark mb-2 mx-auto" onClick={() => setNoOfElements(noOfElements + 6)}>Load more</button>
            </div>
        </div >
    )
}

export default Content