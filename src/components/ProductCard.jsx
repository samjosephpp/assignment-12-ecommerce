import React from 'react';
import { Card, Button } from 'react-bootstrap';


function ProductCard({ product, addToCart , deleteFromCart}) {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} className='productImg' />
            <Card.Body className='productBody'>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Category: {product.category}</Card.Text>
                <Button variant='primary' onClick={() => addToCart(product)}> Add to card</Button>
            </Card.Body>
        </Card>

    )

    // return(
    //     <>
    //     <div>
    //         <button onClick={() => addToCart(product)}>Add To Cart</button>
    //     </div>
    //     </>
    // )
}

export default ProductCard