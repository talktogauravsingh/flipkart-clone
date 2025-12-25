export const CATEGORIES = [
    { id: '1', name: 'Mobiles', icon: 'cellphone' },
    { id: '2', name: 'Fashion', icon: 'tshirt-crew' },
    { id: '3', name: 'Electronics', icon: 'laptop' },
    { id: '4', name: 'Home', icon: 'home-variant' },
    { id: '5', name: 'Appliances', icon: 'washing-machine' },
    { id: '6', name: 'Toys', icon: 'toy-brick' }, // MaterialCommunityIcons doesn't have 'toys' sometimes, sticking to safer ones
];

export const BANNERS = [
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20', // Example banner
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b237568600f12.jpg?q=20',
];

export const PRODUCTS = [
    {
        id: '1',
        title: 'Apple iPhone 15 (Blue, 128 GB)',
        price: 79900,
        originalPrice: 79900,
        discount: '0% off',
        rating: 4.6,
        reviewCount: 1245,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/b/-original-imagtc5fz9spysyk.jpeg?q=70',
        description: 'Experience the magic of the new iPhone 15 with Dynamic Island, 48MP Main camera, and USB-C.',
        category: 'Mobiles',
    },
    {
        id: '2',
        title: 'SAMSUNG Galaxy S23 5G (Green, 128 GB)',
        price: 64999,
        originalPrice: 89999,
        discount: '27% off',
        rating: 4.5,
        reviewCount: 890,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/z/4/-original-imagzjh7g4h8g4hz.jpeg?q=70',
        description: 'The Galaxy S23 5G comes with a stunning Nightography camera and the fastest Snapdragon chip.',
        category: 'Mobiles',
    },
    {
        id: '3',
        title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
        price: 29990,
        originalPrice: 34990,
        discount: '14% off',
        rating: 4.8,
        reviewCount: 340,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/w/c/-original-imagg5nr9zd6c5fs.jpeg?q=70',
        description: 'Industry-leading noise cancellation, exceptional sound quality, and crystal clear hands-free calling.',
        category: 'Electronics',
    },
    {
        id: '4',
        title: 'Nike Revolution 6 Next Nature Running Shoes',
        price: 3695,
        originalPrice: 3695,
        discount: '0% off',
        rating: 4.2,
        reviewCount: 2200,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/q/c/-original-imagg7szgj7zzbgk.jpeg?q=70',
        description: 'Comfortable and stylish running shoes for men, made with at least 20% recycled content by weight.',
        category: 'Fashion',
    },
    {
        id: '5',
        title: 'Realme 11 Pro 5G (Sunrise Beige, 256 GB)',
        price: 23999,
        originalPrice: 27999,
        discount: '14% off',
        rating: 4.4,
        reviewCount: 5600,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/x/c/-original-imagqadf2awzzmyf.jpeg?q=70',
        description: '100MP OIS ProLight Camera, Curved Vision Display, and Premium Vegan Leather Design.',
        category: 'Mobiles',
    },
];
