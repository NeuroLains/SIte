import React from 'react';
import MugIcon from '../assets/icons/mug.svg';
import TshirtIcon from '../assets/icons/tshirt.svg';
import PenIcon from '../assets/icons/pen.svg';
import ClockIcon from '../assets/icons/clock.svg';
import MagnetIcon from '../assets/icons/magnet.svg';
import BadgeIcon from '../assets/icons/badge.svg';
import CapIcon from '../assets/icons/cap.svg';
import BagIcon from '../assets/icons/bag.svg';
import UmbrellaIcon from '../assets/icons/umbrella.svg';

const souvenirServices = [
  {
    title: 'Кружки',
    price: 'от 180 ₽ за шт.',
    icon: MugIcon,
    desc: 'Керамические кружки с полноцветной печатью вашего логотипа или дизайна. Белые, цветные, с золотым ободком.',
    features: [
      'Керамика высшего качества',
      'Печать не выцветает',
      'Объем 330 мл',
      'Можно мыть в посудомойке'
    ],
    prices: [
      { count: '50 шт', price: '9000 ₽' },
      { count: '100 шт', price: '16000 ₽' },
      { count: '200 шт', price: '30000 ₽' }
    ]
  },
  {
    title: 'Футболки',
    price: 'от 350 ₽ за шт.',
    icon: TshirtIcon,
    desc: 'Футболки с нанесением логотипа или принта. Шелкография, термопечать, вышивка. Все размеры.',
    features: [
      '100% хлопок',
      'Размеры XS-XXL',
      'Шелкография, термопечать',
      'Вышивка логотипа'
    ],
    prices: [
      { count: '50 шт', price: '17500 ₽' },
      { count: '100 шт', price: '32000 ₽' },
      { count: '200 шт', price: '60000 ₽' }
    ]
  },
  {
    title: 'Ручки',
    price: 'от 15 ₽ за шт.',
    icon: PenIcon,
    desc: 'Шариковые и гелевые ручки с логотипом. Металлические, пластиковые, с подсветкой.',
    features: [
      'Шариковые и гелевые',
      'Металлические и пластиковые',
      'С подсветкой',
      'Печать логотипа'
    ],
    prices: [
      { count: '100 шт', price: '1500 ₽' },
      { count: '500 шт', price: '6500 ₽' },
      { count: '1000 шт', price: '12000 ₽' }
    ]
  },
  {
    title: 'Часы',
    price: 'от 450 ₽ за шт.',
    icon: ClockIcon,
    desc: 'Настенные и настольные часы с логотипом. Кварцевый механизм, разные размеры и дизайны.',
    features: [
      'Кварцевый механизм',
      'Разные размеры',
      'Печать логотипа',
      'Батарейка в комплекте'
    ],
    prices: [
      { count: '50 шт', price: '22500 ₽' },
      { count: '100 шт', price: '40000 ₽' },
      { count: '200 шт', price: '75000 ₽' }
    ]
  },
  {
    title: 'Магниты',
    price: 'от 35 ₽ за шт.',
    icon: MagnetIcon,
    desc: 'Магниты на холодильник с вашим логотипом или дизайном. Разные формы и размеры.',
    features: [
      'Разные формы',
      'Печать логотипа',
      'Прочный магнит',
      'Яркие цвета'
    ],
    prices: [
      { count: '100 шт', price: '3500 ₽' },
      { count: '500 шт', price: '15000 ₽' },
      { count: '1000 шт', price: '28000 ₽' }
    ]
  },
  {
    title: 'Значки',
    price: 'от 45 ₽ за шт.',
    icon: BadgeIcon,
    desc: 'Значки с логотипом или дизайном. Металлические, пластиковые, разные размеры.',
    features: [
      'Металлические и пластиковые',
      'Разные размеры',
      'Печать логотипа',
      'Безопасная застежка'
    ],
    prices: [
      { count: '100 шт', price: '4500 ₽' },
      { count: '500 шт', price: '20000 ₽' },
      { count: '1000 шт', price: '38000 ₽' }
    ]
  },
  {
    title: 'Кепки',
    price: 'от 280 ₽ за шт.',
    icon: CapIcon,
    desc: 'Бейсболки с вышивкой логотипа. Разные цвета, регулируемый размер.',
    features: [
      '100% хлопок',
      'Вышивка логотипа',
      'Регулируемый размер',
      'Разные цвета'
    ],
    prices: [
      { count: '50 шт', price: '14000 ₽' },
      { count: '100 шт', price: '25000 ₽' },
      { count: '200 шт', price: '48000 ₽' }
    ]
  },
  {
    title: 'Сумки',
    price: 'от 220 ₽ за шт.',
    icon: BagIcon,
    desc: 'Экосумки и шопперы с логотипом. Хлопок, полиэстер, разные размеры.',
    features: [
      'Хлопок и полиэстер',
      'Разные размеры',
      'Печать логотипа',
      'Прочные ручки'
    ],
    prices: [
      { count: '50 шт', price: '11000 ₽' },
      { count: '100 шт', price: '20000 ₽' },
      { count: '200 шт', price: '38000 ₽' }
    ]
  },
  {
    title: 'Зонты',
    price: 'от 450 ₽ за шт.',
    icon: UmbrellaIcon,
    desc: 'Зонты с логотипом. Автоматические, складные, разные размеры.',
    features: [
      'Автоматические и складные',
      'Разные размеры',
      'Печать логотипа',
      'Прочный механизм'
    ],
    prices: [
      { count: '50 шт', price: '22500 ₽' },
      { count: '100 шт', price: '40000 ₽' },
      { count: '200 шт', price: '75000 ₽' }
    ]
  }
];

function Souvenirs() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1 }}>Сувенирная продукция</h1>
      <div style={{ maxWidth: 800, margin: '0 auto 32px', color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}>
        <p>Мы предлагаем широкий ассортимент сувенирной продукции с нанесением вашего логотипа или дизайна. Качественные материалы, современные технологии нанесения и индивидуальный подход к каждому заказу.</p>
      </div>
      <div className="catalog-grid">
        {souvenirServices.map((service, index) => (
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

export default Souvenirs; 