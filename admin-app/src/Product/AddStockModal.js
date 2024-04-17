import React, { useState } from 'react';

function AddStockModal({ product, onClose, onAddStock }) {
  const [newPrice, setNewPrice] = useState(product.price);
  const [newQuantity, setNewQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStock(product, newPrice, newQuantity);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Stock for {product.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="price">Price per kg:</label>
            <input
              type="number"
              id="price"
              value={newPrice}
              onChange={(e) => setNewPrice(parseFloat(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity (kg):</label>
            <input
              type="number"
              id="quantity"
              value={newQuantity}
              onChange={(e) => setNewQuantity(parseFloat(e.target.value))}
              required
            />
          </div>
          <button type="submit">Add Stock</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddStockModal;
