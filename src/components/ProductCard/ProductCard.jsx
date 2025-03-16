import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart, isFavorite, toggleFavorite } = useCart();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY'
        }).format(price);
    };

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
    };

    const handleToggleFavorite = (e) => {
        e.stopPropagation();
        toggleFavorite(product.id);
    };

    return (
        <div className="product-card" onClick={handleCardClick}>
            <div className="product-image">
                <img src={product.images[0]} alt={product.name} />
                <button
                    className={`favorite-button ${isFavorite(product.id) ? 'active' : ''}`}
                    onClick={handleToggleFavorite}
                >
                    {isFavorite(product.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div className="product-info">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="product-rating">
                    {'⭐'.repeat(Math.floor(product.rating))}
                    <span className="review-count">({product.reviewCount} değerlendirme)</span>
                </div>
                <div className="product-price">
                    <span className="current-price">{formatPrice(product.price)}</span>
                </div>
                <div className="product-stock">
                    {product.stock > 0 ? (
                        <span className="in-stock">Stokta {product.stock} adet</span>
                    ) : (
                        <span className="out-of-stock">Stokta yok</span>
                    )}
                </div>
                <button
                    className="add-to-cart-button"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                >
                    {product.stock > 0 ? 'Sepete Ekle' : 'Stokta Yok'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard; 