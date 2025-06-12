import React, { useState } from 'react';
import './choose.css';


const Choose = () => {

  return (
    <section className="choose-section">
      <div className="container">
        <h2>Как выбрать себе украшение</h2>
        <div className="options-container">
          <div className="option-card">
            <h3>Выбор из готовых вариантов</h3>
            <p>
              Выбираете сердцем и потом читаете описание. Ваше подсознание всегда
              знает, что нам нужно.
            </p>
          </div>
          <div className="option-card">
            <h3>Индивидуальный заказ</h3>
            <p>
              Создается браслет под ваши запросы, считывая энергию, учитывая дату
              рождения и психологию камней. Вы получаете 3 варианта формулы на
              выбор.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;