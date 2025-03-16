import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetail.css";
import { products } from '../../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="not-found">
                <h2>Ürün bulunamadı</h2>
            </div>
        );
    }

    const images = product.images.map(img => ({
        original: img,
        thumbnail: img,
        originalClass: "product-image",
        thumbnailClass: "thumbnail-image"
    }));

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <p>Detay sayfası yapım aşamasında...</p>
            <div className="product-images">
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={true}
                    showNav={true}
                    showThumbnails={true}
                    thumbnailPosition="bottom"
                    useBrowserFullscreen={true}
                    lazyLoad={true}
                    slideDuration={300}
                    slideInterval={3000}
                    swipeable={true}
                    onErrorImageURL="https://via.placeholder.com/400x300?text=Resim+Yüklenemedi"
                />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <div className="product-rating">
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={index < product.rating ? "star filled" : "star"}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="review-count">({product.reviewCount} değerlendirme)</span>
                </div>
                <div className="product-price">
                    <span className="current-price">₺{product.price.toLocaleString()}</span>
                    {product.oldPrice && (
                        <span className="old-price">
                            ₺{product.oldPrice.toLocaleString()}
                        </span>
                    )}
                </div>
                <div className="product-description">
                    <p>{product.description}</p>
                </div>
                <div className="product-actions">
                    <div className="quantity-selector">
                        <label htmlFor="quantity">Adet:</label>
                        <select
                            id="quantity"
                            value={1}
                        >
                            {[...Array(10)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="add-to-cart">Sepete Ekle</button>
                    <button
                        className={`favorite-button`}
                    >
                        🤍
                    </button>
                </div>
                <div className="product-specs">
                    <h2>Teknik Özellikler</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <span className="spec-label">Kategori:</span>
                            <span className="spec-value">{product.category}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Stok Durumu:</span>
                            <span className="spec-value">Mevcut</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Kargo:</span>
                            <span className="spec-value">Ücretsiz</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Garanti:</span>
                            <span className="spec-value">2 Yıl</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; 