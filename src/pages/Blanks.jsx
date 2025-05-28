import React from 'react';
import DocumentIcon from '../assets/icons/document.svg';
import CertificateIcon from '../assets/icons/certificate.svg';
import DiplomaIcon from '../assets/icons/diploma.svg';
import JournalIcon from '../assets/icons/journal.svg';
import BookIcon from '../assets/icons/book.svg';
import FolderIcon from '../assets/icons/folder.svg';

const blankServices = [
  {
    title: 'Бланки документов',
    price: 'от 2.5 ₽ за шт.',
    icon: DocumentIcon,
    desc: 'Бланки документов с логотипом компании. Печать на бумаге с водяными знаками, нумерация.',
    features: [
      'Бумага с водяными знаками',
      'Нумерация',
      'Печать логотипа',
      'Разные форматы'
    ],
    prices: [
      { count: '100 шт', price: '250 ₽' },
      { count: '500 шт', price: '1000 ₽' },
      { count: '1000 шт', price: '1800 ₽' }
    ]
  },
  {
    title: 'Сертификаты',
    price: 'от 15 ₽ за шт.',
    icon: CertificateIcon,
    desc: 'Сертификаты, грамоты, благодарности. Дизайнерская бумага, тиснение, печать.',
    features: [
      'Дизайнерская бумага',
      'Тиснение золотом/серебром',
      'Печать логотипа',
      'Разные форматы'
    ],
    prices: [
      { count: '50 шт', price: '750 ₽' },
      { count: '100 шт', price: '1400 ₽' },
      { count: '200 шт', price: '2600 ₽' }
    ]
  },
  {
    title: 'Дипломы',
    price: 'от 25 ₽ за шт.',
    icon: DiplomaIcon,
    desc: 'Дипломы для наград, конкурсов, соревнований. Твердая обложка, тиснение, печать.',
    features: [
      'Твердая обложка',
      'Тиснение золотом/серебром',
      'Печать логотипа',
      'Разные форматы'
    ],
    prices: [
      { count: '50 шт', price: '1250 ₽' },
      { count: '100 шт', price: '2300 ₽' },
      { count: '200 шт', price: '4400 ₽' }
    ]
  },
  {
    title: 'Журналы',
    price: 'от 35 ₽ за шт.',
    icon: JournalIcon,
    desc: 'Журналы учета, регистрации, инструктажа. Твердая обложка, прошивка, печать.',
    features: [
      'Твердая обложка',
      'Прошивка',
      'Печать логотипа',
      'Разные форматы'
    ],
    prices: [
      { count: '50 шт', price: '1750 ₽' },
      { count: '100 шт', price: '3200 ₽' },
      { count: '200 шт', price: '6000 ₽' }
    ]
  },
  {
    title: 'Книги',
    price: 'от 45 ₽ за шт.',
    icon: BookIcon,
    desc: 'Книги, брошюры, каталоги. Твердая обложка, полноцветная печать, тиснение.',
    features: [
      'Твердая обложка',
      'Полноцветная печать',
      'Тиснение золотом/серебром',
      'Разные форматы'
    ],
    prices: [
      { count: '50 шт', price: '2250 ₽' },
      { count: '100 шт', price: '4200 ₽' },
      { count: '200 шт', price: '8000 ₽' }
    ]
  },
  {
    title: 'Папки',
    price: 'от 28 ₽ за шт.',
    icon: FolderIcon,
    desc: 'Папки для документов с логотипом. Картон, ламинация, полноцветная печать.',
    features: [
      'Картон 250-300 г/м²',
      'Ламинация',
      'Печать логотипа',
      'Разные форматы'
    ],
    prices: [
      { count: '50 шт', price: '1400 ₽' },
      { count: '100 шт', price: '2600 ₽' },
      { count: '200 шт', price: '4800 ₽' }
    ]
  }
];

function Blanks() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1 }}>Бланки и документы</h1>
      <div style={{ maxWidth: 800, margin: '0 auto 32px', color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}>
        <p>Мы изготавливаем бланки и документы с нанесением вашего логотипа. Качественные материалы, современные технологии печати и индивидуальный подход к каждому заказу.</p>
      </div>
      <div className="catalog-grid">
        {blankServices.map((service, index) => (
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

export default Blanks; 