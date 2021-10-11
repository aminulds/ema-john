import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const first20 = fakeData.slice(0, 5);
    const [products, setProducts] = useState(first20);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product productDetails={product}></Product> )
                }
            </div>

            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Items ordered: </p>
                <table>
                    <tr>
                        <td>Items:</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Estimated tax</td>
                        <td>$0</td>
                    </tr>
                    <tr className='order-total'>
                        <td>Order Total</td>
                        <td>$0</td>
                    </tr>
                </table>
                <a href="/review">
                    <button><span>Review your order</span></button>
                </a>
            </div>
        </div>
    );
};

export default Shop;