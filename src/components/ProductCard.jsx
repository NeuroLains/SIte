import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ to, image, title, price, oldPrice, discount }) {
  return (
    <Link to={to} className="product-card">
      <div className="product-card-img-wrap">
        <img src={image} alt={title} className="product-card-img" />
        {discount && <div className="product-card-discount">-{discount}%</div>}
      </div>
      <div className="product-card-content">
        <div className="product-card-title">{title}</div>
        <div className="product-card-prices">
          <span className="product-card-price">{price} ₽</span>
          {oldPrice && <span className="product-card-oldprice">{oldPrice} ₽</span>}
        </div>
      </div>
    </Link>
  );
} 