import React from 'react';
import ProductCard from '../components/ProductCard';
import { stubImage } from './StubPage';

const adverts = [
  { title: 'Баннеры', to: '/advert/banners', image: stubImage, price: 800, oldPrice: 1000, discount: 20 },
  { title: 'Стенды', to: '/advert/stands', image: stubImage, price: 1200, oldPrice: 1500, discount: 20 },
  { title: 'Таблички', to: '/advert/plates', image: stubImage, price: 400, oldPrice: 500, discount: 20 },
  { title: 'Roll UP', to: '/advert/rollup', image: stubImage, price: 2500, oldPrice: 3000, discount: 17 },
  { title: 'Press Wall', to: '/advert/presswall', image: stubImage, price: 3500, oldPrice: 4000, discount: 13 },
  { title: 'Х – образные стойки', to: '/advert/x-stands', image: stubImage, price: 1800, oldPrice: 2200, discount: 18 },
  { title: 'Таблички для оплаты', to: '/advert/payment-plates', image: stubImage, price: 350, oldPrice: 450, discount: 22 },
  { title: 'Адресные Таблички', to: '/advert/address-plates', image: stubImage, price: 500, oldPrice: 650, discount: 23 },
  { title: 'Плоттерная Резка', to: '/advert/plotter-cut', image: stubImage, price: 600, oldPrice: 800, discount: 25 },
];

export default function Advert() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1, fontSize: '2.5rem' }}>Рекламные конструкции</h1>
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
        {adverts.map((item, idx) => (
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