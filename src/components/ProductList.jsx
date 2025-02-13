import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";


function ProductList({ products, addToCart}) {

    // const [products , setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(
    //     () =>{
    //         axios.get('https://fakestoreapi.com/products').then( (response) =>{
    //             setProducts(response.data)
    //             setLoading(false)
    //         }).catch((error) => {
    //             console.log("Error in product loading!!!")
    //         })   
    //     },[]
    // )
    // if(loading){
    //     return( <h2>Loading products</h2> )
    // }

    // return(
    //     <>
    //     {
    //         products.map(product => (
    //             <ProductCard key={product.id} product={product} addToCart={addToCart} ></ProductCard>
    //         ) )
    //     }
    //     </>
    // )
    return (
        <Row>
            {
                products.map(product => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
                        <ProductCard key={product.id} product={product} addToCart={addToCart}   ></ProductCard>
                    </Col>
                ))
            }
        </Row>

    )
}

export default ProductList