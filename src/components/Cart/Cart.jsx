import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    // Total Price 
     let totalPrice = 0; 
     let totalShipping = 0;
     for(const product of cart){
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping;
     }

     const tax = totalPrice * 7 / 100;
     const grandTotal = totalPrice + totalShipping + tax 

    return (
        <div className='cart'>
            <h4 className='order-summary'>Order Summary</h4>
             <h4 className='items'>Selected Items : {cart.quantity}</h4>
             <h4>Total Price : $ {totalPrice} </h4>
             <h4>Total Shipping Charge : $ {totalShipping}  </h4>
             <h4>Tax : $ {tax} </h4>
             <h2>Grand Total  : $ {grandTotal} </h2>
        </div>
    );
};

export default Cart;