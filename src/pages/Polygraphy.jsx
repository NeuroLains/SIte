import React from 'react';
import ProductCard from '../components/ProductCard';
import cardImg from '../assets/services/polygraphy/business-card.jpg';
import flyerImg from '../assets/services/polygraphy/flyer.jpg';
import bookletImg from '../assets/services/polygraphy/book.jpg';
import notebookImg from '../assets/services/polygraphy/book.jpg';
import envelopeImg from '../assets/services/polygraphy/business-card.jpg';
import brochureImg from '../assets/services/polygraphy/book.jpg';
import posterImg from '../assets/services/polygraphy/flyer.jpg';
import drawingImg from '../assets/services/polygraphy/flyer.jpg';
import photoImg from '../assets/services/polygraphy/business-card.jpg';
import calendarImg from '../assets/services/polygraphy/calendar.jpg';
import stickerImg from '../assets/services/polygraphy/flyer.jpg';
import labelImg from '../assets/services/polygraphy/flyer.jpg';
import plasticCardImg from '../assets/services/polygraphy/business-card.jpg';
import risographImg from '../assets/services/polygraphy/flyer.jpg';
import blankImg from '../assets/services/polygraphy/book.jpg';
import carbonlessImg from '../assets/services/polygraphy/book.jpg';

const polygraphyServices = [
  { title: 'Визитки', to: '/polygraphy/business-cards', image: cardImg, price: 95, oldPrice: 120, discount: 21 },
  { title: 'Листовки', to: '/polygraphy/flyers', image: flyerImg, price: 220, oldPrice: 250, discount: 12 },
  { title: 'Буклеты', to: '/polygraphy/booklets', image: bookletImg, price: 410, oldPrice: 500, discount: 18 },
  { title: 'Блокноты', to: '/polygraphy/notebooks', image: notebookImg, price: 1050, oldPrice: 1200, discount: 13 },
  { title: 'Конверты', to: '/polygraphy/envelopes', image: envelopeImg, price: 60, oldPrice: 80, discount: 25 },
  { title: 'Брошюры', to: '/polygraphy/brochures', image: brochureImg, price: 250, oldPrice: 350, discount: 29 },
  { title: 'Плакаты', to: '/polygraphy/posters', image: posterImg, price: 78, oldPrice: 100, discount: 22 },
  { title: 'Чертежи', to: '/polygraphy/drawings', image: drawingImg, price: 150, oldPrice: 200, discount: 25 },
  { title: 'Печать Фото', to: '/polygraphy/photo-print', image: photoImg, price: 30, oldPrice: 50, discount: 40 },
  { title: 'Календари', to: '/polygraphy/calendars', image: calendarImg, price: 300, oldPrice: 350, discount: 14 },
  { title: 'Наклейки', to: '/polygraphy/stickers', image: stickerImg, price: 400, oldPrice: 500, discount: 20 },
  { title: 'Стикеры', to: '/polygraphy/labels', image: labelImg, price: 350, oldPrice: 450, discount: 22 },
  { title: 'Пластиковые Карты', to: '/polygraphy/plastic-cards', image: plasticCardImg, price: 120, oldPrice: 180, discount: 33 },
  { title: 'Ризография', to: '/polygraphy/risograph', image: risographImg, price: 70, oldPrice: 100, discount: 30 },
  { title: 'Бланки', to: '/polygraphy/forms', image: blankImg, price: 50, oldPrice: 70, discount: 29 },
  { title: 'Самокопирующиеся Бланки', to: '/polygraphy/carbonless-forms', image: carbonlessImg, price: 90, oldPrice: 120, discount: 25 },
];

export default function Polygraphy() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1, fontSize: '2.5rem' }}>Полиграфия</h1>
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
        {polygraphyServices.map((service, idx) => (
          <ProductCard
            key={idx}
            to={service.to}
            image={service.image}
            title={service.title}
            price={service.price}
            oldPrice={service.oldPrice}
            discount={service.discount}
          />
        ))}
      </div>
    </div>
  );
}