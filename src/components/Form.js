import { Dropdown } from './Dropdown.js';
import { Input } from './Input.js';
import { Map } from './Map.js';
import { PACKAGE_TYPES } from '../utils/constants.js';
import '../styles/form.css';


const Form = (props) => {
  const {
    contacts,
    coords,
    isForceValidated,
    isMobile,
    onAddressBlur,
    onContactsUpdate,
    onCoordsChange,
    onMapLoaded,
    validate,
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
      <Input
        id="address"
        isForceValidated={isForceValidated}
        isValid={validity.address}
        label="Адрес"
        onBlur={onAddressBlur}
        onChange={onContactsUpdate}
        validate={validate}
        value={address}
      />

      {isMobile && <Map
        coords={coords}
        onClick={onCoordsChange}
        onMapLoaded={onMapLoaded}
      />}

      <div className="form__fieldset">
        <Input
          id="name"
          isForceValidated={isForceValidated}
          isValid={validity.name}
          label="Ваше Имя"
          onChange={onContactsUpdate}
          validate={validate}
          value={name}
        />

        <Input
          id="phone"
          isForceValidated={isForceValidated}
          isValid={validity.phone}
          label="Ваш Телефон"
          onChange={onContactsUpdate}
          validate={validate}
          value={phone}
        />
      </div>

      <Input
        id="email"
        isForceValidated={isForceValidated}
        isValid={validity.email}
        label="Ваш Email"
        onChange={onContactsUpdate}
        validate={validate}
        value={email}
      />

    <Dropdown
        id="packageType"
        isForceValidated={isForceValidated}
        isValid={validity.packageType}
        label="Тип упаковки"
        onChange={onContactsUpdate}
        packageTypes={PACKAGE_TYPES}
        validate={validate}
        value={packageType}
      />

      <Input
        id="comment"
        isForceValidated={isForceValidated}
        isValid={validity.comment}
        label="Введите комментарий"
        onChange={onContactsUpdate}
        validate={validate}
        value={comment}
      />

    </div>
  );
};


export { Form };
