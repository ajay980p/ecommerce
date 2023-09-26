import React, { useEffect, useState } from 'react'
import Content from './Content'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ShowProducts = () => {

    const navigate = useNavigate();

    const auth = localStorage.getItem("users");

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState(null)

    useEffect(() => {

        // To get All the Data
        const fetchData = async () => {
            try {
                // const params = {
                //     category: 'men', // Replace with the selected category
                //     minPrice: 201,  // Replace with the minimum price
                //     maxPrice: 500   // Replace with the maximum price
                // };

                const response = await axios.get("http://localhost:4000/products", {
                    params: {
                        category: categories,
                    }
                });
                setProducts(response.data);
                console.log("Products ", response.data)
            }
            catch (err) {
                console.log("Unable to fetch data");
            }
        }
        fetchData();

        // Authentication
        if (!auth) {
            navigate('/login')
        }

    }, [categories])


    return (
        <div className='d-flex w-100 gap-4'>
            <div className='w-25'>
                <Sidebar setCategories={setCategories} />
            </div>
            <div className='w-75'>
                <Content products={products} categories={categories} />
            </div>
        </div>
    )
}

export default ShowProducts