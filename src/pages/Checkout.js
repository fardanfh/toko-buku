import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const history = useHistory();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Item 1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TQlxabLNlX23Euxs_TauYaAxYZ-ZylOB2Q&usqp=CAU",
      price: 200000,
      quantity: 1,
    },
    {
      id: 2,
      title: "Item 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnultRnPtZp9EVXmocf4YkSio5oHqsJZw5ACwcNNKijt3UjMc4eAax5C-52TxZEodfTI&usqp=CAU",
      price: 120000,
      quantity: 1,
    },
  ]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = 24000;
  const total = subtotal + shippingFee;

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handlePay = () => {
    // Perform payment logic here
    console.log("Payment successful!");
    // Navigate to detail pengiriman page
    history.push("/detail-pengiriman");
  };

  return (
    <div style={{ display: "flex" }}>
      <Card style={{ flex: 1 }}>
        <Card.Body>
          <Card.Title>Checkout</Card.Title>
          <div>
            <h3>Payment Details</h3>
            <Form>
              <Form.Group controlId="paymentMethod">
                <Form.Label>Select Payment Method:</Form.Label>
                <Form.Control as="select">
                  <option>Card</option>
                  <option>Virtual Account</option>
                  <option>Other Method</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button variant="primary" onClick={handlePay}>Rp: {total}</Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ flex: 1 }}>
        <Card.Body>
          <Card.Title>Order Summary</Card.Title>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: "flex", marginBottom: "10px" }}>
              <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px", marginRight: "10px" }} />
              <div>
                <h3>{item.title}</h3>
                <p>Rp : {item.price}</p>
                <div>
                  <Button variant="primary" onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <Button variant="primary" onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
                </div>
              </div>
            </div>
          ))}
          <p>Subtotal: Rp {subtotal}</p>
          <p>Shipping Fee: Rp {shippingFee}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Checkout;
