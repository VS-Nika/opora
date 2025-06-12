import React, { useState } from 'react';
import './collection.css';
import image1 from '/src/assets/image1.png';
import image2 from '/src/assets/image2.png';
import image3 from '/src/assets/image3.png';
import image4 from '/src/assets/image4.png';
import image5 from '/src/assets/image5.png';
import image6 from '/src/assets/image6.png';
import image7 from '/src/assets/image7.png';
import image8 from '/src/assets/image8.png';
import image9 from '/src/assets/image9.png';
import image10 from '/src/assets/image10.png';
import image11 from '/src/assets/image11.png';
import image12 from '/src/assets/image12.png';
import image13 from '/src/assets/image13.png';
import image14 from '/src/assets/image14.png';
import image15 from '/src/assets/image15.png';
import image16 from '/src/assets/image16.png';

const Data = [
  { id: 1, category: 'Браслеты', image: image1 },
  { id: 2, category: 'Чокеры', image: image2 },
  { id: 3, category: 'Кольца', image: image3 },
  { id: 4, category: 'Чокеры', image: image4 },
  { id: 5, category: 'Чокеры', image: image5 },
  { id: 6, category: 'Браслеты', image: image6 },
  { id: 7, category: 'Браслеты', image: image7 },
  { id: 8, category: 'Серьги', image: image8 },
  { id: 9, category: 'Браслеты', image: image9 },
  { id: 10, category: 'Чокеры', image: image10 },
  { id: 11, category: 'Чокеры', image: image11 },
  { id: 12, category: 'Браслеты', image: image12 },
  { id: 13, category: 'Браслеты', image: image13 },
  { id: 14, category: 'Серьги', image: image14 },
  { id: 15, category: 'Кольца', image: image15 },
  { id: 16, category: 'Браслеты', image: image16 },
];

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все украшения');

  const filteredJewelry =
    selectedCategory === 'Все украшения'
      ? Data
      : Data.filter((item) => item.category === selectedCategory);

  const collection = ['Все украшения', 'Браслеты', 'Чокеры', 'Кольца', 'Серьги'];

  return (
    <section className="collection-section">
      <div className="container">
        <h2>Портфолио</h2>
        <div className="filter-buttons">
          {collection.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="jewelry-grid">
          {filteredJewelry.map((item) => (
            <div key={item.id} className="jewelry-item">
              <img src={item.image} alt={`Jewelry ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;