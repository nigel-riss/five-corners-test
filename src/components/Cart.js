import { useState } from 'react';
import {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { Button } from './Button.js';
import { Form } from './Form.js';
import { Items } from './Items.js';
import { Map } from './Map.js';
import { TotalPrice } from './TotalPrice.js';
import { getTotalItemsPrice } from '../utils/common.js';
import '../styles/cart.css';
import '../styles/link.css';
import '../styles/title.css';


const Cart = (props) => {
  const {
    contacts,
    coords,
    isMobile,
    items,
    onFormSubmit,
    onContactsUpdate,
    onCoordsChange,
    onItemCountInc,
    onItemCountDec,
    onItemRemove,
    validate,
    validity,
  } = props;

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleMapLoaded = () => {
    setIsMapLoaded(true);
  };

  const handleAddressBlur = async (address, callback) => {
    if (!isMapLoaded) return;

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      callback(lat, lng);
    } catch (error) {
      console.log(`😱 Error: `, error);
    }
  };

  const handleCoordsChange = async (coords) => {
    if (!isMapLoaded) return;
    onCoordsChange(coords);

    try {
      const results = await getGeocode({location: coords});
      onContactsUpdate({
        name: `address`,
        value: results[0].formatted_address,
      });
    } catch (error) {
      console.log(`😱 Error: `, error);
    }
  };


  return (
    <div className="wrapper">
      <section className="cart">
          <h1 className="title cart__title">Корзина</h1>
          <div className="cart__login">
            Есть аккаунт?
            <button className="link">Войти</button>
          </div>

          <Form
            contacts={contacts}
            coords={coords}
            isMobile={isMobile}
            onAddressBlur={() => {
              handleAddressBlur(
                contacts.address,
                (lat, lng) => onCoordsChange({ lat, lng })
              )
            }}
            onContactsUpdate={onContactsUpdate}
            onCoordsChange={handleCoordsChange}
            onMapLoaded={handleMapLoaded}
            validate={validate}
            validity={validity}
          />

          <Items
            items={items}
            onItemCountInc={onItemCountInc}
            onItemCountDec={onItemCountDec}
            onItemRemove={onItemRemove}
          />

          {isMobile && <TotalPrice
            value={getTotalItemsPrice(items)}
          />}

          <Button
            title="Купить"
            onClick={onFormSubmit}
          />

          {!isMobile && <div className="cart__map">
            <Map
              coords={coords}
              onClick={handleCoordsChange}
              onMapLoaded={handleMapLoaded}
            />
            <TotalPrice
              value={getTotalItemsPrice(items)}
            />
          </div>}
      </section>
    </div>
  );
};


export { Cart };
