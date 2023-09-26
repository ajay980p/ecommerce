import React, { useState } from 'react'

const Sidebar = ({ setCategories }) => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCheckboxChange = (category) => {
        setSelectedCategory(category);
        setCategories(category);
    };

    return (
        <div className='pt-5 position-sticky' style={{
            position: "sticky", top: "20px", "zIndex": "1"
        }}>

            <div className='border border-2 m-4'>
                <div className='text-center fs-5 pt-4'>Filter by Category</div>

                <hr style={{ width: "90%" }} className='mx-auto' />

                <div className='px-5 pt-2'>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckWomen"
                            checked={selectedCategory === "women"}
                            onChange={() => handleCheckboxChange("women")}
                        />
                        <label className="form-check-label" htmlFor="flexCheckWomen">
                            women
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckWomen"
                            checked={selectedCategory === "men"}
                            onChange={() => handleCheckboxChange("men")}
                        />
                        <label className="form-check-label" htmlFor="flexCheckWomen">
                            men
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={selectedCategory === "smartwatch"}
                            onChange={() => handleCheckboxChange("smartwatch")}

                        />
                        <label className="form-check-label" >
                            smartwatch
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={selectedCategory === "clock"}
                            onChange={() => handleCheckboxChange("clock")}
                        />
                        <label className="form-check-label pb-3" >
                            clock
                        </label>
                    </div>

                </div>
            </div>


            {/* FILTER USING PRICE */}
            <div className='border border-2 m-4 pt-3' >

                <div className='text-center fs-5'>Filter by Price</div>

                <hr style={{ width: "90%" }} className='mx-auto' />

                <div className='px-5 pt-2'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            &#8377;0 to &#8377;200
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            &#8377;201 to &#8377;500
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            &#8377;501 to &#8377;999
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            &#8377;1000 to &#8377;1500
                        </label>
                    </div>

                    <div className="form-check pb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            more than &#8377;1500
                        </label>
                    </div>
                </div>
            </div >

            <div className='mx-auto text-center mt-4'>
                <button className="btn btn-dark mb-2 mx-auto" onClick={() => handleCheckboxChange(null)}>Reset Filter</button>
            </div>

        </div >
    )
}

export default Sidebar