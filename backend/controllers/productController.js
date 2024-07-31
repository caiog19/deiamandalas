// backend/controllers/productController.js
const products = [
    { id: 1, name: 'Produto 1', price: 'R$ 60,00', image: '/assets/product1.jpg' },
    { id: 2, name: 'Produto 2', price: 'R$ 75,00', image: '/assets/product1.jpg' },
    { id: 3, name: 'Produto 3', price: 'R$ 60,00', image: '/assets/product1.jpg' },
    { id: 4, name: 'Produto 4', price: 'R$ 75,00', image: '/assets/product1.jpg' },
    { id: 5, name: 'Produto 5', price: 'R$ 75,00', image: '/assets/product1.jpg' },
    { id: 6, name: 'Produto 6', price: 'R$ 75,00', image: '/assets/product1.jpg' },
    { id: 7, name: 'Produto 7', price: 'R$ 75,00', image: '/assets/product1.jpg' },
];

exports.getProducts = (req, res) => {
    res.json(products);
};
