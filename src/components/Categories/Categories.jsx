import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css';
import image1 from '/src/assets/categ1.png';
import image2 from '/src/assets/categ2.png';
import image3 from '/src/assets/categ3.png';
import image4 from '/src/assets/categ4.png';

const categories = [
  {
    img: image3,
    title: 'Чокеры',
  },
  {
    img: image4,
    title: 'Кольца',
  },
  {
    img: image1,
    title: 'Женские браслеты',
  },
  {
    img: image2,
    title: 'Мужские браслеты',
  },
];

const Categories = () => {
  const isTitleLeft = (title) => {
    return title === 'Кольца' || title === 'Мужские браслеты';
  };

  return (
    <section className="categories-section">
      <div className="container">
        <h2>Категории украшений</h2>
        <div className="categories-grid">
          {categories.map((card) => (
            <div
              className="categories-item-content"
              key={card.title}
              style={{
                flexDirection: isTitleLeft(card.title) ? 'row-reverse' : 'row',
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="category-image"
              />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
        <Link to="/catalog" className="categories-button">
          Перейти в каталог
        </Link>
      </div>
    </section>
  );
};

export default Categories;