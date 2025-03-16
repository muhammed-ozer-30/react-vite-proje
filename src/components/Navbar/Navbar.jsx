import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useSearch } from '../../context/SearchContext';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const { searchTerm, setSearchTerm } = useSearch();
    const { getCartItemCount } = useCart();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // Arama işlemleri burada yapılacak
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    TechStore
                </Link>
                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Ürün ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">Ara</button>
                </form>
            </div>

            <div className="navbar-right">
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Tema değiştir"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>

                <Link to="/cart" className="cart-link">
                    🛒 <span className="cart-count">{getCartItemCount()}</span>
                </Link>

                {user ? (
                    <div className="user-menu">
                        <button
                            className="user-button"
                            onClick={() => setShowUserMenu(!showUserMenu)}
                        >
                            👤 {user.email}
                        </button>
                        {showUserMenu && (
                            <div className="dropdown-menu">
                                <button onClick={handleLogout}>Çıkış Yap</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="login-button">
                        Giriş Yap
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 