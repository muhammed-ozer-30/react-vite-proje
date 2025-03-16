import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
        setLoading(false);
    }, [user]);

    const login = async (email, password) => {
        try {
            // Burada API çağrısı yapılacak
            // const response = await api.login(email, password);
            const mockUser = { id: 1, email, name: 'Test User' };
            setUser(mockUser);
            return { success: true };
        } catch (error) {
            console.error('Giriş hatası:', error);
            return { success: false, error: error.message };
        }
    };

    const register = async (email, password, name) => {
        try {
            // Burada API çağrısı yapılacak
            // const response = await api.register(email, password, name);
            const mockUser = { id: 1, email, name };
            setUser(mockUser);
            return { success: true };
        } catch (error) {
            console.error('Kayıt hatası:', error);
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        setUser(null);
    };

    const updateProfile = async (userData) => {
        try {
            // Burada API çağrısı yapılacak
            // const response = await api.updateProfile(userData);
            setUser(prevUser => ({ ...prevUser, ...userData }));
            return { success: true };
        } catch (error) {
            console.error('Profil güncelleme hatası:', error);
            return { success: false, error: error.message };
        }
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        updateProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}; 