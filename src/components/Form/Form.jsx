import React, { useRef, useState } from 'react';
import './form.css';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const [successModal, setSuccessModal] = useState(false);
 
 const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
             console.log(result.text);
            e.target.reset();
            setSuccessModal(true);

        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке формы. Попробуйте еще раз или свяжитесь со мной в Telegram/WhatsApp');
        }
    };

    const closeSuccessModal = () => {
        setSuccessModal(false);
    };
    return (
        <> 
            <div className="form-section" id="order-form">
                <div className="container">
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>Остались вопросы или хотите сделать заказ?</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="Ваше ФИО*" required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Email*" required />
                            </div>
                            <div className="form-group">
                                <input type="text" id="phone" name="phone" placeholder="Ваш телефон (WhatsApp)*" required />
                            </div>
                        </div>
                        <div className="form-group message">
                            <input type="text" id="message" name="message" placeholder="Задайте вопрос или закажите украшение*" required />
                            <button type="submit" className="submit-btn">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Модальное окно*/}
            {successModal && (
                <div className="modal success-modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeSuccessModal}>
                            х
                        </span>
                        <p>Форма успешно отправлена. Продавец свяжется с вами.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Form;