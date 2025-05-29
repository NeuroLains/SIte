import React, { useState } from 'react';
import logo from '../assets/kolibri-logo.png';
import mailIcon from '../assets/icons/mail.svg';
import phoneIcon from '../assets/icons/phone.svg';
import whatsappIcon from '../assets/icons/whatsapp.svg';
import { NavLink } from 'react-router-dom';
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

export default function TopInfoBar() {
  const [modal, setModal] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  return (
    <div style={{
      background: 'linear-gradient(90deg, #c72aff 0%, #e040fb 50%, #ff4eb5 100%)',
      borderBottom:'1.5px solid #e3eaf3',
      minHeight:'72px',
      width:'100%',
      left:0,
      top:0,
      zIndex:100,
      position:'sticky',
      padding:0,
      margin:0
    }}>
      {/* Верхняя строка: логотип — Каталог+поиск — контакты/соцсети/кнопка */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'0 32px', height:72, boxSizing:'border-box'}}>
        {/* Логотип и название */}
        <div style={{display:'flex', alignItems:'center', gap:12, minWidth:220}}>
          <img src={logo} alt="Колибрия" style={{width:56, height:56, borderRadius:16}} />
          <div style={{fontWeight:700, fontSize:28, color:'#fff', letterSpacing:1, lineHeight:1.1}}>Колибрия<br /><span style={{fontWeight:400, fontSize:14, color:'#fff', marginTop:2, display:'block', lineHeight:1.1}}>типография</span></div>
        </div>
        {/* Каталог + Поиск */}
        <div style={{display:'flex', alignItems:'center', flex:1, maxWidth:700, margin:'0 32px'}}>
          <div style={{position:'relative', marginRight:18}}>
            <button
              style={{
                background:'#fff', color:'#c72aff', fontWeight:700, fontSize:17, border:'none', borderRadius:18, padding:'10px 28px 10px 44px', cursor:'pointer', boxShadow:'0 2px 8px #0001', position:'relative', display:'flex', alignItems:'center', transition:'background 0.2s'}}
              onClick={()=>setCatalogOpen(v=>!v)}
              onBlur={()=>setTimeout(()=>setCatalogOpen(false), 150)}
            >
              <span style={{position:'absolute', left:16, top:'50%', transform:'translateY(-50%)', fontSize:22}}>☰</span>
              Каталог
            </button>
            {catalogOpen && (
              <div style={{position:'absolute', left:0, top:'110%', background:'#fff', color:'#222', borderRadius:16, boxShadow:'0 4px 24px #0002', minWidth:200, zIndex:1000, padding:'10px 0'}}>
                <a href="/" style={{display:'block', padding:'10px 28px', color:'#c72aff', fontWeight:600, textDecoration:'none', fontSize:16}}>Главная</a>
                <a href="/printing" style={{display:'block', padding:'10px 28px', color:'#c72aff', fontWeight:600, textDecoration:'none', fontSize:16}}>Полиграфия</a>
                <a href="/souvenirs" style={{display:'block', padding:'10px 28px', color:'#c72aff', fontWeight:600, textDecoration:'none', fontSize:16}}>Сувениры</a>
                <a href="/blanks" style={{display:'block', padding:'10px 28px', color:'#c72aff', fontWeight:600, textDecoration:'none', fontSize:16}}>Бланки</a>
                <a href="/badges" style={{display:'block', padding:'10px 28px', color:'#c72aff', fontWeight:600, textDecoration:'none', fontSize:16}}>Закатные значки</a>
                <a href="/contacts" style={{display:'block', padding:'10px 28px', color:'#c72aff', fontWeight:600, textDecoration:'none', fontSize:16}}>Контакты</a>
              </div>
            )}
          </div>
          <form style={{flex:1, minWidth:0, position:'relative', display:'flex', alignItems:'center'}} onSubmit={e=>e.preventDefault()}>
            <input type="text" placeholder="Поиск по сайту…" style={{width:'100%', padding:'12px 48px 12px 20px', borderRadius: 24, border:'none', outline:'none', fontSize:17, background:'#fff', color:'#222', boxShadow:'0 2px 8px #0002'}} />
            <span style={{position:'absolute', right:18, top:'50%', transform:'translateY(-50%)', color:'#888', fontSize:22, pointerEvents:'none'}}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#888" strokeWidth="2"/><path d="M20 20L17 17" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
          </form>
        </div>
        {/* Контакты, соцсети, кнопка */}
        <div style={{display:'flex', alignItems:'center', gap:18, minWidth:320, justifyContent:'flex-end'}}>
          <span style={{display:'flex', alignItems:'center', gap:6}}>
            <img src={phoneIcon} alt="phone" style={{width:20, filter:'invert(1)', opacity:0.95}} />
            <span style={{color:'#fff', fontWeight:500, fontSize:16}}>+7 952 774-33-33</span>
          </span>
          <span style={{display:'flex', alignItems:'center', gap:6}}>
            <img src={mailIcon} alt="mail" style={{width:20, filter:'invert(1)', opacity:0.95}} />
            <a href="mailto:eis-admin@bk.ru" style={{color:'#fff', fontWeight:500, fontSize:16, textDecoration:'none'}}>eis-admin@bk.ru</a>
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
          <div style={{color:'#fff', fontWeight:500, fontSize:15, marginLeft:8, whiteSpace:'nowrap'}}>Пн–Пт 9:00–18:00</div>
          <button className="main-btn" style={{marginLeft:0, minWidth:140, background:'#43d854', color:'#fff', fontWeight:700, fontSize:16}} onClick={()=>setModal(true)}>Быстрый заказ</button>
        </div>
      </div>
      <QuickOrderModal open={modal} onClose={()=>setModal(false)} />
    </div>
  );
} 