import React from 'react';
import BadgeIcon from '../assets/icons/badge.svg';
import BadgeRoundIcon from '../assets/icons/badge-round.svg';
import BadgeSquareIcon from '../assets/icons/badge-square.svg';
import BadgeStarIcon from '../assets/icons/badge-star.svg';
import BadgeCustomIcon from '../assets/icons/badge-custom.svg';

const badgeServices = [
  {
    title: 'Круглые значки',
    price: 'от 45 ₽ за шт.',
    icon: BadgeRoundIcon,
    desc: 'Классические круглые значки с логотипом или дизайном. Металлические, пластиковые, разные диаметры.',
    features: [
      'Диаметры 25-56 мм',
      'Металлические и пластиковые',
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
    title: 'Прямоугольные значки',
    price: 'от 55 ₽ за шт.',
    icon: BadgeSquareIcon,
    desc: 'Прямоугольные значки для сотрудников, посетителей, участников мероприятий. С булавкой или магнитом.',
    features: [
      'Размеры 25x75 мм',
      'Металлические и пластиковые',
      'Печать логотипа',
      'Булавка или магнит'
    ],
    prices: [
      { count: '100 шт', price: '5500 ₽' },
      { count: '500 шт', price: '24000 ₽' },
      { count: '1000 шт', price: '45000 ₽' }
    ]
  },
  {
    title: 'Звездные значки',
    price: 'от 65 ₽ за шт.',
    icon: BadgeStarIcon,
    desc: 'Значки в форме звезды для наград, поощрений, отличительных знаков. Металлические, с гравировкой.',
    features: [
      'Размер 40 мм',
      'Металлические',
      'Гравировка или печать',
      'Позолота, серебрение'
    ],
    prices: [
      { count: '50 шт', price: '3250 ₽' },
      { count: '100 шт', price: '6000 ₽' },
      { count: '200 шт', price: '11000 ₽' }
    ]
  },
  {
    title: 'Значки с подсветкой',
    price: 'от 120 ₽ за шт.',
    icon: BadgeIcon,
    desc: 'Значки со встроенной подсветкой для мероприятий, ночных клубов, вечеринок. Работают от батарейки.',
    features: [
      'Размер 50 мм',
      'Светодиодная подсветка',
      'Батарейка в комплекте',
      'Разные цвета свечения'
    ],
    prices: [
      { count: '50 шт', price: '6000 ₽' },
      { count: '100 шт', price: '11000 ₽' },
      { count: '200 шт', price: '20000 ₽' }
    ]
  },
  {
    title: 'Значки на заказ',
    price: 'от 80 ₽ за шт.',
    icon: BadgeCustomIcon,
    desc: 'Значки любой формы и размера по вашему дизайну. Индивидуальный подход, уникальные решения.',
    features: [
      'Любая форма и размер',
      'Металл, пластик, дерево',
      'Печать, гравировка',
      'Индивидуальный дизайн'
    ],
    prices: [
      { count: '50 шт', price: '4000 ₽' },
      { count: '100 шт', price: '7500 ₽' },
      { count: '200 шт', price: '14000 ₽' }
    ]
  }
];

function Badges() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1 }}>Значки</h1>
      <div style={{ maxWidth: 800, margin: '0 auto 32px', color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}>
        <p>Мы изготавливаем значки любых форм и размеров с нанесением вашего логотипа или дизайна. Качественные материалы, современные технологии нанесения и индивидуальный подход к каждому заказу.</p>
      </div>
      <div className="catalog-grid">
        {badgeServices.map((service, index) => (
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

export default Badges; 