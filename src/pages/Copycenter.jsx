import React from 'react';
import PrintIcon from '../assets/icons/print.svg';
import ScanIcon from '../assets/icons/scan.svg';
import BindIcon from '../assets/icons/bind.svg';
import LaminIcon from '../assets/icons/lamin.svg';
import CutIcon from '../assets/icons/cut.svg';
import PhotoIcon from '../assets/icons/photo.svg';

const copycenterServices = [
  {
    title: 'Печать',
    price: 'от 2 ₽ за стр.',
    icon: PrintIcon,
    desc: 'Черно-белая и цветная печать документов, фотографий, плакатов. Разные форматы, бумага.',
    features: [
      'Черно-белая печать',
      'Цветная печать',
      'Разные форматы',
      'Разная бумага'
    ],
    prices: [
      { count: 'Ч/б А4', price: '2 ₽/стр' },
      { count: 'Цвет А4', price: '15 ₽/стр' },
      { count: 'А3', price: 'x2 к А4' }
    ]
  },
  {
    title: 'Сканирование',
    price: 'от 5 ₽ за стр.',
    icon: ScanIcon,
    desc: 'Сканирование документов, фотографий, книг. Высокое качество, разные форматы.',
    features: [
      'Высокое качество',
      'Разные форматы',
      'Цветное сканирование',
      'Сканирование книг'
    ],
    prices: [
      { count: 'А4', price: '5 ₽/стр' },
      { count: 'А3', price: '10 ₽/стр' },
      { count: 'Фото', price: '15 ₽/шт' }
    ]
  },
  {
    title: 'Брошюровка',
    price: 'от 50 ₽',
    icon: BindIcon,
    desc: 'Брошюровка документов, дипломов, курсовых. Твердая и мягкая обложка.',
    features: [
      'Твердая обложка',
      'Мягкая обложка',
      'Разные форматы',
      'Разная бумага'
    ],
    prices: [
      { count: 'Мягкая', price: '50 ₽' },
      { count: 'Твердая', price: '150 ₽' },
      { count: 'Доп. стр', price: '2 ₽/стр' }
    ]
  },
  {
    title: 'Ламинация',
    price: 'от 30 ₽',
    icon: LaminIcon,
    desc: 'Ламинация документов, фотографий, карточек. Разные форматы, толщина пленки.',
    features: [
      'Разные форматы',
      'Разная толщина',
      'Матовое покрытие',
      'Глянцевое покрытие'
    ],
    prices: [
      { count: 'А4', price: '30 ₽' },
      { count: 'А3', price: '60 ₽' },
      { count: 'А5', price: '20 ₽' }
    ]
  },
  {
    title: 'Резка',
    price: 'от 10 ₽',
    icon: CutIcon,
    desc: 'Резка бумаги, картона, фотографий. Точная резка, разные форматы.',
    features: [
      'Точная резка',
      'Разные форматы',
      'Разные материалы',
      'Массовая резка'
    ],
    prices: [
      { count: 'А4', price: '10 ₽' },
      { count: 'А3', price: '20 ₽' },
      { count: 'Массовая', price: '5 ₽/рез' }
    ]
  },
  {
    title: 'Фотопечать',
    price: 'от 15 ₽',
    icon: PhotoIcon,
    desc: 'Печать фотографий, открыток, календарей. Высокое качество, разные форматы.',
    features: [
      'Высокое качество',
      'Разные форматы',
      'Разная бумага',
      'Быстрая печать'
    ],
    prices: [
      { count: '10x15', price: '15 ₽' },
      { count: '15x21', price: '30 ₽' },
      { count: '20x30', price: '60 ₽' }
    ]
  }
];

function Copycenter() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1 }}>Копицентр</h1>
      <div style={{ maxWidth: 800, margin: '0 auto 32px', color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}>
        <p>Мы предлагаем полный спектр услуг копицентра: печать, сканирование, брошюровка, ламинация, резка, фотопечать. Качественное оборудование, опытные специалисты и индивидуальный подход к каждому заказу.</p>
      </div>
      <div className="catalog-grid">
        {copycenterServices.map((service, index) => (
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

export default Copycenter; 