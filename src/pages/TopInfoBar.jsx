import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/kolibri-logo.png';
import mailIcon from '../assets/icons/mail.svg';
import phoneIcon from '../assets/icons/phone.svg';
import whatsappIcon from '../assets/icons/whatsapp.svg';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
// Можно добавить svg-иконки Telegram/WhatsApp

function QuickOrderModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', desc: '', files: [] });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = e => setForm({ ...form, files: Array.from(e.target.files) });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('phone', form.phone);
      data.append('email', form.email);
      data.append('message', form.desc);
      if (form.files && form.files.length > 0) {
        form.files.forEach(f => data.append('files', f));
      }
      const res = await fetch('http://localhost:3001/api/quick-order', {
        method: 'POST',
        body: data
      });
      if (res.ok) {
        setStatus('Заявка успешно отправлена!');
        setForm({ name: '', phone: '', email: '', desc: '', files: [] });
      } else {
        setStatus('Ошибка отправки. Попробуйте позже.');
      }
    } catch (err) {
      setStatus('Ошибка отправки. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={e => e.stopPropagation()} style={{maxWidth: 500}}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 style={{marginTop:0}}>Быстрый заказ</h3>
        <form onSubmit={handleSubmit}>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <div style={{flex:1, minWidth:200}}>
              <input name="name" placeholder="Ваше имя" value={form.name} onChange={handleChange} required style={{width:'100%',marginBottom:8}} />
              <input name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} required style={{width:'100%',marginBottom:8}} />
              <input name="email" placeholder="Электронная почта" value={form.email} onChange={handleChange} required style={{width:'100%',marginBottom:8}} />
            </div>
            <div style={{flex:1, minWidth:200}}>
              <input type="file" name="files" multiple onChange={handleFile} style={{width:'100%',marginBottom:8}} />
            </div>
          </div>
          <textarea name="desc" placeholder="Описание заявки на печать" value={form.desc} onChange={handleChange} style={{width:'100%',margin:'8px 0'}} rows={3} />
          <div style={{fontSize:12, color:'#888', margin:'8px 0'}}>Я даю согласие на обработку персональных данных и принимаю условия сайта.</div>
          {status && <div style={{margin:'8px 0', color: status.includes('успешно') ? '#43d854' : 'crimson'}}>{status}</div>}
          <button type="submit" className="main-btn" style={{float:'right'}} disabled={loading}>{loading ? 'Отправка...' : 'Отправить'}</button>
        </form>
      </div>
    </div>
  );
}

// Функция транслитерации (рус -> латиница)
function translit(str) {
  const ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const en = ['a','b','v','g','d','e','e','zh','z','i','y','k','l','m','n','o','p','r','s','t','u','f','h','ts','ch','sh','sch','','y','','e','yu','ya'];
  return str.toLowerCase().split('').map(s => {
    const i = ru.indexOf(s);
    return i >= 0 ? en[i] : s;
  }).join('');
}
// Функция для генерации опечаток (раскладка)
function toEnLayout(str) {
  const ru = 'ёйцукенгшщзхъфывапролджэячсмитьбю';
  const en = '`qwertyuiop[]asdfghjkl;\zxcvbnm,.';
  return str.split('').map(s => {
    const i = ru.indexOf(s.toLowerCase());
    if (i >= 0) return en[i];
    return s;
  }).join('');
}
function toRuLayout(str) {
  const ru = 'ёйцукенгшщзхъфывапролджэячсмитьбю';
  const en = '`qwertyuiop[]asdfghjkl;\zxcvbnm,.';
  return str.split('').map(s => {
    const i = en.indexOf(s.toLowerCase());
    if (i >= 0) return ru[i];
    return s;
  }).join('');
}

