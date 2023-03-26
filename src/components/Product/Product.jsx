import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {img , name , price , seller , ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                    <h5 className='product-name'>{name}</h5>
                    <p>${price}</p>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;