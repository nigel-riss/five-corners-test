import { Button } from './Button.js';
import { Form } from './Form.js';
import { Items } from './Items.js';

import '../styles/cart.css';
import '../styles/link.css';
import '../styles/title.css';


const Cart = (props) => {
  const {
    isMobile,
    items,
    updateItems,
  } = props;

  return (
    <div className="wrapper">
      <section className="cart">
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

          <Form
            isMobile={isMobile}
          />

          <Items
            items={items}
          />

          {isMobile && <div className="cart__total">
            <p className="cart__total-text">Итог:</p>
            <div className="cart__total-price">
              {`3790 руб.`}
            </div>
          </div>}

          <Button
            title="Купить"
            onClick={() => {console.log(`Buy button click`)}}
          />
      </section>
    </div>
  );
};


export { Cart };
