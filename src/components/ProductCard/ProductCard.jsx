import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart, isFavorite, toggleFavorite } = useCart();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY'
        }).format(price);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleToggleFavorite = () => {
        toggleFavorite(product.id);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <Link to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.name} />
                </Link>
                <button
                    className={`favorite-button ${isFavorite(product.id) ? 'active' : ''}`}
                    onClick={handleToggleFavorite}
                >
                    {isFavorite(product.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div className="product-info">
                <Link to={`/product/${product.id}`} className="product-name">
                    {product.name}
                </Link>
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