import React, { useEffect, useState } from 'react';
import CustomerDetailModal from './CustomerDetailModal';
import './CustomerPage.css';

const initialCustomers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        purchaseHistory: [
            { item: 'Product A', quantity: 2, totalPrice: 30.00, date: '2023-04-14', deliveryAddress: '123 Street, City' },
            { item: 'Product C', quantity: 1, totalPrice: 12.00, date: '2023-04-13', deliveryAddress: '456 Lane, Town' },
        ],
        totalAmount: 42.00,
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        purchaseHistory: [
            { item: 'Product B', quantity: 3, totalPrice: 45.00, date: '2023-04-12', deliveryAddress: '789 Road, Village' },
            { item: 'Product D', quantity: 1, totalPrice: 20.00, date: '2023-04-11', deliveryAddress: '012 Street, Hamlet' },
        ],
        totalAmount: 65.00,
    },
];

function CustomerPage({ setTotalCustomers }) {
    const [customers, setCustomers] = useState(initialCustomers);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

   useEffect(() => {
        console.log('setting the total customers:', customers.length);
        if (typeof setTotalCustomers === 'function') {
            setTotalCustomers(customers.length);
        } else {
            console.error('setTotalCustomers is not a function');
        }
    }, [customers, setTotalCustomers]);

    const openModal = (customer) => {
        setSelectedCustomer(customer);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedCustomer(null);
    };

    return (
        <div className="customer-page">
          const myprops = {customers.length}
            <header className="customer-header">
                <h1>Customer Details</h1>
                <p>Total Customers: {customers.length}</p> {/* Display the total number of customers */}
            </header>

            <div className="customer-container">
                {customers.map((customer) => (
                    <div
                        key={customer.id}
                        className="customer-card"
                        onClick={() => openModal(customer)}
                    >
                        <h2>{customer.name}</h2>
                        <p>Email: {customer.email}</p>
                    </div>
                ))}
            </div>

            {modalVisible && selectedCustomer && (
                <CustomerDetailModal
                    customer={selectedCustomer}
                    onClose={closeModal}
                />
            )}

            <button className="back-button" onClick={() => window.history.back()}>
                Back to Home
            </button>
        </div>
    );
}

export default CustomerPage;
