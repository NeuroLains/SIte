import React, { useState } from 'react';
import BusinessCardIcon from '../assets/icons/business-card.svg';
import FlyerIcon from '../assets/icons/flyer.svg';
import BookIcon from '../assets/icons/book.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import OrderModal from '../components/OrderModal';

// Импортируем изображения для полиграфии
import businessCardImage from '../assets/services/polygraphy/business-card.jpg';
import flyerImage from '../assets/services/polygraphy/flyer.jpg';
import bookImage from '../assets/services/polygraphy/book.jpg';
import calendarImage from '../assets/services/polygraphy/calendar.jpg';

const polygraphyServices = [
  {
    title: 'Визитки',
    price: 'от 100 ₽ за 100 шт.',
    icon: BusinessCardIcon,
    image: businessCardImage,
    desc: 'Печать визиток на качественной бумаге. Разные форматы, типы бумаги, отделка.',
    features: [
      'Разные форматы',
      'Разная бумага',
      'Двусторонняя печать',
      'Ламинирование'
    ],
    prices: [
      { count: '100 шт', price: '100 ₽' },
      { count: '500 шт', price: '400 ₽' },
      { count: '1000 шт', price: '700 ₽' }
    ]
  },
  {
    title: 'Листовки',
    price: 'от 200 ₽ за 100 шт.',
    icon: FlyerIcon,
    image: flyerImage,
    desc: 'Печать листовок, флаеров, буклетов. Разные форматы, типы бумаги.',
    features: [
      'Разные форматы',
      'Разная бумага',
      'Двусторонняя печать',
      'Срочная печать'
    ],
    prices: [
      { count: '100 шт', price: '200 ₽' },
      { count: '500 шт', price: '800 ₽' },
      { count: '1000 шт', price: '1500 ₽' }
    ]
  },
  {
    title: 'Книги',
    price: 'от 500 ₽ за шт.',
    icon: BookIcon,
    image: bookImage,
    desc: 'Печать книг, каталогов, журналов. Твердая и мягкая обложка.',
    features: [
      'Твердая обложка',
      'Мягкая обложка',
      'Разные форматы',
      'Цветная печать'
    ],
    prices: [
      { count: '50 шт', price: '25000 ₽' },
      { count: '100 шт', price: '45000 ₽' },
      { count: '200 шт', price: '80000 ₽' }
    ]
  },
  {
    title: 'Календари',
    price: 'от 300 ₽ за шт.',
    icon: CalendarIcon,
    image: calendarImage,
    desc: 'Печать календарей разных форматов. Настенные, настольные, карманные.',
    features: [
      'Настенные',
      'Настольные',
      'Карманные',
      'Разные форматы'
    ],
    prices: [
      { count: '50 шт', price: '15000 ₽' },
      { count: '100 шт', price: '28000 ₽' },
      { count: '200 шт', price: '50000 ₽' }
    ]
  }
];

function Polygraphy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOrderClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ 
        color: '#2196f3', 
        margin: '32px 0 16px', 
        fontWeight: 700, 
        letterSpacing: 1,
        fontSize: '2.5rem'
      }}>Полиграфия</h1>
      <div style={{ 
        maxWidth: 800, 
        margin: '0 auto 48px', 
        color: '#666', 
        fontSize: '1.1rem', 
        lineHeight: 1.6 
      }}>
        <p>Мы предлагаем широкий спектр полиграфических услуг: печать визиток, листовок, книг и календарей. Современное оборудование, высокое качество и быстрые сроки выполнения.</p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        padding: '0 24px',
        maxWidth: 1400,
        margin: '0 auto'
      }}>
        {polygraphyServices.map((service, index) => (
          <div key={index} style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden',
            transition: 'transform 0.3s, box-shadow 0.3s',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            ':hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
            }
          }}>
            <div style={{
              height: '200px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={service.image} 
                alt={service.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)'
              }} />
            </div>
            
            <div style={{
              padding: '24px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  style={{
                    width: '32px',
                    height: '32px',
                    marginRight: '12px'
                  }}
                />
                <h3 style={{
                  margin: 0,
                  fontSize: '1.5rem',
                  color: '#1976d2',
                  fontWeight: 600
                }}>{service.title}</h3>
              </div>

              <div style={{
                color: '#666',
                fontSize: '1.1rem',
                marginBottom: '16px',
                flex: 1
              }}>{service.desc}</div>

              <div style={{
                background: '#f5f5f5',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px'
              }}>
                {service.features.map((feature, idx) => (
                  <div key={idx} style={{
                    color: '#1976d2',
                    fontSize: '0.95rem',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      color: '#2196f3',
                      marginRight: '8px',
                      fontSize: '1.2rem'
                    }}>•</span>
                    {feature}
                  </div>
                ))}
              </div>

              <div style={{
                background: '#e8f5e9',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '24px'
              }}>
                {service.prices.map((price, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                    color: '#388e3c',
                    fontWeight: 500
                  }}>
                    <span>{price.count}</span>
                    <span style={{ fontWeight: 600 }}>{price.price}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleOrderClick(service)}
                style={{
                  background: '#2196f3',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  width: '100%',
                  ':hover': {
                    background: '#1976d2'
                  }
                }}
              >
                Заказать
              </button>
            </div>
          </div>
        ))}
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={selectedService?.title}
      />
    </div>
  );
}

export default Polygraphy; 