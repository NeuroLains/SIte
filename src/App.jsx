import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Printing from './pages/Printing';
import Souvenirs from './pages/Souvenirs';
import Blanks from './pages/Blanks';
import Badges from './pages/Badges';
import logo from './assets/kolibri-logo.png';
import mailIcon from './assets/icons/mail.svg';
import phoneIcon from './assets/icons/phone.svg';
import TopInfoBar from './pages/TopInfoBar';
import ProductPage from './pages/ProductPage';
import StubPage from './pages/StubPage';
import Polygraphy from './pages/Polygraphy';
import Advert from './pages/Advert';
import './App.css';

function App() {
  return (
    <Router>
      <TopInfoBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polygraphy" element={<Polygraphy />} />
        <Route path="/polygraphy/business-cards" element={<StubPage title='Визитки' />} />
        <Route path="/polygraphy/flyers" element={<StubPage title='Листовки' />} />
        <Route path="/polygraphy/booklets" element={<StubPage title='Буклеты' />} />
        <Route path="/polygraphy/books" element={<StubPage title='Книги' />} />
        <Route path="/polygraphy/notebooks" element={<StubPage title='Блокноты' />} />
        <Route path="/polygraphy/envelopes" element={<StubPage title='Конверты' />} />
        <Route path="/polygraphy/brochures" element={<StubPage title='Брошюры' />} />
        <Route path="/polygraphy/posters" element={<StubPage title='Плакаты' />} />
        <Route path="/polygraphy/drawings" element={<StubPage title='Чертежи' />} />
        <Route path="/polygraphy/photo-print" element={<StubPage title='Печать Фото' />} />
        <Route path="/polygraphy/calendars" element={<StubPage title='Календари' />} />
        <Route path="/polygraphy/stickers" element={<StubPage title='Наклейки' />} />
        <Route path="/polygraphy/labels" element={<StubPage title='Стикеры' />} />
        <Route path="/polygraphy/plastic-cards" element={<StubPage title='Пластиковые Карты' />} />
        <Route path="/polygraphy/risograph" element={<StubPage title='Ризография' />} />
        <Route path="/polygraphy/forms" element={<StubPage title='Бланки' />} />
        <Route path="/polygraphy/carbonless-forms" element={<StubPage title='Самокопирующиеся Бланки' />} />

        <Route path="/souvenirs" element={<Souvenirs />} />
        <Route path="/souvenirs/badges" element={<StubPage title='Значки' />} />
        <Route path="/souvenirs/3d-stickers" element={<StubPage title='3Д Стикеры' />} />
        <Route path="/souvenirs/chocolate" element={<StubPage title='Шоколадки' />} />
        <Route path="/souvenirs/mugs" element={<StubPage title='Кружки' />} />
        <Route path="/souvenirs/tshirts" element={<StubPage title='Футболки' />} />
        <Route path="/souvenirs/caps" element={<StubPage title='Бейсболки' />} />
        <Route path="/souvenirs/magnets" element={<StubPage title='Магниты' />} />
        <Route path="/souvenirs/keychains" element={<StubPage title='Брелоки' />} />
        <Route path="/souvenirs/plates" element={<StubPage title='Шильды' />} />
        <Route path="/souvenirs/metal-print" element={<StubPage title='Печать на металле' />} />
        <Route path="/souvenirs/bags" element={<StubPage title='Сумки' />} />
        <Route path="/souvenirs/backpacks" element={<StubPage title='Рюкзаки' />} />
        <Route path="/souvenirs/puzzles" element={<StubPage title='Пазлы' />} />
        <Route path="/souvenirs/mats" element={<StubPage title='Коврики' />} />
        <Route path="/souvenirs/ribbons" element={<StubPage title='Ленты' />} />
        <Route path="/souvenirs/flags" element={<StubPage title='Флаги' />} />

        <Route path="/advert" element={<Advert />} />
        <Route path="/advert/banners" element={<StubPage title='Баннеры' />} />
        <Route path="/advert/stands" element={<StubPage title='Стенды' />} />
        <Route path="/advert/plates" element={<StubPage title='Таблички' />} />
        <Route path="/advert/rollup" element={<StubPage title='Roll UP' />} />
        <Route path="/advert/presswall" element={<StubPage title='Press Wall' />} />
        <Route path="/advert/x-stands" element={<StubPage title='Х – образные стойки' />} />
        <Route path="/advert/payment-plates" element={<StubPage title='Таблички для оплаты' />} />
        <Route path="/advert/address-plates" element={<StubPage title='Адресные Таблички' />} />
        <Route path="/advert/plotter-cut" element={<StubPage title='Плоттерная Резка' />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/design" element={<StubPage title='Разработка макетов' />} />
        <Route path="/services/lamination" element={<StubPage title='Ламинирование' />} />
        <Route path="/services/binding" element={<StubPage title='Брошюровка' />} />
        <Route path="/services/stapling" element={<StubPage title='Степлирование' />} />
        <Route path="/services/hardcover" element={<StubPage title='Твердый Переплет' />} />
        <Route path="/services/stamps" element={<StubPage title='Изготовление Печатей' />} />
        <Route path="/services/branding" element={<StubPage title='Брендирование' />} />

        <Route path="/contacts" element={<Contacts />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
