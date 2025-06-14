import React, { useState } from 'react';
import './card.css';
import Form from '../Form/Form';
import gnom from '/src/assets/gnom.JPG';
import image13 from '/src/assets/image13.png';
import image1 from '/src/assets/image1.png';
import image19 from '/src/assets/image19.png';
import image18 from '/src/assets/image18.png';
import image17 from '/src/assets/image17.png';
import image20 from '/src/assets/image20.png';
import image21 from '/src/assets/image21.png';
import image4 from '/src/assets/image4.png';

const Data = [
    { id: 1, name: 'Мудрость и сила земли', price: 3499, category: 'Браслеты', image: image13, size: '15-16 см', function: 'Антистресс-терапия, личный энерготренер, защитный оберег', composition: 'Перепелиная яшма, сердолик'},
    { id: 2, name: 'Где моя энергия', price: 2699, category: 'Браслеты', image: image1, size: '15-16 см', function: 'Уберет все лишнее из жизни, защитит от ненужных людей и воздействия, поможет достигать успеха м ценить, принимать собственные результаты', composition: 'Черный агат, сердолик' },
    { id: 3, name: 'Кольцо с лабрадором', price: 2000, category: 'Кольца', image: image19, size: 'Регулируемый', function: 'Работа с подсознанием и раскрытие интуиции, защита от неприятностей, в отношения вносит уют, помогает в самореализации, дарит уверенность в себе, способствует раскрытию неизвестных талантов и возможностей, дает силу преодолеть трудности на пути к цели, помогает найти вдохновение и новые идеи', composition: 'Лабрадор, металл, нержавеющая сталь'},
    { id: 4, name: 'Линия жизни', price: 3500, category: 'Чокеры', image: image18, size: 'На любой обхват шеи, не давит и не болтается', function: 'Колье для тех, кто готов к росту в деньгах, обучению людей, передаче информации и обучению, к масштабу во всех сферах жизни', composition: 'Гематит, цитрин'},
    { id: 5, name: 'Взлет', price: 3500, category: 'Чокеры', image: image17, size: 'Регулируемый', function: 'Для тех, кто готов идти в масштаб, обучать и передавать свои знания, расти в деньгах и принимать новые возможности', composition: 'Гематит, цитрин, нержавеющая сталь'},
    { id: 6, name: 'Сила земли и спокойствия', price: 3350, category: 'Браслеты', image: image20, size: '16,5-17 см', function: 'Стабилизирует психику, помогает трезво оценивать ситуацию и принимать верные решения, защищает от стресса, укрепляет физическое и астральное тело, укрепляет уверенность в себе, мощный оберег от темных сил', composition: 'Унакит, гематит'},
    { id: 7, name: 'Триада преображения', price: 2500, category: 'Браслеты', image: image21, size: '15-16 см', function: 'Трансформирует боль в мудрость, возвращает способность любить без страха, активирует осознанный рост во всех сферах, является мощным энергоаккумулятором, растворяет старые эмоциональные блоки', composition: 'Аметист, розовый кварц, горный хрусталь' },
    { id: 8, name: 'Я все сама', price: 3700, category: 'Чокеры', image: image4, size: 'Регулируемый', function: 'Поможет выйти из энергии «я все сама», очищает пространство от людей с двойными намерениями, работает с сердечной чакрой и помогает перестать волноваться по пустякам', composition: 'Розовый кварц, турмалин'},
];

const Card = () => {
const [selectedCategory, setSelectedCategory] = useState('Все украшения');
const [searchQuery, setSearchQuery] = useState('');
const [selectedItem, setSelectedItem] = useState(null);
const filteredJewelry = Data.filter((item) => {
const categoryMatch = selectedCategory === 'Все украшения' || item.category === selectedCategory;
const searchMatch = item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase());
return categoryMatch && searchMatch;
});
const collection = ['Все украшения', 'Браслеты', 'Чокеры', 'Кольца', 'Серьги'];
const handleInputChange = (event) => {setSearchQuery(event.target.value);};
const openModal = (item) => {setSelectedItem(item);};
const closeModal = () => {setSelectedItem(null);};
const handleOrderClick = () => {
  closeModal();
  // переход на форму
  const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};
return (
<section className="card-section">
<div className="container">
<h2>Каталог</h2>
<form className="search-bar" >
<input
    type="text"
    placeholder="Поиск"
    value={searchQuery}
    onChange={handleInputChange}
/>
</form>
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
{selectedCategory !== 'Все украшения' && filteredJewelry.length === 0 ? (
  <div className="no-items-message">
    <h3>В этой категории украшения находятся на этапе создания</h3>
    <img src={gnom} alt="Нет товаров" className="no-items-image" />
  </div>
) : (
  <div className="jewelry-grid">
    {filteredJewelry.map((item) => (
      <div key={item.id} className="jewelry-item" onClick={() => openModal(item)}>
        <img src={item.image} alt={`Jewelry ${item.id}`} />
        <div className="item-details">
          <p className="item-name">{item.name}</p>
          <p className="item-price">{item.price} р.</p>
        </div>
      </div>
    ))}
  </div>
)}
</div>
{/* Модальное окно */}
{selectedItem && (
    <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={closeModal}>
                Х
            </span>
            <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
            <h2>{selectedItem.name}</h2>
            <p>Цена: {selectedItem.price} р.</p>
            <p>Размер: {selectedItem.size}</p>
            <p>Функция: {selectedItem.function}</p>
            <p>Состав: {selectedItem.composition}</p>
            <button className="order-button" onClick={handleOrderClick}>
                Заказать
            </button>
        </div>
    </div>
)}

<Form id="order-form" />
</section>
);
};
export default Card;