const searchDataRaw = [
  { title: 'Визитки', to: '/polygraphy/business-cards', keywords: ['визитка', 'визитки', 'визитная карточка', 'business card', 'карточка', 'визиточная', 'визиточная карточка'] },
  { title: 'Листовки', to: '/polygraphy/flyers', keywords: ['листовка', 'листовки', 'flyer', 'лист', 'листовочка', 'флаер', 'флаеры'] },
  { title: 'Буклеты', to: '/polygraphy/booklets', keywords: ['буклет', 'буклеты', 'booklet', 'каталог', 'каталоги', 'брошюра', 'брошюры'] },
  { title: 'Блокноты', to: '/polygraphy/notebooks', keywords: ['блокнот', 'блокноты', 'notebook', 'тетрадь', 'тетради', 'записная книжка'] },
  { title: 'Конверты', to: '/polygraphy/envelopes', keywords: ['конверт', 'конверты', 'envelope', 'почтовый конверт'] },
  { title: 'Брошюры', to: '/polygraphy/brochures', keywords: ['брошюра', 'брошюры', 'brochure', 'каталог', 'каталоги', 'буклет', 'буклеты'] },
  { title: 'Плакаты', to: '/polygraphy/posters', keywords: ['плакат', 'плакаты', 'poster', 'афиша', 'афиши'] },
  { title: 'Чертежи', to: '/polygraphy/drawings', keywords: ['чертеж', 'чертежи', 'drawing', 'план', 'планы', 'схема', 'схемы'] },
  { title: 'Печать Фото', to: '/polygraphy/photo-print', keywords: ['фото', 'печать фото', 'фотопечать', 'photoprint', 'фотография', 'фотографии', 'фотоснимок'] },
  { title: 'Календари', to: '/polygraphy/calendars', keywords: ['календарь', 'календари', 'calendar', 'ежедневник', 'планер'] },
  { title: 'Наклейки', to: '/polygraphy/stickers', keywords: ['наклейка', 'наклейки', 'sticker', 'стикер', 'стикеры', 'этикетка', 'этикетки'] },
  { title: 'Стикеры', to: '/polygraphy/labels', keywords: ['стикер', 'стикеры', 'label', 'наклейка', 'наклейки', 'этикетка', 'этикетки'] },
  { title: 'Пластиковые Карты', to: '/polygraphy/plastic-cards', keywords: ['пластиковая карта', 'пластиковые карты', 'plastic card', 'карта', 'карты', 'пропуск', 'пропуска'] },
  { title: 'Ризография', to: '/polygraphy/risograph', keywords: ['ризография', 'risograph', 'оперативная печать', 'дупликатор'] },
  { title: 'Бланки', to: '/polygraphy/forms', keywords: ['бланк', 'бланки', 'form', 'форма', 'формы', 'бланк строгой отчетности'] },
  { title: 'Самокопирующиеся Бланки', to: '/polygraphy/carbonless-forms', keywords: ['самокопирующийся бланк', 'самокопирующиеся бланки', 'carbonless', 'копия', 'копии', 'самокопирка'] },
  { title: 'Значки', to: '/souvenirs/badges', keywords: ['значок', 'значки', 'badge', 'сувенир', 'значёк', 'значки на заказ'] },
  { title: '3Д Стикеры', to: '/souvenirs/3d-stickers', keywords: ['3d стикер', '3д стикеры', '3d sticker', 'трёхмерный стикер', 'объемный стикер'] },
  { title: 'Шоколадки', to: '/souvenirs/chocolate', keywords: ['шоколадка', 'шоколадки', 'chocolate', 'сладости', 'сувенирный шоколад'] },
  { title: 'Кружки', to: '/souvenirs/mugs', keywords: ['кружка', 'кружки', 'mug', 'чашка', 'чашки', 'сувенирная кружка'] },
  { title: 'Футболки', to: '/souvenirs/tshirts', keywords: ['футболка', 'футболки', 'tshirt', 'печать на футболках', 'сублимация', 'одежда', 'сувенирная одежда'] },
  { title: 'Бейсболки', to: '/souvenirs/caps', keywords: ['бейсболка', 'бейсболки', 'cap', 'кепка', 'кепки', 'головной убор'] },
  { title: 'Магниты', to: '/souvenirs/magnets', keywords: ['магнит', 'магниты', 'magnet', 'сувенирный магнит', 'магнитик'] },
  { title: 'Брелоки', to: '/souvenirs/keychains', keywords: ['брелок', 'брелоки', 'keychain', 'ключ', 'ключи', 'сувенирный брелок'] },
  { title: 'Шильды', to: '/souvenirs/plates', keywords: ['шильд', 'шильды', 'plate', 'табличка', 'таблички', 'металлическая табличка'] },
  { title: 'Печать на металле', to: '/souvenirs/metal-print', keywords: ['печать на металле', 'металл', 'metal print', 'сублимация', 'металлический', 'сувенир из металла'] },
  { title: 'Сумки', to: '/souvenirs/bags', keywords: ['сумка', 'сумки', 'bag', 'шоппер', 'эко-сумка', 'сувенирная сумка'] },
  { title: 'Рюкзаки', to: '/souvenirs/backpacks', keywords: ['рюкзак', 'рюкзаки', 'backpack', 'сумка', 'ранец', 'сувенирный рюкзак'] },
  { title: 'Пазлы', to: '/souvenirs/puzzles', keywords: ['пазл', 'пазлы', 'puzzle', 'головоломка', 'сувенирный пазл'] },
  { title: 'Коврики', to: '/souvenirs/mats', keywords: ['коврик', 'коврики', 'mat', 'ковер', 'ковры', 'коврик для мыши'] },
  { title: 'Ленты', to: '/souvenirs/ribbons', keywords: ['лента', 'ленты', 'ribbon', 'ткань', 'тканевые ленты', 'сувенирная лента'] },
  { title: 'Флаги', to: '/souvenirs/flags', keywords: ['флаг', 'флаги', 'flag', 'баннер', 'баннеры', 'сувенирный флаг'] },
  { title: 'Баннеры', to: '/advert/banners', keywords: ['баннер', 'баннеры', 'banner', 'флаг', 'флаги', 'наружная реклама'] },
  { title: 'Стенды', to: '/advert/stands', keywords: ['стенд', 'стенды', 'stand', 'выставка', 'выставочные стенды', 'рекламный стенд'] },
  { title: 'Таблички', to: '/advert/plates', keywords: ['табличка', 'таблички', 'plate', 'шильд', 'шильды', 'информационная табличка'] },
  { title: 'Roll UP', to: '/advert/rollup', keywords: ['roll up', 'ролл ап', 'мобильный стенд', 'rollup', 'роллап'] },
  { title: 'Press Wall', to: '/advert/presswall', keywords: ['press wall', 'пресс волл', 'фотозона', 'presswall', 'прессволл'] },
  { title: 'Х – образные стойки', to: '/advert/x-stands', keywords: ['х-стенд', 'х-образная стойка', 'x-stand', 'x-stands', 'стойка', 'рекламная стойка'] },
  { title: 'Таблички для оплаты', to: '/advert/payment-plates', keywords: ['табличка для оплаты', 'оплата', 'plate', 'табличка оплаты'] },
  { title: 'Адресные Таблички', to: '/advert/address-plates', keywords: ['адресная табличка', 'адресные таблички', 'address plate', 'табличка адрес'] },
  { title: 'Плоттерная Резка', to: '/advert/plotter-cut', keywords: ['плоттерная резка', 'резка', 'plotter cut', 'плоттер', 'резка пленки'] },
  { title: 'Разработка макетов', to: '/services/design', keywords: ['дизайн', 'макет', 'макеты', 'maket', 'design', 'макетирование', 'дизайн-проект'] },
  { title: 'Ламинирование', to: '/services/lamination', keywords: ['ламинирование', 'lamination', 'пленка', 'защита', 'ламинировать'] },
  { title: 'Брошюровка', to: '/services/binding', keywords: ['брошюровка', 'binding', 'скрепление', 'переплет', 'брошюровать'] },
  { title: 'Степлирование', to: '/services/stapling', keywords: ['степлирование', 'stapling', 'скрепка', 'скрепить', 'степлер'] },
  { title: 'Твердый Переплет', to: '/services/hardcover', keywords: ['твердый переплет', 'hardcover', 'книга', 'книги', 'жесткий переплет'] },
  { title: 'Изготовление Печатей', to: '/services/stamps', keywords: ['печать', 'печати', 'stamp', 'штамп', 'штампы', 'изготовление штампов'] },
  { title: 'Брендирование', to: '/services/branding', keywords: ['брендирование', 'branding', 'бренд', 'логотип', 'брендировать'] },
];

