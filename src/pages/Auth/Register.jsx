import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Şifreler eşleşmiyor!');
            return;
        }
        // Burada backend bağlantısı yapılacak
        console.log('Kayıt yapılıyor:', formData);
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Hesap Oluştur</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FaUser />
                        <input
                            type="text"
                            placeholder="Ad Soyad"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
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
                        <FaPhone />
                        <input
                            type="tel"
                            placeholder="Telefon"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    <div className="input-group">
                        <FaLock />
                        <input
                            type="password"
                            placeholder="Şifre Tekrar"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Kayıt Ol</button>
                </form>
                <div className="auth-links">
                    <span>Zaten hesabınız var mı?</span>
                    <Link to="/login">Giriş Yap</Link>
                </div>
            </div>
        </div>
    );
};

export default Register; 