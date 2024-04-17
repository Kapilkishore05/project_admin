// ProductPage.js
import React, { useState } from 'react';
import ProductDetailModal from './ProductDetailModal';
import './ProductPage.css';

const initialProducts = [
    {
        name: 'Product 1',
        price: 10.00,
        quantity: 5,
        available: 20,
        image: 'https://example.com/images/product1.jpg',
    },
    {
        name: 'Product 2',
        price: 15.00,
        quantity: 8,
        available: 30,
        image: 'https://example.com/images/product2.jpg',
    },
    {
        name: 'Product 3',
        price: 12.00,
        quantity: 12,
        available: 15,
        image: 'https://example.com/images/product3.jpg',
    },
];

function ProductPage() {
    const [products, setProducts] = useState(initialProducts);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Function to handle opening the modal
    const openModal = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };

    // Function to handle saving the updated product
    const handleSave = (updatedProduct) => {
        const updatedProducts = products.map(product => 
            product.name === updatedProduct.name ? updatedProduct : product
        );
        setProducts(updatedProducts);
    };

    return (
        <div>
        <div className="product-page">
        {/* Header displaying company name */}
        <header className="product-header">
            <h1>Suprme Food Products</h1>
        </header>

        {/* Add your product page content here */}
        <div className="product-content">
            <h2>Product List</h2>
            {/* Product list content */}
        </div>
    </div>
        <div className="product-list">
            {products.map((product) => (
                <div key={product.name} className="product-item">
                    <img
                        src={product.image}
                        alt={product.name}
                        onClick={() => openModal(product)}
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>Quantity: {product.quantity} kg</p>
                    </div>
                </div>
            ))}
            {modalVisible && selectedProduct && (
                <ProductDetailModal
                    product={selectedProduct}
                    onClose={closeModal}
                    onSave={handleSave}
                />
            )}
        </div>
        </div>
    );
}

export default ProductPage;
