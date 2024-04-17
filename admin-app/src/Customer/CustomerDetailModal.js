import React from 'react';
import './CustomerPage.css';

function CustomerDetailModal({ customer, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{customer.name} Details</h2>
        <p>Email: {customer.email}</p>
        <h3>Purchase History:</h3>
        <ul>
          {customer.purchaseHistory.map((purchase, index) => (
            <li key={index}>
              <p><strong>Product:</strong> {purchase.item}</p>
              <p><strong>Quantity:</strong> {purchase.quantity}</p>
              <p><strong>Total Price:</strong> ${purchase.totalPrice.toFixed(2)}</p>
              <p><strong>Date of Purchase:</strong> {purchase.date}</p>
              <p><strong>Delivery Address:</strong> {purchase.deliveryAddress}</p>
            </li>
          ))}
        </ul>
        <p><strong>Total Amount of Purchase:</strong> ${customer.totalAmount.toFixed(2)}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CustomerDetailModal;
