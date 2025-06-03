import React from 'react';
import ProductCard from '../components/ProductCard';
import { stubImage } from './StubPage';

const services = [
  { title: 'Разработка макетов', to: '/services/design', image: stubImage, price: 500, oldPrice: 700, discount: 29 },
  { title: 'Ламинирование', to: '/services/lamination', image: stubImage, price: 100, oldPrice: 150, discount: 33 },
  { title: 'Брошюровка', to: '/services/binding', image: stubImage, price: 200, oldPrice: 300, discount: 33 },
  { title: 'Степлирование', to: '/services/stapling', image: stubImage, price: 80, oldPrice: 120, discount: 33 },
  { title: 'Твердый Переплет', to: '/services/hardcover', image: stubImage, price: 600, oldPrice: 800, discount: 25 },
  { title: 'Изготовление Печатей', to: '/services/stamps', image: stubImage, price: 400, oldPrice: 500, discount: 20 },
  { title: 'Брендирование', to: '/services/branding', image: stubImage, price: 900, oldPrice: 1200, discount: 25 },
];

export default function Services() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1, fontSize: '2.5rem' }}>Услуги</h1>
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
        {services.map((item, idx) => (
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