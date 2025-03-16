import { Link, useNavigate } from 'react-router-dom';
import './ProductCard.css';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart, isFavorite, onToggleFavorite }) => {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        // Eğer tıklanan eleman buton değilse ürün detayına git
        if (!e.target.closest('.add-to-cart') && !e.target.closest('.like-button')) {
            navigate(`/product/${product.id}`);
        }
    };

    return (
        <div className="product-card" onClick={handleCardClick}>
            <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button
                    className={`like-button ${isFavorite ? 'liked' : ''}`}
                    onClick={onToggleFavorite}
                >
                    <FaHeart />
                </button>
            </div>

            <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={index < product.rating ? 'star active' : 'star'}
                        />
                    ))}
                    <span>({product.reviewCount})</span>
                </div>
                <p className="product-description">{product.description}</p>

                <div className="product-price-actions">
                    <div className="price">
                        <span className="current-price">{product.price.toLocaleString()}₺</span>
                        {product.oldPrice && (
                            <span className="old-price">{product.oldPrice.toLocaleString()}₺</span>
                        )}
                    </div>

                    <button
                        className="add-to-cart"
                        onClick={(e) => {
                            e.stopPropagation(); // Kartın tıklama olayını engelle
                            onAddToCart(product);
                        }}
                    >
                        <FaShoppingCart /> Sepete Ekle
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 