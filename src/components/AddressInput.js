import { Input } from './Input.js';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';


const AddressInput = (props) => {
  const {
    id,
    label,
    value,
    onBlur,
    onChange,
  } = props;

  const {
    ready,
    suggestions: {status, data},
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    requestOptions: {},
  })


  const hadleBlur = async (address, callback) => {
    setValue(address, false);
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
  }

  return (
    <Input
      id={id}
      label={label}
      value={value}
      onBlur={() => hadleBlur(value, (lat, lng) => {
        onBlur({ lat, lng });
      })}
      onChange={onChange}
    />
  )
};


export { AddressInput };
