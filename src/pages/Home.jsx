import React, { useState, useEffect } from 'react';
import CardIcon from '../assets/icons/card.svg';
import LeafletIcon from '../assets/icons/booklet.svg';
import BookletIcon from '../assets/icons/booklet.svg';
import PosterIcon from '../assets/icons/poster.svg';
import FlyerIcon from '../assets/icons/booklet.svg';
import StickerIcon from '../assets/icons/sticker.svg';
import BadgeIcon from '../assets/icons/tag.svg';
import TshirtIcon from '../assets/icons/bag.svg';
import MugIcon from '../assets/icons/bag.svg';
import DesignIcon from '../assets/icons/tag.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import NotebookIcon from '../assets/icons/notebook.svg';
import PenIcon from '../assets/icons/tag.svg';
import FolderIcon from '../assets/icons/folder.svg';
import ProductCard from '../components/ProductCard';

// Импортируем изображения для слайдера
import slider1 from '../assets/gallery/1.jpg';
import slider2 from '../assets/gallery/2.jpg';
import slider3 from '../assets/gallery/3.jpg';
import slider4 from '../assets/gallery/4.jpg';

// Импортируем изображения для галереи работ
import work1 from '../assets/gallery/1.jpg';
import work2 from '../assets/gallery/2.jpg';
import work3 from '../assets/gallery/3.jpg';
import work4 from '../assets/gallery/4.jpg';
import work5 from '../assets/gallery/5.jpg';
import work6 from '../assets/gallery/6.jpg';
import work7 from '../assets/gallery/7.jpg';
import work8 from '../assets/gallery/8.jpg';
import work9 from '../assets/gallery/9.jpg';
import work10 from '../assets/gallery/10.jpg';
import work11 from '../assets/gallery/11.jpg';
import work12 from '../assets/gallery/12.jpg';
import work13 from '../assets/gallery/13.jpg';
import work14 from '../assets/gallery/14.jpg';

import photo1 from '../assets/gallery/photo1.jpg';
import photo2 from '../assets/gallery/photo2.jpg';
import photo3 from '../assets/gallery/photo3.jpg';

const services = [
  { title: 'Визитки', price: 95, oldPrice: 120, discount: 21, icon: CardIcon, image: photo1, rating: 4.9, reviews: 120 },
  { title: 'Листовки', price: 220, oldPrice: 250, discount: 12, icon: LeafletIcon, image: photo2, rating: 4.8, reviews: 80 },
  { title: 'Буклеты', price: 410, oldPrice: 500, discount: 18, icon: BookletIcon, image: photo3, rating: 4.7, reviews: 60 },
  { title: 'Афиши', price: 78, oldPrice: 100, discount: 22, icon: PosterIcon, image: photo1, rating: 4.6, reviews: 45 },
  { title: 'Флаеры', price: 140, oldPrice: 180, discount: 22, icon: FlyerIcon, image: photo2, rating: 4.8, reviews: 70 },
  { title: 'Наклейки', price: 400, oldPrice: 500, discount: 20, icon: StickerIcon, image: photo3, rating: 4.9, reviews: 90 },
  { title: 'Значки', price: 25, oldPrice: 35, discount: 29, icon: BadgeIcon, image: photo1, rating: 4.9, reviews: 110 },
  { title: 'Футболки', price: 200, oldPrice: 250, discount: 20, icon: TshirtIcon, image: photo2, rating: 4.7, reviews: 55 },
  { title: 'Кружки', price: 250, oldPrice: 300, discount: 17, icon: MugIcon, image: photo3, rating: 4.8, reviews: 75 },
  { title: 'Дизайн', price: 100, oldPrice: 120, discount: 17, icon: DesignIcon, image: photo1, rating: 4.9, reviews: 60 },
  { title: 'Календари', price: 300, oldPrice: 350, discount: 14, icon: CalendarIcon, image: photo2, rating: 4.8, reviews: 50 },
  { title: 'Блокноты', price: 1050, oldPrice: 1200, discount: 13, icon: NotebookIcon, image: photo3, rating: 4.7, reviews: 40 },
  { title: 'Ручки', price: 15, oldPrice: 20, discount: 25, icon: PenIcon, image: photo1, rating: 4.8, reviews: 100 },
  { title: 'Плакаты', price: 78, oldPrice: 100, discount: 22, icon: PosterIcon, image: photo2, rating: 4.6, reviews: 30 },
  { title: 'Папки', price: 1400, oldPrice: 1600, discount: 13, icon: FolderIcon, image: photo3, rating: 4.7, reviews: 25 }
];

