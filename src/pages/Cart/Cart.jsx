import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaCreditCard, FaLock } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "iPhone 14 Pro",
            price: 39999,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 2,
            name: "MacBook Pro M2",
            price: 49999,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Sepetiniz Boş</h2>
                <p>Alışverişe başlamak için ürünlerimize göz atın.</p>
                <Link to="/" className="continue-shopping">Alışverişe Başla</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-items">
                <h2>Sepetim ({cartItems.length} ürün)</h2>

                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />

                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <div className="quantity-controls">
                                <button
                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                    disabled={item.quantity === 1}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="item-price">
                            <span className="price">{item.price}₺</span>
                            <span className="total-price">Toplam: {item.price * item.quantity}₺</span>
                        </div>

                        <button
                            className="remove-item"
                            onClick={() => removeItem(item.id)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h3>Sipariş Özeti</h3>

                <div className="summary-row">
                    <span>Ara Toplam</span>
                    <span>{total}₺</span>
                </div>
                <div className="summary-row">
                    <span>Kargo</span>
                    <span>Ücretsiz</span>
                </div>
                <div className="summary-row total">
                    <span>Toplam</span>
                    <span>{total}₺</span>
                </div>

                <button className="checkout-button">
                    <FaCreditCard />
                    Ödemeye Geç
                </button>

                <div className="secure-checkout">
                    <FaLock />
                    <span>256-bit SSL ile güvenli ödeme</span>
                </div>

                <Link to="/" className="continue-shopping">
                    Alışverişe Devam Et
                </Link>
            </div>
        </div>
    );
};

export default Cart; 