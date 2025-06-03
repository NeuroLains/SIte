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
import work1 from '../assets/gallery/photo1.jpg';
import work2 from '../assets/gallery/photo2.jpg';
import work3 from '../assets/gallery/photo3.jpg';
import work4 from '../assets/gallery/komissia1.jpg';

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
  {
    title: 'КАЛЕНДАРЬ\nТРЕХБЛОЧНЫЙ\nНАСТЕННЫЙ',
    price: 'от 32.2 ₽ за шт.',
    image: slider1
  },
  {
    title: 'ПЕЧАТЬ НА\nФУТБОЛКАХ',
    price: 'от 200 ₽ за шт.',
    image: slider2
  },
  {
    title: 'ЗАКАТНЫЕ\nЗНАЧКИ',
    price: 'от 25 ₽ за шт.',
    image: slider3
  },
  {
    title: 'ПОЛИГРАФИЯ\nЛЮБОЙ СЛОЖНОСТИ',
    price: 'от 0.95 ₽ за шт.',
    image: slider4
  }
];

const galleryImages = [work1, work2, work3, work4];

function Home() {
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
  const visibleCount = 3;
  const [modal, setModal] = useState(null); // {title, price, icon, desc}
  const showPrev = () => setGalleryIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const showNext = () => setGalleryIndex((i) => (i + 1) % galleryImages.length);
  const getVisibleImages = () => {
    return Array.from({ length: visibleCount }, (_, idx) =>
      galleryImages[(galleryIndex + idx) % galleryImages.length]
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
        <h2 style={{ color: '#2196f3', margin: '32px 0 16px', fontWeight: 700, letterSpacing: 1 }}>Наша продукция</h2>
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
          {services.map((service, idx) => (
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
        {/* Модальное окно услуги */}
        {modal && (
          <div className="modal-overlay" onClick={() => setModal(null)}>
            <div className="modal-window" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModal(null)}>&times;</button>
              <img src={modal.icon} alt={modal.title} className="modal-img" />
              <div className="modal-title">{modal.title}</div>
              <div className="modal-price">{modal.price}</div>
              <div className="modal-desc">{modal.desc}</div>
              {modal.title === 'Визитки' && (
                <>
                  <ul style={{margin:'16px 0 12px 0', color:'#1976d2', fontSize:'1.05rem', textAlign:'left', maxWidth:400, marginLeft:'auto', marginRight:'auto'}}>
                    <li>Печать от 100 шт. за 1 день</li>
                    <li>Плотная бумага 300-350 г/м²</li>
                    <li>Ламинация, тиснение, фигурная вырубка</li>
                    <li>Дизайн под ваш бренд</li>
                  </ul>
                  <div style={{background:'#e8fbe9', borderRadius:10, padding:'10px 18px', margin:'12px 0', color:'#388e3c', fontWeight:600, fontSize:'1.08rem'}}>
                    <div>Цены:</div>
                    <div>100 шт — <b>950 ₽</b></div>
                    <div>500 шт — <b>3900 ₽</b></div>
                    <div>1000 шт — <b>6900 ₽</b></div>
                  </div>
                  <div style={{margin:'12px 0'}}>
                    <img src={modal.icon} alt="Пример визитки" style={{width:120, borderRadius:10, boxShadow:'0 2px 8px #b39ddb33'}} />
                  </div>
                  <button className="main-btn" style={{marginTop:8, minWidth:160}} onClick={()=>window.location.href='/contacts'}>Заказать визитки</button>
                </>
              )}
              {modal.title !== 'Визитки' && (
                <button className="main-btn" onClick={() => window.location.href = `/product/${services.findIndex(s=>s.title===modal.title)}`}>Подробнее</button>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Примеры наших работ */}
      <div className="section-yellow">
        <div className="gallery-section">
          <div className="gallery-title" style={{ color: '#2196f3', fontWeight: 700, letterSpacing: 1, marginBottom: 28 }}>ПРИМЕРЫ НАШИХ РАБОТ</div>
          <div className="gallery-slider" style={{ gap: 12 }}>
            <span className="gallery-arrow" onClick={showPrev}>&lt;</span>
            {getVisibleImages().map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Пример работы ${galleryIndex + idx + 1}`}
                className="gallery-img"
                style={{ margin: '0 8px', transition: 'box-shadow 0.3s, transform 0.3s' }}
              />
            ))}
            <span className="gallery-arrow" onClick={showNext}>&gt;</span>
          </div>
          <div className="gallery-dots">
            {galleryImages.map((_, idx) => (
              <span
                key={idx}
                className={"gallery-dot" + (galleryIndex === idx ? " active" : "")}
                onClick={() => setGalleryIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Блок преимуществ */}
      <div className="section-lavender advantages-block">
        <h2 className="advantages-title">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
        <div className="advantages-grid">
          <div className="advantage-item">
            <div className="advantage-icon">💳</div>
            <div className="advantage-label">Гибкая оплата</div>
            <div className="advantage-desc">Карты, переводы, наличные</div>
          </div>
          <div className="advantage-item">
            <div className="advantage-icon">⚡</div>
            <div className="advantage-label">Скорость</div>
            <div className="advantage-desc">Выполним срочно — от 1 дня</div>
          </div>
          <div className="advantage-item">
            <div className="advantage-icon">🎨</div>
            <div className="advantage-label">Дизайн</div>
            <div className="advantage-desc">Поможем с макетом и идеей</div>
          </div>
          <div className="advantage-item">
            <div className="advantage-icon">🏭</div>
            <div className="advantage-label">Собственное производство</div>
            <div className="advantage-desc">Контроль качества и сроков</div>
          </div>
        </div>
      </div>
      <div className="section-green">
        <div style={{maxWidth: 800, margin: '0 auto', textAlign: 'center', fontSize: '1.15rem', color: '#1976d2', fontWeight: 500, lineHeight: 1.7}}>
          <h2 style={{color:'#43d854', fontWeight:700, marginBottom:16}}>Типография «Колибрия»</h2>
          <p>Печать любой сложности в Нижнем Новгороде. Качество, скорость, индивидуальный подход. Мы предлагаем широкий спектр полиграфических и сувенирных услуг для бизнеса и частных клиентов. Современное оборудование, опытная команда, гибкие цены и внимательное отношение к каждому заказу!</p>
        </div>
      </div>
    </>
  );
}

export default Home; 