// Генерируем расширенный массив с транслитом и опечатками
const searchData = searchDataRaw.map(item => {
  const allKeywords = new Set(item.keywords);
  item.keywords.forEach(word => {
    allKeywords.add(translit(word));
    allKeywords.add(toEnLayout(word));
    allKeywords.add(toRuLayout(word));
  });
  // Добавим транслит и опечатки для title
  allKeywords.add(translit(item.title));
  allKeywords.add(toEnLayout(item.title));
  allKeywords.add(toRuLayout(item.title));
  return { ...item, keywords: Array.from(allKeywords) };
});

const fuse = new Fuse(searchData, {
  keys: ['title', 'keywords'],
  threshold: 0.38, // чувствительность: 0 — строгое совпадение, 1 — очень нестрогое
  minMatchCharLength: 2,
  includeScore: true,
});

export default function TopInfoBar() {
  const [modal, setModal] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (search.trim().length > 0) {
      const fuseResults = fuse.search(search.trim());
      const results = fuseResults.map(r => r.item);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  }, [search]);

  const handleResultClick = (to) => {
    setShowResults(false);
    setSearch('');
    navigate(to);
  };

  // Закрытие меню при клике вне
  useEffect(() => {
    function handleClickOutside(e) {
      const menu = document.querySelector('.catalog-dropdown');
      const btn = document.querySelector('.catalog-btn');
      if (menu && !menu.contains(e.target) && btn && !btn.contains(e.target)) {
        setCatalogOpen(false);
      }
    }
    if (catalogOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [catalogOpen]);

  return (
    <div style={{
      background: 'linear-gradient(90deg, #2196f3 0%, #1976d2 55%, #0d47a1 100%)',
      borderBottom:'1.5px solid rgba(255,255,255,0.1)',
      minHeight:'72px',
      width:'100%',
      left:0,
      top:0,
      zIndex:100,
      position:'sticky',
      padding:0,
      margin:0,
      boxShadow: '0 2px 12px rgba(25,118,210,0.15)'
    }}>
      {/* Верхняя строка: логотип — Каталог+поиск — контакты/соцсети/кнопка */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'0 32px', height:72, boxSizing:'border-box'}}>
        {/* Логотип и название */}
        <Link to="/" style={{textDecoration: 'none'}}>
          <div style={{display:'flex', alignItems:'center', gap:12, minWidth:220}}>
            <img src={logo} alt="Колибрия" style={{width:56, height:56, borderRadius:16}} />
            <div style={{fontWeight:700, fontSize:28, color:'#fff', letterSpacing:1, lineHeight:1.1}}>Колибрия<br /><span style={{fontWeight:400, fontSize:14, color:'#fff', marginTop:2, display:'block', lineHeight:1.1}}>типография</span></div>
          </div>
        </Link>
        {/* Каталог + Поиск */}
        <div style={{display:'flex', alignItems:'center', flex:1, maxWidth:700, margin:'0 32px'}}>
          <div style={{position:'relative', marginRight:18}}>
            <button
              className="catalog-btn"
              onClick={() => setCatalogOpen(v => !v)}
              aria-expanded={catalogOpen}
              aria-haspopup="true"
              type="button"
            >
              <i className="fas fa-bars"></i>
              Каталог
            </button>
            {catalogOpen && (
              <div className="catalog-dropdown">
                {/* Полиграфия */}
                <div className="catalog-menu-item">
                  <i className="fas fa-print"></i>
                  <Link to="/polygraphy" style={{flex:1, textDecoration:'none', color:'inherit'}} onClick={() => setCatalogOpen(false)}>Полиграфия</Link>
                  <span className="arrow-icon">›</span>
                  <div className="catalog-submenu">
                    <ul className="submenu-list">
                      <li><Link to="/polygraphy/business-cards" className="submenu-link" onClick={() => setCatalogOpen(false)}>Визитки</Link></li>
                      <li><Link to="/polygraphy/flyers" className="submenu-link" onClick={() => setCatalogOpen(false)}>Листовки</Link></li>
                      <li><Link to="/polygraphy/booklets" className="submenu-link" onClick={() => setCatalogOpen(false)}>Буклеты</Link></li>
                      <li><Link to="/polygraphy/notebooks" className="submenu-link" onClick={() => setCatalogOpen(false)}>Блокноты</Link></li>
                      <li><Link to="/polygraphy/envelopes" className="submenu-link" onClick={() => setCatalogOpen(false)}>Конверты</Link></li>
                      <li><Link to="/polygraphy/brochures" className="submenu-link" onClick={() => setCatalogOpen(false)}>Брошюры</Link></li>
                      <li><Link to="/polygraphy/posters" className="submenu-link" onClick={() => setCatalogOpen(false)}>Плакаты</Link></li>
                      <li><Link to="/polygraphy/drawings" className="submenu-link" onClick={() => setCatalogOpen(false)}>Чертежи</Link></li>
                      <li><Link to="/polygraphy/photo-print" className="submenu-link" onClick={() => setCatalogOpen(false)}>Печать Фото</Link></li>
                      <li><Link to="/polygraphy/calendars" className="submenu-link" onClick={() => setCatalogOpen(false)}>Календари</Link></li>
                      <li><Link to="/polygraphy/stickers" className="submenu-link" onClick={() => setCatalogOpen(false)}>Наклейки</Link></li>
                      <li><Link to="/polygraphy/labels" className="submenu-link" onClick={() => setCatalogOpen(false)}>Стикеры</Link></li>
                      <li><Link to="/polygraphy/plastic-cards" className="submenu-link" onClick={() => setCatalogOpen(false)}>Пластиковые Карты</Link></li>
                      <li><Link to="/polygraphy/risograph" className="submenu-link" onClick={() => setCatalogOpen(false)}>Ризография</Link></li>
                      <li><Link to="/polygraphy/forms" className="submenu-link" onClick={() => setCatalogOpen(false)}>Бланки</Link></li>
                      <li><Link to="/polygraphy/carbonless-forms" className="submenu-link" onClick={() => setCatalogOpen(false)}>Самокопирующиеся Бланки</Link></li>
                    </ul>
                  </div>
                </div>
                {/* Сувенирная продукция */}
                <div className="catalog-menu-item">
                  <i className="fas fa-gift"></i>
                  <Link to="/souvenirs" style={{flex:1, textDecoration:'none', color:'inherit'}} onClick={() => setCatalogOpen(false)}>Сувенирная продукция</Link>
                  <span className="arrow-icon">›</span>
                  <div className="catalog-submenu">
                    <ul className="submenu-list">
                      <li><Link to="/souvenirs/badges" className="submenu-link" onClick={() => setCatalogOpen(false)}>Значки</Link></li>
                      <li><Link to="/souvenirs/3d-stickers" className="submenu-link" onClick={() => setCatalogOpen(false)}>3Д Стикеры</Link></li>
                      <li><Link to="/souvenirs/chocolate" className="submenu-link" onClick={() => setCatalogOpen(false)}>Шоколадки</Link></li>
                      <li><Link to="/souvenirs/mugs" className="submenu-link" onClick={() => setCatalogOpen(false)}>Кружки</Link></li>
                      <li><Link to="/souvenirs/tshirts" className="submenu-link" onClick={() => setCatalogOpen(false)}>Футболки</Link></li>
                      <li><Link to="/souvenirs/caps" className="submenu-link" onClick={() => setCatalogOpen(false)}>Бейсболки</Link></li>
                      <li><Link to="/souvenirs/magnets" className="submenu-link" onClick={() => setCatalogOpen(false)}>Магниты</Link></li>
                      <li><Link to="/souvenirs/keychains" className="submenu-link" onClick={() => setCatalogOpen(false)}>Брелоки</Link></li>
                      <li><Link to="/souvenirs/plates" className="submenu-link" onClick={() => setCatalogOpen(false)}>Шильды</Link></li>
                      <li><Link to="/souvenirs/metal-print" className="submenu-link" onClick={() => setCatalogOpen(false)}>Печать на металле</Link></li>
                      <li><Link to="/souvenirs/bags" className="submenu-link" onClick={() => setCatalogOpen(false)}>Сумки</Link></li>
                      <li><Link to="/souvenirs/backpacks" className="submenu-link" onClick={() => setCatalogOpen(false)}>Рюкзаки</Link></li>
                      <li><Link to="/souvenirs/puzzles" className="submenu-link" onClick={() => setCatalogOpen(false)}>Пазлы</Link></li>
                      <li><Link to="/souvenirs/mats" className="submenu-link" onClick={() => setCatalogOpen(false)}>Коврики</Link></li>
                      <li><Link to="/souvenirs/ribbons" className="submenu-link" onClick={() => setCatalogOpen(false)}>Ленты</Link></li>
                      <li><Link to="/souvenirs/flags" className="submenu-link" onClick={() => setCatalogOpen(false)}>Флаги</Link></li>
                    </ul>
                  </div>
                </div>
                {/* Рекламные конструкции */}
                <div className="catalog-menu-item">
                  <i className="fas fa-building"></i>
                  <Link to="/advert" style={{flex:1, textDecoration:'none', color:'inherit'}} onClick={() => setCatalogOpen(false)}>Рекламные конструкции</Link>
                  <span className="arrow-icon">›</span>
                  <div className="catalog-submenu">
                    <ul className="submenu-list">
                      <li><Link to="/advert/banners" className="submenu-link" onClick={() => setCatalogOpen(false)}>Баннеры</Link></li>
                      <li><Link to="/advert/stands" className="submenu-link" onClick={() => setCatalogOpen(false)}>Стенды</Link></li>
                      <li><Link to="/advert/plates" className="submenu-link" onClick={() => setCatalogOpen(false)}>Таблички</Link></li>
                      <li><Link to="/advert/rollup" className="submenu-link" onClick={() => setCatalogOpen(false)}>Roll UP</Link></li>
                      <li><Link to="/advert/presswall" className="submenu-link" onClick={() => setCatalogOpen(false)}>Press Wall</Link></li>
                      <li><Link to="/advert/x-stands" className="submenu-link" onClick={() => setCatalogOpen(false)}>Х – образные стойки</Link></li>
                      <li><Link to="/advert/payment-plates" className="submenu-link" onClick={() => setCatalogOpen(false)}>Таблички для оплаты</Link></li>
                      <li><Link to="/advert/address-plates" className="submenu-link" onClick={() => setCatalogOpen(false)}>Адресные Таблички</Link></li>
                      <li><Link to="/advert/plotter-cut" className="submenu-link" onClick={() => setCatalogOpen(false)}>Плоттерная Резка</Link></li>
                    </ul>
                  </div>
                </div>
                {/* Услуги */}
                <div className="catalog-menu-item">
                  <i className="fas fa-tools"></i>
                  <Link to="/services" style={{flex:1, textDecoration:'none', color:'inherit'}} onClick={() => setCatalogOpen(false)}>Услуги</Link>
                  <span className="arrow-icon">›</span>
                  <div className="catalog-submenu">
                    <ul className="submenu-list">
                      <li><Link to="/services/design" className="submenu-link" onClick={() => setCatalogOpen(false)}>Разработка макетов</Link></li>
                      <li><Link to="/services/lamination" className="submenu-link" onClick={() => setCatalogOpen(false)}>Ламинирование</Link></li>
                      <li><Link to="/services/binding" className="submenu-link" onClick={() => setCatalogOpen(false)}>Брошюровка</Link></li>
                      <li><Link to="/services/stapling" className="submenu-link" onClick={() => setCatalogOpen(false)}>Степлирование</Link></li>
                      <li><Link to="/services/hardcover" className="submenu-link" onClick={() => setCatalogOpen(false)}>Твердый Переплет</Link></li>
                      <li><Link to="/services/stamps" className="submenu-link" onClick={() => setCatalogOpen(false)}>Изготовление Печатей</Link></li>
                      <li><Link to="/services/branding" className="submenu-link" onClick={() => setCatalogOpen(false)}>Брендирование</Link></li>
                    </ul>
                  </div>
                </div>
                {/* Контакты */}
                <div className="catalog-menu-item">
                  <i className="fas fa-address-book"></i>
                  <Link to="/contacts" style={{flex:1, textDecoration:'none', color:'inherit'}} onClick={() => setCatalogOpen(false)}>Контакты</Link>
                </div>
              </div>
            )}
          </div>
          <form style={{flex:1, minWidth:0, position:'relative', display:'flex', alignItems:'center'}} onSubmit={e=>e.preventDefault()}>
            <input
              type="text"
              placeholder="Поиск по сайту…"
              style={{width:'100%', padding:'12px 48px 12px 20px', borderRadius: 24, border:'none', outline:'none', fontSize:17, background:'#fff', color:'#222', boxShadow:'0 2px 8px #0002'}}
              value={search}
              onChange={e => setSearch(e.target.value)}
              onFocus={() => search && setShowResults(true)}
              autoComplete="off"
            />
            <span style={{position:'absolute', right:18, top:'50%', transform:'translateY(-50%)', color:'#888', fontSize:22, pointerEvents:'none'}}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#888" strokeWidth="2"/><path d="M20 20L17 17" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            {showResults && (
              <div style={{
                position: 'absolute',
                top: '110%',
                left: 0,
                right: 0,
                background: '#fff',
                borderRadius: 12,
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                zIndex: 2000,
                padding: '8px 0',
                maxHeight: 320,
                overflowY: 'auto',
                border: '1px solid #e0e0e0',
                marginTop: 4
              }}>
                {searchResults.length === 0 ? (
                  <div style={{padding: '12px 24px', color: '#888', fontSize: 16}}>Ничего не найдено</div>
                ) : (
                  searchResults.map((item, idx) => (
                    <div
                      key={idx}
                      style={{padding: '12px 24px', cursor: 'pointer', fontSize: 16, color: '#1976d2'}}
                      onMouseDown={() => handleResultClick(item.to)}
                    >
                      {item.title}
                    </div>
                  ))
                )}
              </div>
            )}
          </form>
        </div>
        {/* Контакты, соцсети, кнопка */}
        <div style={{display:'flex', alignItems:'center', gap:18, minWidth:320, justifyContent:'flex-end'}}>
          <span style={{display:'flex', alignItems:'center', gap:6}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{width:22, height:22}}>
              <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" fill="#fff"/>
              <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" fill="#fff"/>
            </svg>
            <span style={{color:'#fff', fontWeight:500, fontSize:17}}>+7 952 774-33-33</span>
          </span>
            <span style={{display:'flex', alignItems:'center', gap:6}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{width:22, height:22}}>
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" fill="#fff"/>
            </svg>
            <a href="mailto:eis-admin@bk.ru" style={{color:'#fff', fontWeight:500, fontSize:17, textDecoration:'none'}}>eis-admin@bk.ru</a>
            </span>
          <div className="header-socials" style={{gap:8}}>
            <a href="https://vk.com/kolibriya_nn" target="_blank" rel="noopener noreferrer" className="header-social-icon vk" title="ВКонтакте" style={{background:'#fff2', color:'#fff'}}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width:28, height:28}}><path d="M12.01 17.5c-4.7 0-7.41-3.23-7.52-8.66h2.53c.07 3.89 1.78 5.52 3.13 5.82V8.84h2.27v2.7c1.33-.14 2.73-1.68 3.2-2.7h2.27c-.36 1.6-1.82 3.14-2.89 3.7 1.07.41 2.68 1.7 3.32 3.96h-2.6c-.41-1.23-1.43-2.36-3.19-2.5v2.5h-.01v.01z"/></svg>
            </a>
            <a href="https://wa.me/79527743333" target="_blank" rel="noopener noreferrer" className="header-social-icon whatsapp" title="WhatsApp" style={{background:'#fff2', color:'#fff'}}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6.5c-4.14 0-7.5 2.93-7.5 6.54 0 1.24.44 2.41 1.19 3.41L6 22l5.01-1.63c.95.3 1.97.47 2.99.47 4.14 0 7.5-2.93 7.5-6.54S18.14 6.5 14 6.5Z" stroke="#fff" strokeWidth="2" fill="none"/>
                <path d="M18.1 16.1c-.23-.11-1.36-.67-1.57-.74-.21-.08-.36-.12-.5.13-.14.25-.57.82-.7.99-.13.17-.25.19-.47.08-.22-.11-.93-.34-1.77-1.13-.67-.6-1.13-1.34-1.27-1.56-.13-.22-.01-.34.1-.45.1-.1.23-.27.34-.41.11-.14.15-.25.23-.41.08-.16.04-.3-.02-.41-.07-.12-.54-1.29-.74-1.76-.2-.47-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.41.07-.63.34-.22.27-.87.98-.87 2.37 0 1.39 1.02 2.74 1.16 2.93.14.19 2.01 3.07 4.89 4.18.68.29 1.22.47 1.63.6.68.22 1.3.19 1.78.12.54-.08 1.65-.68 1.89-1.34.24-.66.24-1.23.17-1.34-.07-.11-.26-.19-.54-.32Z" fill="#fff"/>
                </svg>
              </a>
            <a href="https://t.me/+79527743333" target="_blank" rel="noopener noreferrer" className="header-social-icon telegram" title="Telegram" style={{background:'#fff2', color:'#fff'}}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width:24, height:24}}><path d="M9.04 16.62l-.39 3.47c.56 0 .8-.24 1.09-.53l2.62-2.49 5.44 3.97c1 .55 1.72.26 1.97-.92l3.58-16.7c.33-1.53-.56-2.13-1.53-1.77L2.2 9.3c-1.5.6-1.48 1.45-.27 1.84l4.6 1.44 10.7-6.74c.5-.33.96-.15.58.21z"/></svg>
              </a>
          </div>
          <div style={{color:'#fff', fontWeight:500, fontSize:17, marginLeft:8, whiteSpace:'nowrap'}}>Пн–Пт 9:00–18:00</div>
          <button 
            className="quick-order-btn"
            onClick={()=>setModal(true)}
          >
            Быстрый заказ
          </button>
        </div>
      </div>
      <QuickOrderModal open={modal} onClose={()=>setModal(false)} />
    </div>
  );
} 