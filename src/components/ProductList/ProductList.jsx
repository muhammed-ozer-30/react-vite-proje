import React, { useState, useEffect } from 'react';
import { useSearch } from '../../context/SearchContext';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import { FaFilter, FaSort } from 'react-icons/fa';

const ProductList = ({ onAddToCart }) => {
    const { searchTerm } = useSearch();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');
    const [categories, setCategories] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const categoriesList = ['all', ...new Set(products.map(product => product.category))];

    useEffect(() => {
        let result = products;

        // Arama filtrelemesi
        if (searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Kategori filtrelemesi
        if (selectedCategory !== 'all') {
            result = result.filter(product => product.category === selectedCategory);
        }

        // Sıralama
        switch (sortBy) {
            case 'price-asc':
                result = [...result].sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result = [...result].sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result = [...result].sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        setFilteredProducts(result);
    }, [searchTerm, selectedCategory, sortBy]);

    useEffect(() => {
        // Kategorileri çıkar
        const uniqueCategories = [...new Set(products.map(p => p.category))];
        setCategories(uniqueCategories);
    }, []);

    const handleToggleFavorite = (productId) => {
        setFavorites(prev => {
            if (prev.includes(productId)) {
                return prev.filter(id => id !== productId);
            }
            return [...prev, productId];
        });
    };

    return (
        <div className="product-list-container">
            <div className="filters">
                <div className="filter-header">
                    <FaFilter />
                    <h3>Kategoriler</h3>
                </div>
                <div className="filter-group">
                    <label htmlFor="category">Kategori:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categoriesList.map(category => (
                            <option key={category} value={category}>
                                {category === 'all' ? 'Tümü' : category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-header" style={{ marginTop: '2rem' }}>
                    <FaSort />
                    <h3>Sıralama</h3>
                </div>
                <div className="filter-group">
                    <label htmlFor="sort">Sırala:</label>
                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Varsayılan</option>
                        <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
                        <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
                        <option value="rating">Puan</option>
                    </select>
                </div>
            </div>

            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            isFavorite={favorites.includes(product.id)}
                            onToggleFavorite={() => handleToggleFavorite(product.id)}
                        />
                    ))
                ) : (
                    <div className="no-results">
                        <p>Üzgünüz, aradığınız kriterlere uygun ürün bulunamadı.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList; 