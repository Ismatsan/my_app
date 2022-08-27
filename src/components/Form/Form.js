import React from 'react';
import style from "./Form.module.css";

const Form = () => {
    return (
        <div className={style.card}>
            <form className={style.form}>
                <h2>Обратная связь</h2>
                <h4>Заполните форму</h4>
                <div className={style.box}>
                    <div className={style.boxControl}>
                        <input
                            type="text"
                            id="userSurname"
                            className="p_teg"
                            data-required=""
                            placeholder="Фамилия *"
                        />
                    </div>
                    <div className="boxControl">
                        <input
                            type="text"
                            id="userName"
                            className="p_teg"
                            data-required=""
                            placeholder="Имя *"
                        />
                    </div>
                </div>
                    <div className="boxControl">
                        <input
                            type="text"
                            id="userNickname"
                            className="p_teg"
                            data-required=""
                            placeholder="Ваш Ник *"
                        />
                    </div>

                <input
                    type="tel"
                    id="contactNumber"
                    style={{ width: "184px", margin:"6px 20px 6px 0"}}
                    placeholder="Контактный номер"
                />
                <input
                    type="email"
                    id="eMail"
                    style={{ width: "184px" }}
                    placeholder="Электронный адресс"
                />
                <select className={style.country}>
                    <option value="">Откуда Вы?</option>
                    <option value="KGS">Кыргызстан</option>
                    <option value="KAZ">Казахстан</option>
                    <option value="CHINA">Китай</option>
                    <option value="UZB">Узбекистан</option>
                </select>
                <br />
                <br />
                <textarea
                    id="userMsg"
                    style={{ width: "100%" }}
                    placeholder="Напишите Ваш отзыв или предложение"
                    defaultValue={""}
                />
                <button type="submit" id="next" className={style.btn}>
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default Form;