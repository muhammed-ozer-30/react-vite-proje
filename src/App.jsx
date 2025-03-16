import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Cart from './pages/Cart/Cart'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

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
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1663703841896",
        images: [
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1663703841896",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660753619946",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660753617559"
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
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1671304673229",
        images: [
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1671304673229",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202301?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1671304673666",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-gallery1-202301?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1670458371175"
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
        image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/81d0Dreg6eL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/81NZV2409qL._AC_SL1500_.jpg"
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
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1617126613000",
        images: [
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1617126613000",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1617126601000",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-magic-keyboard-gallery1-202104?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1617126596000"
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
        image: "https://images.samsung.com/tr/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
        images: [
          "https://images.samsung.com/tr/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
          "https://images.samsung.com/tr/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-design.jpg",
          "https://images.samsung.com/tr/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-spen.jpg"
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
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-15-9520-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4000&hei=2800&qlt=100,1&resMode=sharp2&size=4000,2800&chrss=full",
        images: [
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-15-9520-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4000&hei=2800&qlt=100,1&resMode=sharp2&size=4000,2800&chrss=full",
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-15-9520-t-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4000&hei=2800&qlt=100,1&resMode=sharp2&size=4000,2800&chrss=full",
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-15-9520-t-black-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4000&hei=2800&qlt=100,1&resMode=sharp2&size=4000,2800&chrss=full"
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
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1683224241054",
        images: [
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1683224241054",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_PF+watch-45-alum-midnight-nc-8s_VW_PF_WF_CO?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1683224241054",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_SIDE+watch-45-alum-midnight-nc-8s_VW_SIDE_WF_CO?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1683224241054"
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
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660803972361",
        images: [
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660803972361",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660803974361",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV2?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660803974180"
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
        image: "https://m.media-amazon.com/images/I/51mWHXY8hyL._AC_SL1500_.jpg",
        images: [
          "https://m.media-amazon.com/images/I/51mWHXY8hyL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/61Hj9C8PetL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71BWg9gWjjL._AC_SL1500_.jpg"
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
        image: "https://images.samsung.com/tr/tablets/galaxy-tab-s9/images/galaxy-tab-s9-highlights-kv.jpg",
        images: [
          "https://images.samsung.com/tr/tablets/galaxy-tab-s9/images/galaxy-tab-s9-highlights-kv.jpg",
          "https://images.samsung.com/tr/tablets/galaxy-tab-s9/images/galaxy-tab-s9-highlights-display.jpg",
          "https://images.samsung.com/tr/tablets/galaxy-tab-s9/images/galaxy-tab-s9-highlights-productivity.jpg"
        ],
        category: "Tablet"
      }
    ];

    setProducts(dummyProducts);
  }, []);

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prevItems, { ...product, quantity }]
    })
  }

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
        <main className="container">
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={handleAddToCart} products={products} />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} products={products} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
