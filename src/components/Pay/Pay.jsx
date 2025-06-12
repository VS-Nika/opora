import React from 'react';
import './pay.css';



const Pay = () => {      
  return (

<section className="pay-section">
      <div className="container">
        <h2>Оплата и доставка</h2>

        <div className="pay-block">
          <h3 className="pay-title">При заказе готового изделия</h3>
          <p className="pay-text">
            Оплачивается 100% от стоимости и стоимость доставки по России
            ориентировочно 500 руб. Отправка идёт через СДЭК либо через
            5post, отправка идет в течении 3-х дней после оплаты и согласования
            адреса
          </p>
        </div>

        <div className="pay-block">
          <h3 className="pay-title">При заказе индивидуального изделия</h3>
          <p className="pay-text">
            Вносится 50% от стоимости, и остаток вносится непосредственно
            перед отправкой. Сроки изготовления две – три недели с момента
            заказа и внесения предоплаты. Оплата идёт по ссылке, также есть
            формат рассрочки через банк
          </p>
        </div>
      </div>
    </section>
  
  );
};

export default Pay;