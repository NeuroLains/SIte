import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const contactInfo = {
  phone: '+7 (999) 123-45-67',
  whatsapp: '+7 (999) 123-45-67',
  telegram: '@kolibriya',
  email: 'info@kolibriya.ru',
  address: 'г. Москва, ул. Примерная, д. 1',
  workHours: 'Пн-Пт: 9:00 - 18:00',
  weekend: 'Сб-Вс: выходной'
};

function Contacts() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1 }}>Контакты</h1>
      
      <div style={{ maxWidth: 800, margin: '0 auto 48px', padding: '0 16px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px',
          marginBottom: 48
        }}>
          <div style={{ 
            background: '#fff',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <FaPhone size={32} color="#2196f3" style={{ marginBottom: 16 }} />
            <h3 style={{ color: '#1976d2', marginBottom: 12, fontSize: '1.2rem' }}>Телефон</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: 8 }}>{contactInfo.phone}</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Звоните нам в рабочее время</p>
          </div>

          <div style={{ 
            background: '#fff',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <FaWhatsapp size={32} color="#2196f3" style={{ marginBottom: 16 }} />
            <h3 style={{ color: '#1976d2', marginBottom: 12, fontSize: '1.2rem' }}>WhatsApp</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: 8 }}>{contactInfo.whatsapp}</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Быстрый ответ в мессенджере</p>
          </div>

          <div style={{ 
            background: '#fff',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <FaTelegram size={32} color="#2196f3" style={{ marginBottom: 16 }} />
            <h3 style={{ color: '#1976d2', marginBottom: 12, fontSize: '1.2rem' }}>Telegram</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: 8 }}>{contactInfo.telegram}</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Свяжитесь с нами в Telegram</p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px'
        }}>
          <div style={{ 
            background: '#fff',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <FaEnvelope size={32} color="#2196f3" style={{ marginBottom: 16 }} />
            <h3 style={{ color: '#1976d2', marginBottom: 12, fontSize: '1.2rem' }}>Email</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: 8 }}>{contactInfo.email}</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Отправьте нам письмо</p>
          </div>

          <div style={{ 
            background: '#fff',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <FaMapMarkerAlt size={32} color="#2196f3" style={{ marginBottom: 16 }} />
            <h3 style={{ color: '#1976d2', marginBottom: 12, fontSize: '1.2rem' }}>Адрес</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: 8 }}>{contactInfo.address}</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Приходите к нам в офис</p>
          </div>

          <div style={{ 
            background: '#fff',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <FaClock size={32} color="#2196f3" style={{ marginBottom: 16 }} />
            <h3 style={{ color: '#1976d2', marginBottom: 12, fontSize: '1.2rem' }}>Режим работы</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: 8 }}>{contactInfo.workHours}</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>{contactInfo.weekend}</p>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: 800, 
        margin: '0 auto', 
        padding: '32px 16px',
        background: '#e3f2fd',
        borderRadius: 12
      }}>
        <h2 style={{ color: '#1976d2', marginBottom: 24, fontSize: '1.8rem' }}>Как нас найти</h2>
        <div style={{ 
          width: '100%', 
          height: 400, 
          background: '#fff',
          borderRadius: 8,
          marginBottom: 24
        }}>
          {/* Здесь будет карта */}
          <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#666'
          }}>
            Карта будет добавлена позже
          </div>
        </div>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Мы находимся в центре города, рядом с остановкой общественного транспорта. 
          Есть парковка для автомобилей. Приходите к нам в гости!
        </p>
      </div>

      <div style={{ marginTop: 48, maxWidth: 800, padding: '0 16px' }}>
        <h2 style={{ color: '#1976d2', marginBottom: 24, fontSize: '1.8rem' }}>Остались вопросы?</h2>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 32 }}>
          Напишите нам, и мы с радостью ответим на все ваши вопросы. 
          Мы всегда готовы помочь вам с выбором продукции и оформлением заказа.
        </p>
        <button style={{
          background: '#2196f3',
          color: '#fff',
          border: 'none',
          padding: '12px 32px',
          borderRadius: 8,
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}>
          Написать нам
        </button>
      </div>
    </div>
  );
}

export default Contacts; 