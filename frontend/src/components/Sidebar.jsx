import React from 'react'

const Sidebar = () => {
    return (
        <div className='pt-5'>
            <div className='text-center fs-5'>Filter by Category</div>

            <hr style={{ width: "90%" }} className='mx-auto' />

            <div className='px-5 pt-2'>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" >
                        women
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" >
                        men
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" >
                        smartwatches
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" >
                        wall clocks
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" >
                        alarm clocks
                    </label>
                </div>
            </div>

            {/* Other Filter Type */}
            <div className='text-center fs-5 pt-4'>Filter by Price</div>

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
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" >
                        more than &#8377;1500
                    </label>
                </div>
            </div>

            <div className='mx-auto text-center mt-4'>
                <a href="#" className="btn btn-dark mb-2 mx-auto">Reset Filter</a>
            </div>

        </div>
    )
}

export default Sidebar