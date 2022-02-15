import { Button } from './Button.js';
import { Form } from './Form.js';
import { Items } from './Items.js';

import data from '../mocks.json';


const Cart = () => {
  console.log(JSON.parse(data));

  return (
    <section className="cart">
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

      <Items />

      <Button
        title="Купить"
        onClick={() => {console.log(`Buy button click`)}}
      />
    </section>
  );
};


export { Cart };
