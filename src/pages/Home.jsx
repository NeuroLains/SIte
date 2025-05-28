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

const services = [
  { title: 'Визитки', price: 'от 0.95 ₽ за шт.', icon: CardIcon, desc: 'Печать визиток любых форматов, материалов и тиражей. Офсет, цифра, дизайнерские, пластиковые, металлические.' },
  { title: 'Листовки', price: 'от 2.2 ₽ за шт.', icon: LeafletIcon, desc: 'Цветные и черно-белые листовки любых форматов. Оперативная печать, разные виды бумаги.' },
  { title: 'Буклеты', price: 'от 4.1 ₽ за шт.', icon: BookletIcon, desc: 'Буклеты, каталоги, рекламные материалы. Складывание, фальцовка, любые форматы.' },
  { title: 'Афиши', price: 'от 7.8 ₽ за шт.', icon: PosterIcon, desc: 'Печать афиш и плакатов для мероприятий, рекламы, объявлений.' },
  { title: 'Флаеры', price: 'от 1.4 ₽ за шт.', icon: FlyerIcon, desc: 'Флаеры для акций, рекламы, событий. Ярко, быстро, недорого.' },
  { title: 'Наклейки', price: 'от 4.0 ₽ за шт.', icon: StickerIcon, desc: 'Печать наклеек любых форм и размеров. Самоклейка, винил, пленка.' },
  { title: 'Значки', price: 'от 25 ₽ за шт.', icon: BadgeIcon, desc: 'Закатные значки с вашим дизайном. Разные размеры, быстрая печать.' },
  { title: 'Футболки', price: 'от 200 ₽', icon: TshirtIcon, desc: 'Печать на футболках, толстовках, спецодежде. Сувенирная и корпоративная одежда.' },
  { title: 'Кружки', price: 'от 250 ₽', icon: MugIcon, desc: 'Печать на кружках, термокружках, сувенирной посуде.' },
  { title: 'Дизайн', price: 'от 100 ₽', icon: DesignIcon, desc: 'Разработка макетов, корректировка, фирменный стиль, дизайн-проекты.' },
  { title: 'Календари', price: 'от 3 ₽ за шт.', icon: CalendarIcon, desc: 'Квартальные, настольные, карманные календари. Офсет, цифра, индивидуальный дизайн.' },
  { title: 'Блокноты', price: 'от 21 ₽ за шт.', icon: NotebookIcon, desc: 'Блокноты, тетради, записные книжки с логотипом. Любые форматы и тиражи.' },
  { title: 'Ручки', price: 'от 15 ₽ за шт.', icon: PenIcon, desc: 'Печать на ручках, сувенирная продукция для бизнеса и мероприятий.' },
  { title: 'Розничные услуги', price: 'от 10 ₽', icon: StickerIcon, desc: 'Ксерокопия, распечатка, сканирование, ламинация, брошюровка, переплет, услуги для частных лиц.' },
  { title: 'Плакаты', price: 'от 15 ₽ за шт.', icon: PosterIcon, desc: 'Печать плакатов любых форматов для рекламы, мероприятий, оформления интерьера. Яркие цвета, качественная бумага, быстрая печать. Возможна ламинация и индивидуальный дизайн.' },
  { title: 'Папки', price: 'от 28 ₽ за шт.', icon: FolderIcon, desc: 'Фирменные папки для документов с логотипом вашей компании. Картон, ламинация, полноцветная печать, индивидуальный дизайн. Отлично подходят для презентаций и деловых встреч.' },
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
        <div className="catalog-grid">
          {services.map((s, i) => (
            <div className="catalog-card" key={i} onClick={() => setModal(s)} style={{ cursor: 'pointer' }}>
              <img src={s.icon} alt={s.title} className="catalog-icons" />
              <div className="catalog-title">{s.title}</div>
              <div className="catalog-price">{s.price}</div>
            </div>
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