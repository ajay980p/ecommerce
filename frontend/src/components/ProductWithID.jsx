import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./css/ProductWithID.css"

const ProductWithID = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/product/${id}`)
                console.log(response.data)
                setProduct(response.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchData();
    }, [])

    const [quantity, setQuantity] = useState(1);
    const productIncrement = () => {
        setQuantity(quantity + 1);
    }

    const productDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div>
            <div className="container">
                <div className="col-lg-8 border p-3 main-section bg-white">


                    <div className="row m-0">

                        <div className="col-lg-4 left-side-product-box pb-3">
                            <img src={product.image_link} className="border p-3" />
                        </div>

                        <div className="col-lg-8">


                            <div className="right-side-pro-detail border p-3 m-0">

                                <div className="row hedding pl-3 pt-0 pb-3 m-auto d-flex justify-content-center fs-2">
                                    Product Details
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="m-0 p-0 fs-3">{product.product_name}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="m-0 p-0 price-pro fs-5">{product.price}</p>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="col-lg-12 pt-2">
                                        <h5>Product Detail</h5>
                                        <span>{product.description}</span>
                                        <hr className="m-0 pt-2 mt-2" />
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="tag-section"><strong>Tag : </strong>{product.category}</p>
                                    </div>

                                    <div className="col-lg-12">
                                        <h6>Quantity :</h6>
                                        <div className="input-group">
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={(e) => productDecrement(e.target.value)}
                                            >
                                                -
                                            </button>

                                            <span className="input-group-text">{quantity}</span>
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={(e) => productIncrement(e.target.value)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-3">
                                        <div className="row">
                                            <div className="col-lg-6 pb-2">
                                                <a href="#" className="btn btn-danger w-100">Add To Cart</a>
                                            </div>
                                            <div className="col-lg-6">
                                                <a href="#" className="btn btn-success w-100">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 text-center pt-3">
                            <h4>More Product</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ProductWithID;