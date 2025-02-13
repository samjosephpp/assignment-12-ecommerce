import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


import ProductList from './components/ProductList'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);


    useEffect(
        () => {
            axios.get('https://fakestoreapi.com/products').then((response) => {
                setProducts(response.data)
                setLoading(false)
            }).catch((error) => {
                console.log("Error in product loading!!!")
            })
        }, []
    )
    if (loading) {
        return (<h2>Loading products</h2>)
    }


    const addToCart = (product) => {
        setCart([...cart, product]);
    }
    const deleteFromCart = (product)=>{
        // const newCart = cart.splice([product], 1);
        // setCart([...cart, newCart]);
        const newcart = [...cart]
        newcart.splice(product, 1);
        setCart(newcart)

    //     const assoc = [...contacts];
    // assoc.splice(val, 1);
    // setContacts(assoc);
    }


    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
                        <Header cartCount={cart.length}></Header>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={8} lg={8} xl={8} xxl={8}>
                        <ProductList products={products} addToCart={addToCart} ></ProductList>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
                        <Cart cart={cart} deleteFromCart = {deleteFromCart}></Cart>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App
