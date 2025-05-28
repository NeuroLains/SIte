import React from 'react';
import CardIcon from '../assets/icons/card.svg';
import LeafletIcon from '../assets/icons/booklet.svg';
import BookletIcon from '../assets/icons/booklet.svg';
import PosterIcon from '../assets/icons/poster.svg';
import FlyerIcon from '../assets/icons/booklet.svg';
import StickerIcon from '../assets/icons/sticker.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import NotebookIcon from '../assets/icons/notebook.svg';
import FolderIcon from '../assets/icons/folder.svg';

const printingServices = [
  {
    title: 'Визитки',
    price: 'от 0.95 ₽ за шт.',
    icon: CardIcon,
    desc: 'Печать визиток любых форматов, материалов и тиражей. Офсет, цифра, дизайнерские, пластиковые, металлические.',
    features: [
      'Печать от 100 шт. за 1 день',
      'Плотная бумага 300-350 г/м²',
      'Ламинация, тиснение, фигурная вырубка',
      'Дизайн под ваш бренд'
    ],
    prices: [
      { count: '100 шт', price: '950 ₽' },
      { count: '500 шт', price: '3900 ₽' },
      { count: '1000 шт', price: '6900 ₽' }
    ]
  },
  {
    title: 'Листовки',
    price: 'от 2.2 ₽ за шт.',
    icon: LeafletIcon,
    desc: 'Цветные и черно-белые листовки любых форматов. Оперативная печать, разные виды бумаги.',
    features: [
      'Форматы А4, А5, А6',
      'Бумага 80-300 г/м²',
      'Цветная и черно-белая печать',
      'Срочная печать от 1 часа'
    ],
    prices: [
      { count: '100 шт', price: '220 ₽' },
      { count: '500 шт', price: '900 ₽' },
      { count: '1000 шт', price: '1600 ₽' }
    ]
  },
  {
    title: 'Буклеты',
    price: 'от 4.1 ₽ за шт.',
    icon: BookletIcon,
    desc: 'Буклеты, каталоги, рекламные материалы. Складывание, фальцовка, любые форматы.',
    features: [
      'Форматы А4, А5',
      'Складывание в 2-3 сгиба',
      'Бумага 80-300 г/м²',
      'Ламинация, тиснение'
    ],
    prices: [
      { count: '100 шт', price: '410 ₽' },
      { count: '500 шт', price: '1800 ₽' },
      { count: '1000 шт', price: '3200 ₽' }
    ]
  },
  {
    title: 'Афиши',
    price: 'от 7.8 ₽ за шт.',
    icon: PosterIcon,
    desc: 'Печать афиш и плакатов для мероприятий, рекламы, объявлений.',
    features: [
      'Форматы А3, А2, А1',
      'Бумага 80-300 г/м²',
      'Цветная печать',
      'Срочная печать'
    ],
    prices: [
      { count: '10 шт', price: '78 ₽' },
      { count: '50 шт', price: '350 ₽' },
      { count: '100 шт', price: '650 ₽' }
    ]
  },
  {
    title: 'Флаеры',
    price: 'от 1.4 ₽ за шт.',
    icon: FlyerIcon,
    desc: 'Флаеры для акций, рекламы, событий. Ярко, быстро, недорого.',
    features: [
      'Форматы А5, А6',
      'Бумага 80-300 г/м²',
      'Цветная печать',
      'Срочная печать'
    ],
    prices: [
      { count: '100 шт', price: '140 ₽' },
      { count: '500 шт', price: '600 ₽' },
      { count: '1000 шт', price: '1100 ₽' }
    ]
  },
  {
    title: 'Наклейки',
    price: 'от 4.0 ₽ за шт.',
    icon: StickerIcon,
    desc: 'Печать наклеек любых форм и размеров. Самоклейка, винил, пленка.',
    features: [
      'Любые размеры',
      'Самоклейка, винил',
      'Цветная печать',
      'Фигурная вырубка'
    ],
    prices: [
      { count: '100 шт', price: '400 ₽' },
      { count: '500 шт', price: '1800 ₽' },
      { count: '1000 шт', price: '3200 ₽' }
    ]
  },
  {
    title: 'Календари',
    price: 'от 3 ₽ за шт.',
    icon: CalendarIcon,
    desc: 'Квартальные, настольные, карманные календари. Офсет, цифра, индивидуальный дизайн.',
    features: [
      'Квартальные, настольные',
      'Карманные календари',
      'Индивидуальный дизайн',
      'Ламинация, тиснение'
    ],
    prices: [
      { count: '100 шт', price: '300 ₽' },
      { count: '500 шт', price: '1300 ₽' },
      { count: '1000 шт', price: '2400 ₽' }
    ]
  },
  {
    title: 'Блокноты',
    price: 'от 21 ₽ за шт.',
    icon: NotebookIcon,
    desc: 'Блокноты, тетради, записные книжки с логотипом. Любые форматы и тиражи.',
    features: [
      'Форматы А4, А5, А6',
      'Твердый и мягкий переплет',
      'Бумага 80-120 г/м²',
      'Печать логотипа'
    ],
    prices: [
      { count: '50 шт', price: '1050 ₽' },
      { count: '100 шт', price: '1900 ₽' },
      { count: '200 шт', price: '3500 ₽' }
    ]
  },
  {
    title: 'Папки',
    price: 'от 28 ₽ за шт.',
    icon: FolderIcon,
    desc: 'Фирменные папки для документов с логотипом вашей компании. Картон, ламинация, полноцветная печать.',
    features: [
      'Форматы А4, А5',
      'Картон 250-300 г/м²',
      'Ламинация, тиснение',
      'Печать логотипа'
    ],
    prices: [
      { count: '50 шт', price: '1400 ₽' },
      { count: '100 шт', price: '2600 ₽' },
      { count: '200 шт', price: '4800 ₽' }
    ]
  }
];

function Printing() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1 }}>Полиграфия</h1>
      <div style={{ maxWidth: 800, margin: '0 auto 32px', color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}>
        <p>Мы предлагаем широкий спектр полиграфических услуг для бизнеса и частных клиентов. Качественная печать, современное оборудование, опытная команда и индивидуальный подход к каждому заказу.</p>
      </div>
      <div className="catalog-grid">
        {printingServices.map((service, index) => (
          <div key={index} className="catalog-card">
            <img src={service.icon} alt={service.title} className="catalog-icons" />
            <div className="catalog-title">{service.title}</div>
            <div className="catalog-price">{service.price}</div>
            <div style={{ marginTop: 12, color: '#666', fontSize: '0.9rem' }}>{service.desc}</div>
            <div style={{ marginTop: 16, textAlign: 'left', padding: '0 12px' }}>
              {service.features.map((feature, idx) => (
                <div key={idx} style={{ marginBottom: 8, color: '#1976d2', fontSize: '0.95rem' }}>• {feature}</div>
              ))}
            </div>
            <div style={{ 
              background: '#e8fbe9', 
              borderRadius: 10, 
              padding: '12px', 
              margin: '16px 12px 0', 
              color: '#388e3c', 
              fontWeight: 600, 
              fontSize: '1rem' 
            }}>
              {service.prices.map((price, idx) => (
                <div key={idx} style={{ marginBottom: 4 }}>{price.count} — <b>{price.price}</b></div>
              ))}
            </div>
            <button className="main-btn" style={{ marginTop: 16, minWidth: 160 }} onClick={() => window.location.href = '/contacts'}>
              Заказать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Printing; 