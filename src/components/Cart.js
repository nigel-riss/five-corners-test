import { Button } from './Button.js';
import { Form } from './Form.js';
import { Items } from './Items.js';

import '../styles/cart.css';
import '../styles/link.css';
import '../styles/title.css';


const Cart = (props) => {
  const {
    items,
    updateItems,
  } = props;

  return (
    <section className="cart">
      <div className="wrapper">
        <h1 className="title cart__title">Корзина</h1>
        <div className="cart__login">
          Есть аккаунт?
          <button className="link">Войти</button>
          {/* Почему <button>? Чтобы понимать какой элемент тут
              должен быть на самом деле, нужно понимать архитектуру
              целого приложения. Будет ли переход по другому URL
              или будет появляться попап.
          */}
        </div>

        <Form />

        <Items
          items={items}
        />

        <div className="cart__total">
          <p className="cart__total-text">Итог:</p>
          <div className="cart__total-price">
            {`3790 руб.`}
          </div>
        </div>

        <Button
          title="Купить"
          onClick={() => {console.log(`Buy button click`)}}
        />
      </div>
    </section>
  );
};


export { Cart };
