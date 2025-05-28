import React from 'react';
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

export default function Services() {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      <h1 style={{ color: '#2196f3', marginBottom: 32 }}>Каталог продукции</h1>
      <div className="catalog-grid">
        {services.map((s, i) => (
          <div className="catalog-card" key={i} style={{ cursor: 'pointer' }}>
            <img src={s.icon} alt={s.title} className="catalog-icons" />
            <div className="catalog-title">{s.title}</div>
            <div className="catalog-price">{s.price}</div>
            <div className="catalog-desc" style={{fontSize:'0.98rem', color:'#444', marginTop:8}}>{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 