import { AddressInput } from './AddressInput.js';
import { Dropdown } from './Dropdown.js';
import { Input } from './Input.js';
import { Map } from './Map.js';
import '../styles/form.css';


const Form = (props) => {
  const {
    contacts,
    coords,
    isMobile,
    onAddressBlur,
    onContactsUpdate,
    onCoordsChange,
  } = props;

  const {
    address,
    name,
    phone,
    email,
    packageType,
    comment,
  } = contacts;

  return (
    <div className="form">
      <AddressInput
        id="address"
        label="Адрес"
        onBlur={onAddressBlur}
        onChange={onContactsUpdate}
        value={address}
      />

      {isMobile && <Map
        coords={coords}
        onClick={onCoordsChange}
      />}

      <div className="form__fieldset">
        <Input
          id="name"
          label="Ваше Имя"
          onChange={onContactsUpdate}
          value={name}
        />

        <Input
          id="phone"
          label="Ваш Телефон"
          onChange={onContactsUpdate}
          value={phone}
        />
      </div>

      <Input
        id="email"
        label="Ваш Email"
        onChange={onContactsUpdate}
        value={email}
      />

      <Dropdown
        id="packageType"
        label="Тип упаковки"
        onChange={onContactsUpdate}
        value={packageType}
      />

      <Input
        id="comment"
        label="Введите комментарий"
        onChange={onContactsUpdate}
        value={comment}
      />

    </div>
  );
};


export { Form };
