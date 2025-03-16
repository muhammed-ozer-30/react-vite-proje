import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = ({ products, onAddToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Ürün verilerini al
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(0); // İlk fotoğrafı seç
        }
        setLoading(false);
    }, [id, products]);

    if (loading) return <div>Yükleniyor...</div>;
    if (!product) return <div>Ürün bulunamadı.</div>;

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    return (
        <div className="product-detail">
            <div className="product-images">
                <div className="main-image">
                    <img src={product.images[selectedImage]} alt={product.name} />
                    <button
                        className={`like-button ${isFavorite ? 'liked' : ''}`}
                        onClick={() => setIsFavorite(!isFavorite)}
                    >
                        <FaHeart />
                    </button>
                </div>
                <div className="image-thumbnails">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.name} - ${index + 1}`}
                            className={selectedImage === index ? 'selected' : ''}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="product-info">
                <h1>{product.name}</h1>

                <div className="product-rating">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={index < product.rating ? 'star active' : 'star'}
                        />
                    ))}
                    <span>({product.reviewCount} değerlendirme)</span>
                </div>

                <div className="product-price">
                    <span className="current-price">{product.price.toLocaleString()}₺</span>
                    {product.oldPrice && (
                        <span className="old-price">{product.oldPrice.toLocaleString()}₺</span>
                    )}
                </div>

                <p className="product-description">{product.description}</p>

                <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                </div>

                <button
                    className="add-to-cart"
                    onClick={() => onAddToCart(product, quantity)}
                >
                    <FaShoppingCart /> Sepete Ekle
                </button>

                <div className="product-specs">
                    <h2>Teknik Özellikler</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <span className="spec-label">Marka</span>
                            <span className="spec-value">Apple</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Model</span>
                            <span className="spec-value">{product.name}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Garanti</span>
                            <span className="spec-value">24 Ay</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Stok Durumu</span>
                            <span className="spec-value">Mevcut</span>
                        </div>
                    </div>
                </div>

                <div className="product-reviews">
                    <h2>Kullanıcı Değerlendirmeleri</h2>
                    <div className="review">
                        <div className="review-header">
                            <span className="reviewer-name">Ahmet Y.</span>
                            <div className="review-rating">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className="star active" />
                                ))}
                            </div>
                        </div>
                        <p className="review-text">
                            Harika bir ürün, beklentilerimi fazlasıyla karşıladı. Özellikle performansı çok etkileyici.
                        </p>
                        <span className="review-date">15 Mart 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; 