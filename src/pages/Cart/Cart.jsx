import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY'
        }).format(price);
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Sepetiniz boş</h2>
                <p>Sepetinizde ürün bulunmamaktadır.</p>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1>Sepetim</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.images[0]} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p className="cart-item-price">{formatPrice(item.price)}</p>
                        </div>
                        <div className="cart-item-quantity">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={item.quantity >= item.stock}
                            >
                                +
                            </button>
                        </div>
                        <div className="cart-item-total">
                            {formatPrice(item.price * item.quantity)}
                        </div>
                        <button
                            className="remove-item"
                            onClick={() => removeFromCart(item.id)}
                        >
                            ❌
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <div className="cart-total">
                    <span>Toplam:</span>
                    <span>{formatPrice(calculateTotal())}</span>
                </div>
                <button className="checkout-button">
                    Ödemeye Geç
                </button>
            </div>
        </div>
    );
};

export default Cart; 