const sliderContent = [
  { image: slider1, title: 'Печать визиток', price: 'от 95 ₽ за 100 шт.' },
  { image: slider2, title: 'Печать листовок', price: 'от 220 ₽ за 100 шт.' },
  { image: slider3, title: 'Печать буклетов', price: 'от 410 ₽ за 100 шт.' },
  { image: slider4, title: 'Печать плакатов', price: 'от 78 ₽ за 10 шт.' }
];

const galleryImages = [
  work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12, work13, work14
];

export default function Home() {
  // --- Автослайдер ---
  const [autoIndex, setAutoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % sliderContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // --- Примеры работ ---
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleCount = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const showPrev = () => setGalleryIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const showNext = () => setGalleryIndex((i) => (i + 1) % galleryImages.length);
  const getVisibleImages = () => {
    return Array.from({ length: visibleCount }, (_, i) =>
      galleryImages[(galleryIndex + i) % galleryImages.length]
    );
  };

  return (
    <>
      <div className="slider-hero">
        <div className="slider-hero-bg">
          <img src={sliderContent[autoIndex].image} alt="Слайд" className="slider-hero-img" />
          <div className="slider-hero-content">
            <h1 className="slider-hero-title">{sliderContent[autoIndex].title}</h1>
            <div className="slider-hero-sub">{sliderContent[autoIndex].price}</div>
            <button className="main-btn slider-hero-btn">Рассчитать стоимость</button>
          </div>
        </div>
      </div>
      <div style={{ padding: '32px 0', textAlign: 'center' }}>
        <h2 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1 }}>Хиты продаж</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '32px',
          margin: '40px 0',
          padding: '0 24px',
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {services.slice(0, 10).map((service, idx) => (
            <ProductCard
              key={idx}
              to={`/product/${idx}`}
              image={service.image}
              title={service.title}
              price={service.price}
              oldPrice={service.oldPrice}
              discount={service.discount}
            />
          ))}
        </div>
        {/* Примеры наших работ */}
        <div className="section-yellow">
          <div className="gallery-section">
            <div className="gallery-title" style={{ color: '#2196f3', fontWeight: 700, letterSpacing: 1, marginBottom: 28 }}>Наши работы</div>
            <div className="gallery-slider" style={{ 
              display: 'flex', 
              gap: '16px', 
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
              position: 'relative',
              padding: '20px 0',
              overflow: 'hidden'
            }}>
              <span className="gallery-arrow" onClick={showPrev} style={{ 
                cursor: 'pointer', 
                fontSize: '32px', 
                padding: '8px', 
                color: '#2196f3',
                zIndex: 2,
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>&lt;</span>
              {getVisibleImages().map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Пример работы ${idx + 1}`}
                  className="gallery-img"
                  style={{
                    height: '360px',
                    width: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'opacity 0.5s, transform 0.5s',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    flex: '0 0 360px',
                    marginRight: '16px',
                    opacity: 1,
                    transform: 'scale(1)'
                  }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
              <span className="gallery-arrow" onClick={showNext} style={{ 
                cursor: 'pointer', 
                fontSize: '32px', 
                padding: '8px', 
                color: '#2196f3',
                zIndex: 2,
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>&gt;</span>
            </div>
            <div className="gallery-dots" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '8px', 
              marginTop: '16px' 
            }}>
              {galleryImages.map((_, idx) => (
                <span
                  key={idx}
                  className={"gallery-dot" + (galleryIndex === idx ? " active" : "")}
                  onClick={() => setGalleryIndex(idx)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: galleryIndex === idx ? '#2196f3' : '#ccc',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: galleryIndex === idx ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно для просмотра изображения */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Увеличенное изображение" 
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>
      )}
    </>
  );
} 