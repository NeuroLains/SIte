import React from 'react';
import { useParams } from 'react-router-dom';
import CardIcon from '../assets/icons/card.svg';
import BagIcon from '../assets/icons/bag.svg';
import TagIcon from '../assets/icons/tag.svg';
import EnvelopeIcon from '../assets/icons/envelope.svg';
import StickerIcon from '../assets/icons/sticker.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import InviteIcon from '../assets/icons/invite.svg';
import BookletIcon from '../assets/icons/booklet.svg';
import NotebookIcon from '../assets/icons/notebook.svg';
import LeafletIcon from '../assets/icons/booklet.svg';
import PosterIcon from '../assets/icons/poster.svg';
import FlyerIcon from '../assets/icons/booklet.svg';
import BadgeIcon from '../assets/icons/tag.svg';
import TshirtIcon from '../assets/icons/bag.svg';
import MugIcon from '../assets/icons/bag.svg';
import DesignIcon from '../assets/icons/tag.svg';
import PenIcon from '../assets/icons/tag.svg';
import FolderIcon from '../assets/icons/folder.svg';

const products = [
  { title: 'Визитки', img: CardIcon, desc: 'Печать визиток любых форматов, материалов и тиражей. Офсет, цифра, дизайнерские, пластиковые, металлические. Минимальная цена: от 0.95 ₽ за шт.' },
  { title: 'Листовки', img: LeafletIcon, desc: 'Цветные и черно-белые листовки любых форматов. Оперативная печать, разные виды бумаги. от 2.2 ₽ за шт.' },
  { title: 'Буклеты', img: BookletIcon, desc: 'Буклеты, каталоги, рекламные материалы. Складывание, фальцовка, любые форматы. от 4.1 ₽ за шт.' },
  { title: 'Афиши', img: PosterIcon, desc: 'Печать афиш и плакатов для мероприятий, рекламы, объявлений. от 7.8 ₽ за шт.' },
  { title: 'Флаеры', img: FlyerIcon, desc: 'Флаеры для акций, рекламы, событий. Ярко, быстро, недорого. от 1.4 ₽ за шт.' },
  { title: 'Наклейки', img: StickerIcon, desc: 'Печать наклеек любых форм и размеров. Самоклейка, винил, пленка. от 4.0 ₽ за шт.' },
  { title: 'Значки', img: BadgeIcon, desc: 'Закатные значки с вашим дизайном. Разные размеры, быстрая печать. от 25 ₽ за шт.' },
  { title: 'Футболки', img: TshirtIcon, desc: 'Печать на футболках, толстовках, спецодежде. Сувенирная и корпоративная одежда. от 200 ₽.' },
  { title: 'Кружки', img: MugIcon, desc: 'Печать на кружках, термокружках, сувенирной посуде. от 250 ₽.' },
  { title: 'Дизайн', img: DesignIcon, desc: 'Разработка макетов, корректировка, фирменный стиль, дизайн-проекты. от 100 ₽.' },
  { title: 'Календари', img: CalendarIcon, desc: 'Квартальные, настольные, карманные календари. Офсет, цифра, индивидуальный дизайн. от 3 ₽ за шт.' },
  { title: 'Блокноты', img: NotebookIcon, desc: 'Блокноты, тетради, записные книжки с логотипом. Любые форматы и тиражи. от 21 ₽ за шт.' },
  { title: 'Ручки', img: PenIcon, desc: 'Печать на ручках, сувенирная продукция для бизнеса и мероприятий. от 15 ₽ за шт.' },
  { title: 'Розничные услуги', img: StickerIcon, desc: 'Ксерокопия, распечатка, сканирование, ламинация, брошюровка, переплет, услуги для частных лиц. от 10 ₽.' },
  { title: 'Плакаты', img: PosterIcon, desc: 'Печать плакатов любых форматов для рекламы, мероприятий, оформления интерьера. Яркие цвета, качественная бумага, быстрая печать. Возможна ламинация и индивидуальный дизайн. Минимальный тираж — 1 шт.' },
  { title: 'Папки', img: FolderIcon, desc: 'Фирменные папки для документов с логотипом вашей компании. Картон, ламинация, полноцветная печать, индивидуальный дизайн. Отлично подходят для презентаций и деловых встреч. Минимальный тираж — 10 шт.' },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products[+id];
  if (!product) {
    return <div style={{padding:32}}><h2>Продукт не найден</h2><p>Такой продукции нет в каталоге.</p></div>;
  }
  if (product.title === 'Визитки') {
    return (
      <div style={{padding:32, maxWidth:800, margin:'0 auto', textAlign:'center'}}>
        <img src={product.img} alt={product.title} style={{width:160, height:120, objectFit:'cover', borderRadius:16, marginBottom:24, boxShadow:'0 2px 12px #b39ddb33'}} />
        <h2 style={{color:'#2196f3', fontWeight:700, marginBottom:16}}>Визитки</h2>
        <p style={{fontSize:'1.15rem', color:'#333', lineHeight:1.6, marginBottom:18}}>
          Визитки — это лицо вашей компании. Мы печатаем визитки любых форматов, на плотной бумаге, с возможностью ламинации, тиснения, фигурной вырубки. Ярко, современно, быстро!<br/><br/>
          <b>Виды визиток:</b> стандартные, дизайнерские, с ламинацией, с тиснением, фигурные, на пластике.<br/>
          <b>Срок изготовления:</b> от 1 дня.
        </p>
        <ul style={{margin:'0 0 18px 0', color:'#1976d2', fontSize:'1.08rem', textAlign:'left', maxWidth:420, marginLeft:'auto', marginRight:'auto'}}>
          <li>Печать от 100 шт. за 1 день</li>
          <li>Плотная бумага 300-350 г/м²</li>
          <li>Ламинация, тиснение, фигурная вырубка</li>
          <li>Дизайн под ваш бренд</li>
        </ul>
        <div style={{background:'#e8fbe9', borderRadius:12, padding:'16px 24px', margin:'18px 0', color:'#388e3c', fontWeight:600, fontSize:'1.13rem', display:'inline-block'}}>
          <div style={{marginBottom:6}}>Цены на визитки:</div>
          <table style={{width:'100%', fontSize:'1.08rem', color:'#1976d2'}}>
            <tbody>
              <tr><td style={{padding:'4px 12px'}}>100 шт</td><td style={{padding:'4px 12px'}}><b>950 ₽</b></td></tr>
              <tr><td style={{padding:'4px 12px'}}>500 шт</td><td style={{padding:'4px 12px'}}><b>3900 ₽</b></td></tr>
              <tr><td style={{padding:'4px 12px'}}>1000 шт</td><td style={{padding:'4px 12px'}}><b>6900 ₽</b></td></tr>
            </tbody>
          </table>
        </div>
        <div style={{margin:'18px 0'}}>
          <img src={product.img} alt="Пример визитки" style={{width:180, borderRadius:12, boxShadow:'0 2px 8px #b39ddb33'}} />
        </div>
        <button className="main-btn" style={{marginTop:12, minWidth:180}} onClick={()=>window.location.href='/contacts'}>Заказать визитки</button>
      </div>
    );
  }
  return (
    <div style={{padding:32, maxWidth:600, margin:'0 auto', textAlign:'center'}}>
      <img src={product.img} alt={product.title} style={{width:120, height:120, marginBottom:24}} />
      <h2 style={{color:'#2196f3', fontWeight:700, marginBottom:16}}>{product.title}</h2>
      <p style={{fontSize:'1.15rem', color:'#333', lineHeight:1.6}}>{product.desc}</p>
    </div>
  );
} 