import { Button } from './Button.js';
import { Form } from './Form.js';
import { Items } from './Items.js';

import data from '../mocks.json';


const Cart = () => {
  const items = JSON.parse(data);

  return (
    <section className="cart">
      <div className="wrapper">
        <h1 className="cart__title">Корзина</h1>
        <div className="cart__login">
          Есть аккаунт?
          <button>Войти</button>
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

        <Button
          title="Купить"
          onClick={() => {console.log(`Buy button click`)}}
        />
      </div>
    </section>
  );
};


export { Cart };
