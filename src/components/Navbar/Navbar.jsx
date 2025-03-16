import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            // Burada arama işlemi yapılacak
            console.log('Aranıyor:', e.target.value);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <h1>TechStore</h1>
                </Link>
            </div>

            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Ürün ara..."
                    className={`search-input ${isSearchOpen ? 'active' : ''}`}
                    onKeyPress={handleSearch}
                />
                <FaSearch
                    className="search-icon"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
            </div>

            <div className="navbar-actions">
                <Link to="/cart" className="cart-icon">
                    <FaShoppingCart />
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Link>
                <Link to="/login" className="user-icon">
                    <FaUser />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar; 