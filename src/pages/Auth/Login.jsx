import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada backend bağlantısı yapılacak
        console.log('Giriş yapılıyor:', formData);
        navigate('/');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Giriş Yap</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FaEnvelope />
                        <input
                            type="email"
                            placeholder="E-posta"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <FaLock />
                        <input
                            type="password"
                            placeholder="Şifre"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Giriş Yap</button>
                </form>
                <div className="auth-links">
                    <Link to="/forgot-password">Şifremi Unuttum</Link>
                    <Link to="/register">Hesap Oluştur</Link>
                </div>
            </div>
        </div>
    );
};

export default Login; 