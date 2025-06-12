import React from 'react';
import './blog.css';
import blog1 from "./../../assets/blog1.png";
import blog2 from "./../../assets/blog2.png";


const Blog = () => {      
  return (

<section className="blog-section">
      <div className="container">
       <h2>О нас</h2>
      <div className="blog-grid">
        <div className="blog-content">
          <img src={blog1} className="blog-image" />
          <div className='blog-text'>
          <p>
            Привет! Меня зовут Светлана Павлова, я - создатель бренда OPORA, сертифицированный тета-хилер и геммопсихолог. В своей работе я соединяю чувствование энергии человека, глубинную психологию и силу натуральных камней, чтобы создавать украшения, которые не просто красивы, а работают на ваши цели.
          </p>
          </div>
        </div>

        <div className="blog-content">
          <div className='blog-text'>
          <h3>Как появилась OPORA?</h3>
          <p>
            Я долгое помогала людям через энергопрактики и геммопсихологию, но хотела сделать поддержку более доступной. Оказалось, что всё, что я делаю руками, даёт силу и вдохновение - и пазл сложился сам собой: украшения + энергия + психология камней = OPORA.
          </p>
          <p>
            Название неслучайно - эти украшения становятся опорой для тех, кто их носит.
          </p>
          </div>
          <img src={blog2} className="blog-image" />
        </div>
      </div>
      </div>
    </section>
  
  );
};

export default Blog;