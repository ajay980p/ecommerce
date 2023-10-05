import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity } from '../app/cartSlice';



const cart = () => {

    const dispatch = useDispatch();

    const products = useSelector((item) => item.cart.cartItems)
    console.log(products)

    const handleCartQuantity = () => {
        dispatch(updateQuantity('inc'))
    }

    return (
        <div>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {useSelector((item) => item.cart.cartItems.length)} items</h5>
                                </div>
                                {
                                    products.map((item) => (
                                        <div className="card-body" key={item._id}>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                        <img src={item.image_link}
                                                            className="w-100" alt="Blue Jeans Jacket" />
                                                        <a href="#!">
                                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                    <p><strong>{item.product_name}</strong></p>
                                                </div>

                                                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>

                                                        <button className="btn btn-primary px-3 me-2">-</button>

                                                        <div className="form-outline">
                                                            <input id="form1" min="0" name="quantity" type="number" className="form-control" defaultValue={item.cartQuantity} />
                                                            <label className="form-label" htmlFor="form1">Quantity</label>
                                                        </div>

                                                        <button className="btn btn-primary px-3 ms-2" onClick={() => handleCartQuantity()}>+</button>
                                                    </div>

                                                    <p className="text-start text-md-center">
                                                        <strong>&#8377;{item.price}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="col-md-12">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Cart Summary</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li
                                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Products
                                                <span>&#8377;53.98</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                Shipping
                                                <span>&#8377;49</span>
                                            </li>
                                            <li
                                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total amount</strong>
                                                    <strong>
                                                        <p className="mb-0">(including GST)</p>
                                                    </strong>
                                                </div>
                                                <span><strong>&#8377;53.98</strong></span>
                                            </li>
                                        </ul>

                                        <button type="button" className="btn btn-primary btn-lg btn-block">
                                            Go to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default cart