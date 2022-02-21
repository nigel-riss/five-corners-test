import { AddressInput } from './AddressInput.js';
import { Dropdown } from './Dropdown.js';
import { Input } from './Input.js';
import { Map } from './Map.js';
import { PACKAGE_TYPES } from '../utils/constants.js';
import '../styles/form.css';


const Form = (props) => {
  const {
    contacts,
    coords,
    isMobile,
    onAddressBlur,
    onContactsUpdate,
    onCoordsChange,
    validity,
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
        isValid={validity.address}
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
          isValid={validity.name}
          label="Ваше Имя"
          onChange={onContactsUpdate}
          value={name}
        />

        <Input
          id="phone"
          isValid={validity.phone}
          label="Ваш Телефон"
          onChange={onContactsUpdate}
          value={phone}
        />
      </div>

      <Input
        id="email"
        isValid={validity.email}
        label="Ваш Email"
        onChange={onContactsUpdate}
        value={email}
      />

      <Dropdown
        id="packageType"
        isValid={validity.packageType}
        label="Тип упаковки"
        onChange={onContactsUpdate}
        packageTypes={PACKAGE_TYPES}
        value={packageType}
      />

      <Input
        id="comment"
        isValid={validity.comment}
        label="Введите комментарий"
        onChange={onContactsUpdate}
        value={comment}
      />

    </div>
  );
};


export { Form };
