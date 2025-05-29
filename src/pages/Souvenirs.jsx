import React, { useState } from 'react';
import MugIcon from '../assets/icons/mug.svg';
import TshirtIcon from '../assets/icons/tshirt.svg';
import PenIcon from '../assets/icons/pen.svg';
import ClockIcon from '../assets/icons/clock.svg';
import MagnetIcon from '../assets/icons/magnet.svg';
import BadgeIcon from '../assets/icons/badge.svg';
import CapIcon from '../assets/icons/cap.svg';
import BagIcon from '../assets/icons/bag.svg';
import UmbrellaIcon from '../assets/icons/umbrella.svg';
import OrderModal from '../components/OrderModal';

// Импортируем изображения для сувениров
import mugImage from '../assets/services/souvenirs/mug.jpg';
import tshirtImage from '../assets/services/souvenirs/tshirt.jpg';
import penImage from '../assets/services/souvenirs/pen.jpg';
import clockImage from '../assets/services/souvenirs/clock.jpg';
import magnetImage from '../assets/services/souvenirs/magnet.jpg';
import badgeImage from '../assets/services/souvenirs/badge.jpg';
import capImage from '../assets/services/souvenirs/cap.jpg';
import bagImage from '../assets/services/souvenirs/bag.jpg';
import umbrellaImage from '../assets/services/souvenirs/umbrella.jpg';

const souvenirServices = [
  {
    title: 'Кружки',
    price: 'от 180 ₽ за шт.',
    icon: MugIcon,
    image: mugImage,
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
    image: tshirtImage,
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
    image: penImage,
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
    image: clockImage,
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
    image: magnetImage,
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
    image: badgeImage,
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
    image: capImage,
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
    image: bagImage,
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
    image: umbrellaImage,
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
      }}>Сувенирная продукция</h1>
      <div style={{ 
        maxWidth: 800, 
        margin: '0 auto 48px', 
        color: '#666', 
        fontSize: '1.1rem', 
        lineHeight: 1.6 
      }}>
        <p>Мы предлагаем широкий ассортимент сувенирной продукции с нанесением вашего логотипа или дизайна. Качественные материалы, современные технологии нанесения и индивидуальный подход к каждому заказу.</p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        padding: '0 24px',
        maxWidth: 1400,
        margin: '0 auto'
      }}>
        {souvenirServices.map((service, index) => (
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

export default Souvenirs; 