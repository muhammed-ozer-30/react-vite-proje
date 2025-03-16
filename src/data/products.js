export const products = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        price: 42999.99,
        description: "Apple'ın en yeni amiral gemisi telefonu, A16 Bionic çip ve gelişmiş kamera sistemi",
        category: "Telefon",
        brand: "Apple",
        stock: 15,
        rating: 4.8,
        reviewCount: 127,
        images: [
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=p-jpg",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=5120&hei=2880&fmt=p-jpg"
        ],
        features: [
            "6.1 inç Super Retina XDR OLED ekran",
            "A16 Bionic çip",
            "48MP ana kamera",
            "Dynamic Island",
            "Face ID"
        ]
    },
    {
        id: 2,
        name: "MacBook Pro 14",
        price: 52999.99,
        description: "M2 Pro çipli, profesyoneller için tasarlanmış güçlü dizüstü bilgisayar",
        category: "Bilgisayar",
        brand: "Apple",
        stock: 10,
        rating: 4.9,
        reviewCount: 89,
        images: [
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229"
        ],
        features: [
            "14 inç Liquid Retina XDR ekran",
            "M2 Pro çip",
            "32GB RAM",
            "1TB SSD",
            "Magic Keyboard"
        ]
    },
    {
        id: 3,
        name: "Samsung Galaxy S23 Ultra",
        price: 39999.99,
        description: "S Pen destekli, profesyonel kamera sistemine sahip Android amiral gemisi",
        category: "Telefon",
        brand: "Samsung",
        stock: 20,
        rating: 4.7,
        reviewCount: 156,
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/tr/2302/gallery/tr-galaxy-s23-s918-sm-s918bzgctur-thumb-534863401",
            "https://images.samsung.com/is/image/samsung/p6pim/tr/2302/gallery/tr-galaxy-s23-s918-sm-s918bzkctur-thumb-534863464",
            "https://images.samsung.com/is/image/samsung/p6pim/tr/2302/gallery/tr-galaxy-s23-s918-sm-s918blvctur-thumb-534863383"
        ],
        features: [
            "6.8 inç Dynamic AMOLED ekran",
            "Snapdragon 8 Gen 2",
            "200MP ana kamera",
            "S Pen desteği",
            "5000mAh batarya"
        ]
    },
    {
        id: 4,
        name: "iPad Pro 12.9",
        price: 35999.99,
        description: "M2 çipli, Liquid Retina XDR ekranlı profesyonel tablet",
        category: "Tablet",
        brand: "Apple",
        stock: 12,
        rating: 4.8,
        reviewCount: 94,
        images: [
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1664411207213",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202210?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1664411207213"
        ],
        features: [
            "12.9 inç Liquid Retina XDR ekran",
            "M2 çip",
            "ProMotion teknolojisi",
            "Face ID",
            "Apple Pencil 2 desteği"
        ]
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        price: 8999.99,
        description: "Gelişmiş gürültü engelleme özellikli kablosuz kulaklık",
        category: "Aksesuar",
        brand: "Sony",
        stock: 25,
        rating: 4.7,
        reviewCount: 203,
        images: [
            "https://www.sony.com.tr/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
            "https://www.sony.com.tr/image/bc0837bf0a9e3b5f4db31342c1af2e47?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
        ],
        features: [
            "Gelişmiş gürültü engelleme",
            "30 saat pil ömrü",
            "LDAC desteği",
            "Çoklu cihaz bağlantısı",
            "Dokunmatik kontroller"
        ]
    },
    {
        id: 6,
        name: "Dell XPS 15",
        price: 45999.99,
        description: "4K OLED ekranlı, RTX 3050 Ti grafik kartlı premium dizüstü bilgisayar",
        category: "Bilgisayar",
        brand: "Dell",
        stock: 8,
        rating: 4.6,
        reviewCount: 78,
        images: [
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-15-9520-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-15-9520-t-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full"
        ],
        features: [
            "15.6 inç 4K OLED ekran",
            "Intel Core i9-12900HK",
            "RTX 3050 Ti",
            "32GB RAM",
            "1TB NVMe SSD"
        ]
    },
    {
        id: 7,
        name: "Apple Watch Series 8",
        price: 12999.99,
        description: "Gelişmiş sağlık özellikleri ve her zamankinden daha dayanıklı tasarım",
        category: "Giyilebilir",
        brand: "Apple",
        stock: 30,
        rating: 4.8,
        reviewCount: 167,
        images: [
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171067000,1661971867381",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_PF+watch-45-alum-midnight-nc-8s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171068000,1661971867355"
        ],
        features: [
            "Her zaman açık Retina ekran",
            "Sıcaklık sensörü",
            "Çarpışma algılama",
            "EKG uygulaması",
            "Su geçirmez tasarım"
        ]
    },
    {
        id: 8,
        name: "Samsung QN90B Neo QLED TV",
        price: 49999.99,
        description: "Mini LED teknolojili, oyun odaklı premium televizyon",
        category: "TV",
        brand: "Samsung",
        stock: 5,
        rating: 4.7,
        reviewCount: 45,
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/tr/qe65qn90batxtk/gallery/tr-neo-qled-qn90b-qe65qn90batxtk-531503754?$684_547_PNG$",
            "https://images.samsung.com/is/image/samsung/p6pim/tr/qe65qn90batxtk/gallery/tr-neo-qled-qn90b-qe65qn90batxtk-531503738?$684_547_PNG$"
        ],
        features: [
            "65 inç Neo QLED panel",
            "4K 120Hz",
            "HDR 2000",
            "Gaming Hub",
            "Object Tracking Sound+"
        ]
    },
    {
        id: 9,
        name: "DJI Mini 3 Pro",
        price: 24999.99,
        description: "Profesyonel kamera özelliklerine sahip kompakt drone",
        category: "Drone",
        brand: "DJI",
        stock: 15,
        rating: 4.8,
        reviewCount: 112,
        images: [
            "https://stormsend1.djicdn.com/stormsend/uploads/796d4d69-29df-4ca2-80f5-4e2e6bc34379.jpg",
            "https://stormsend1.djicdn.com/stormsend/uploads/0d5aeb47-a69d-4df7-8cfa-4c5d2811fe7f.jpg"
        ],
        features: [
            "4K/60fps video",
            "48MP fotoğraf",
            "34 dakika uçuş süresi",
            "Tri-directional engel algılama",
            "249g ağırlık"
        ]
    },
    {
        id: 10,
        name: "Dyson V15 Detect Absolute",
        price: 19999.99,
        description: "Lazer toz algılama teknolojili kablosuz süpürge",
        category: "Ev Aletleri",
        brand: "Dyson",
        stock: 18,
        rating: 4.6,
        reviewCount: 89,
        images: [
            "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/398614-01.png?$responsive$&fmt=png-alpha&cropPathE=mobile&fit=stretch,1&wid=1920",
            "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/398614-02.png?$responsive$&fmt=png-alpha&cropPathE=mobile&fit=stretch,1&wid=1920"
        ],
        features: [
            "Lazer toz algılama",
            "60 dakika çalışma süresi",
            "HEPA filtre",
            "LCD ekran",
            "Akıllı toz algılama"
        ]
    }
]; 