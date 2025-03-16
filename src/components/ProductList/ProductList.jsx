import { useState, useEffect } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import { FaFilter, FaSort } from 'react-icons/fa';

const ProductList = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Örnek ürün verileri
        const dummyProducts = [
            {
                id: 1,
                name: "iPhone 14 Pro",
                description: "Apple'ın en yeni amiral gemisi telefonu",
                price: 39999,
                oldPrice: 42999,
                rating: 5,
                reviewCount: 128,
                image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1678652197793-f3e7c552f25b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1678652197865-99c454e1ee56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Telefon"
            },
            {
                id: 2,
                name: "MacBook Pro M2",
                description: "Profesyoneller için üretkenlik canavarı",
                price: 49999,
                oldPrice: 54999,
                rating: 4,
                reviewCount: 89,
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Laptop"
            },
            {
                id: 3,
                name: "Sony WH-1000XM4",
                description: "Premium gürültü engelleme kulaklık",
                price: 7999,
                oldPrice: 8999,
                rating: 5,
                reviewCount: 256,
                image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1618366712025-f0900f066f45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Kulaklık"
            },
            {
                id: 4,
                name: "iPad Pro 12.9",
                description: "Yaratıcılığınızı özgür bırakın",
                price: 24999,
                oldPrice: 27999,
                rating: 4,
                reviewCount: 167,
                image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Tablet"
            },
            {
                id: 5,
                name: "Samsung Galaxy S23 Ultra",
                description: "En gelişmiş Android deneyimi",
                price: 44999,
                oldPrice: 47999,
                rating: 5,
                reviewCount: 203,
                image: "https://images.unsplash.com/photo-1678911820864-e5c06d1a3f42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1678911820864-e5c06d1a3f42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1676911809760-9b8c1fb2dba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1676911809631-ddab77460387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Telefon"
            },
            {
                id: 6,
                name: "Dell XPS 15",
                description: "Güçlü ve şık tasarım bir arada",
                price: 39999,
                oldPrice: 42999,
                rating: 4,
                reviewCount: 145,
                image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Laptop"
            },
            {
                id: 7,
                name: "Apple Watch Series 8",
                description: "Sağlık ve fitness asistanınız",
                price: 12999,
                oldPrice: 14999,
                rating: 5,
                reviewCount: 178,
                image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Akıllı Saat"
            },
            {
                id: 8,
                name: "AirPods Pro",
                description: "Aktif gürültü engelleme ile kusursuz ses",
                price: 5999,
                oldPrice: 6999,
                rating: 4,
                reviewCount: 312,
                image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1588423771073-b8ecd49b0bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Kulaklık"
            },
            {
                id: 9,
                name: "PlayStation 5",
                description: "Yeni nesil oyun deneyimi",
                price: 19999,
                oldPrice: 21999,
                rating: 5,
                reviewCount: 423,
                image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1622297845775-5ff1b87b0bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Oyun Konsolu"
            },
            {
                id: 10,
                name: "Samsung Galaxy Tab S9",
                description: "Android tablet deneyiminin zirvesi",
                price: 18999,
                oldPrice: 20999,
                rating: 4,
                reviewCount: 167,
                image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                images: [
                    "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1589739900656-f90109b1d3c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                ],
                category: "Tablet"
            }
        ];

        // Kategorileri çıkar
        const uniqueCategories = [...new Set(dummyProducts.map(p => p.category))];
        setCategories(uniqueCategories);

        // Ürünleri yükle
        setProducts(dummyProducts);
        setLoading(false);
    }, []);

    const handleToggleFavorite = (productId) => {
        setFavorites(prev => {
            if (prev.includes(productId)) {
                return prev.filter(id => id !== productId);
            }
            return [...prev, productId];
        });
    };

    const getSortedProducts = (products) => {
        switch (sortBy) {
            case 'price-asc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price-desc':
                return [...products].sort((a, b) => b.price - a.price);
            case 'name-asc':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return [...products].sort((a, b) => b.name.localeCompare(a.name));
            case 'rating':
                return [...products].sort((a, b) => b.rating - a.rating);
            default:
                return products;
        }
    };

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);

    const sortedProducts = getSortedProducts(filteredProducts);

    if (loading) {
        return <div className="loading">Yükleniyor...</div>;
    }

    return (
        <div className="product-list-container">
            <div className="filters">
                <div className="filter-header">
                    <FaFilter />
                    <h3>Kategoriler</h3>
                </div>
                <button
                    className={`filter-button ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                >
                    Tümü
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}

                <div className="filter-header" style={{ marginTop: '2rem' }}>
                    <FaSort />
                    <h3>Sıralama</h3>
                </div>
                <select
                    className="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="default">Varsayılan</option>
                    <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
                    <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
                    <option value="name-asc">İsim (A-Z)</option>
                    <option value="name-desc">İsim (Z-A)</option>
                    <option value="rating">Puan</option>
                </select>
            </div>

            <div className="product-grid">
                {sortedProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                        isFavorite={favorites.includes(product.id)}
                        onToggleFavorite={() => handleToggleFavorite(product.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList; 