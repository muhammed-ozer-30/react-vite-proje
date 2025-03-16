import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basit doğrulama
        if (!email || !password) {
            setError('Lütfen tüm alanları doldurun');
            return;
        }

        // Gerçek uygulamada burada API çağrısı yapılır
        try {
            login({ email });
            navigate('/');
        } catch (err) {
            setError('Giriş yapılırken bir hata oluştu');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Giriş Yap</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-posta</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-posta adresiniz"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Şifreniz"
                        />
                    </div>
                    <button type="submit" className="auth-button">
                        Giriş Yap
                    </button>
                </form>
                <p className="auth-link">
                    Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link>
                </p>
            </div>
        </div>
    );
};

export default Login; 