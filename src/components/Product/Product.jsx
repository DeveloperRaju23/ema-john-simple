import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img , name , price , seller , ratings} = props.product;

const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img}  alt="" />
            <div className='product-info'>
                    <h5 className='product-name'>{name}</h5>
                    <p>${price}</p>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart <i class="fa-solid fa-cart-shopping"></i>  </button>
        </div>
    );
};

export default Product;