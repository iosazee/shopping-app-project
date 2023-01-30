import React from "react";
import Product from "../Product/Product";
import axios from "axios";
import './Homepage.css';


function Homepage () {

    const [products, setProduct] = React.useState([]);


    const fetchProducts = () => {
       axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response.data)
            setProduct(response.data)
        })

    }

    /*
    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
        })
    }
    */

    React.useEffect(() => {

        fetchProducts();

    }, []);


    return (
        <div>
            <h1 className="header">Homepage</h1>
            <div className="product-container">

                {
                    products.map((product) => <Product key = {product.id} productpty = {product}/> )

                }
            </div>
        </div>

    )
}

export default Homepage;