// ProductDetailModal.js
import React, { useState } from 'react';
import './ProductPage.css';

function ProductDetailModal({ product, onClose, onSave }) {
    // Define local state for price and quantity
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);

    // Function to handle form submission
    const handleSubmit = () => {
        // Create an updated product object
        const updatedProduct = {
            ...product,
            price,
            quantity,
        };

        // Call the onSave function to save the updated product
        onSave(updatedProduct);

        // Close the modal
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{product.name} Details</h2>
                <div className="modal-content">
                    <label>
                        <strong>Price per kg:</strong>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(parseFloat(e.target.value))}
                            className="modal-input"
                        />
                    </label>
                    <label>
                        <strong>Available quantity:</strong>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(parseFloat(e.target.value))}
                            className="modal-input"
                        />
                    </label>
                </div>
                <button onClick={handleSubmit} className="save-btn">Submit</button>
                <button onClick={onClose} className="close-btn">Close</button>
            </div>
        </div>
    );
}

export default ProductDetailModal;
