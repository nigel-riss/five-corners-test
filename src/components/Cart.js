import usePlacesAutocomplete, {
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
  // const [isMapLoaded, setIsMapLoaded] = 

  const {
    contacts,
    coords,
    isMobile,
    items,
    onContactsUpdate,
    onCoordsChange,
    onItemCountInc,
    onItemCountDec,
    onItemRemove,
  } = props;

  const {
    // ready: isAutocompleteReady,
    // suggestions: {status, data},
    setValue: setAutocompleteValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    requestOptions: {},
  });


  const handleAddressBlur = async (address, callback) => {
    // if (!isAutocompleteReady) return;

    setAutocompleteValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      console.log(results);
      const { lat, lng } = await getLatLng(results[0]);
      callback(lat, lng);
      console.log(`📍 Coordinates: `, { lat, lng });
    } catch (error) {
      console.log(`😱 Error: `, error);
    }
  };

  const handleCoordsChange = async (coords) => {
    onCoordsChange(coords);

    try {
      const results = await getGeocode({location: coords});
      onContactsUpdate({target: {
        name: `address`,
        value: results[0].formatted_address,
      }});
    } catch (error) {
      console.log(`😱 Error: `, error);
    }
    // const {
    //   name,
    //   value,
    // }
  }

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
            onCoordsChange={onCoordsChange}
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
            onClick={() => {console.log(`Buy button click`)}}
          />

          {!isMobile && <div className="cart__map">
            <Map
              coords={coords}
              onClick={handleCoordsChange}
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
