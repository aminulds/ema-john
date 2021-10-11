import React from 'react';
import './product.css';

const Product = (props) => {
    console.log(props.productDetails);
    const {img, name, seller, price, stock} = props.productDetails;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-Details'>
                <h4 className='product-name'>{name}</h4>
                <div className="description">
                    <div>
                        <small>by: {seller}</small>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Product;