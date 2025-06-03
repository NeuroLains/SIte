import React from 'react';
import ProductCard from '../components/ProductCard';
import badgeImg from '../assets/services/souvenirs/badge.jpg';
import mugImg from '../assets/services/souvenirs/mug.jpg';
import tshirtImg from '../assets/services/souvenirs/tshirt.jpg';
import capImg from '../assets/services/souvenirs/cap.jpg';
import magnetImg from '../assets/services/souvenirs/magnet.jpg';

const stubImage = 'https://via.placeholder.com/300x200?text=Изображение+в+разработке';

const souvenirs = [
  { title: 'Значки', to: '/souvenirs/badges', image: badgeImg, price: 50, oldPrice: 70, discount: 29 },
  { title: '3Д Стикеры', to: '/souvenirs/3d-stickers', image: stubImage, price: 80, oldPrice: 100, discount: 20 },
  { title: 'Шоколадки', to: '/souvenirs/chocolate', image: stubImage, price: 120, oldPrice: 150, discount: 20 },
  { title: 'Кружки', to: '/souvenirs/mugs', image: mugImg, price: 200, oldPrice: 250, discount: 20 },
  { title: 'Футболки', to: '/souvenirs/tshirts', image: tshirtImg, price: 600, oldPrice: 800, discount: 25 },
  { title: 'Бейсболки', to: '/souvenirs/caps', image: capImg, price: 350, oldPrice: 450, discount: 22 },
  { title: 'Магниты', to: '/souvenirs/magnets', image: magnetImg, price: 90, oldPrice: 120, discount: 25 },
  { title: 'Брелоки', to: '/souvenirs/keychains', image: stubImage, price: 70, oldPrice: 100, discount: 30 },
  { title: 'Шильды', to: '/souvenirs/plates', image: stubImage, price: 150, oldPrice: 200, discount: 25 },
  { title: 'Печать на металле', to: '/souvenirs/metal-print', image: stubImage, price: 300, oldPrice: 400, discount: 25 },
  { title: 'Сумки', to: '/souvenirs/bags', image: stubImage, price: 250, oldPrice: 350, discount: 29 },
  { title: 'Рюкзаки', to: '/souvenirs/backpacks', image: stubImage, price: 500, oldPrice: 700, discount: 29 },
  { title: 'Пазлы', to: '/souvenirs/puzzles', image: stubImage, price: 200, oldPrice: 300, discount: 33 },
  { title: 'Коврики', to: '/souvenirs/mats', image: stubImage, price: 150, oldPrice: 200, discount: 25 },
  { title: 'Ленты', to: '/souvenirs/ribbons', image: stubImage, price: 100, oldPrice: 150, discount: 33 },
  { title: 'Флаги', to: '/souvenirs/flags', image: stubImage, price: 400, oldPrice: 500, discount: 20 },
];

export default function Souvenirs() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1, fontSize: '2.5rem' }}>Сувенирная продукция</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '32px',
        margin: '40px 0',
        padding: '0 24px',
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {souvenirs.map((item, idx) => (
          <ProductCard
            key={idx}
            to={item.to}
            image={item.image}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}