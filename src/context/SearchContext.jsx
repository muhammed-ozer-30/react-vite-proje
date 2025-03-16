import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const performSearch = async (term) => {
        setIsLoading(true);
        try {
            // Burada API çağrısı yapılacak
            // const response = await api.searchProducts(term);
            // setSearchResults(response.data);
            setSearchResults([]); // Şimdilik boş array
        } catch (error) {
            console.error('Arama hatası:', error);
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        searchTerm,
        setSearchTerm,
        searchResults,
        isLoading,
        performSearch
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}; 