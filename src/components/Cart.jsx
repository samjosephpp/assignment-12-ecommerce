import {  Button } from 'react-bootstrap';
const Cart = ({ cart, deleteFromCart }) => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>{product.title} - ${product.price} 
                        <Button variant="danger" size="sm" onClick={() => deleteFromCart(product) } >-</Button> </li>
                    ))}
                </ul>
            ) : (
                <p>No items in cart</p>
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    )
}

export default Cart;