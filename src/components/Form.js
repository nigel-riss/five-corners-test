import { Dropdown } from './Dropdown.js';
import { Input } from './Input.js';
import { Map } from './Map.js';
import '../styles/form.css';


const Form = () => {
  return (
    <div className="form">
      <Input
        id="address"
        label="Адрес"
        onChange={() => {}}
      />

      <Map />

      <div className="form__fieldset">
        <Input
          id="name"
          label="Ваше Имя"
          onChange={() => {}}
        />

        <Input
          id="phone"
          label="Ваш Телефон"
          onChange={() => {}}
        />
      </div>

      <Input
        id="email"
        label="Ваш Email"
        onChange={() => {}}
      />

      <Dropdown
        id="package"
        label="Тип упаковки"
        onChange={() => {}}
      />

      <Input
        id="comment"
        label="Введите комментарий"
        onChange={() => {}}
      />

    </div>
  );
};


export { Form };
