import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [showCart, setShowCart] = useState(false);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <div className="navbar">
                <div className="nav-left">
                    <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Logo" />
                    <h2>Paradise Nursery</h2>
                </div>
                <div className="nav-right">
                    <button onClick={() => setShowCart(true)}>Cart ({cartItems.length})</button>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} className="category-container">
                            <h2>{category.category}</h2>
                            <div className="plant-category">
                                {category.plants.map((plant, idx) => (
                                    <div key={idx} className="plant-card">
                                        <img src={plant.image} alt={plant.name} className="product-image" />
                                        <h3 className="product-title">{plant.name}</h3>
                                        <p className="product-description">{plant.description}</p>
                                        <p className="product-cost"><strong>Price:</strong> {plant.cost}</p>
                                        <button 
                                            className="product-button"
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;