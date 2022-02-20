import { useCallback } from 'react';
import {
  // useLoadScript,
  useJsApiLoader,
  GoogleMap,
  Marker,
} from '@react-google-maps/api';
import {
  MAP_CONTAINER_STYLES,
  MAP_DEFAULT_ZOOM,
  MAP_OPTIONS,
} from '../utils/constants.js';
import '../styles/map.css';

// const MAP_API_LIBRARIES = [
// const libraries = [
//   `places`,
// ];


const Map = (props) => {
  const {
    address,
    coords,
    onClick,
  } = props;

  const { isLoaded } = useJsApiLoader({
    id: `google-map-script`,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    // libraries,
  });

  const handleMapClick = useCallback((event) => {
    onClick({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, [onClick]);

  return (
    <div className="map">
      { isLoaded 
        ? <GoogleMap
          id="map"
          mapContainerStyle={MAP_CONTAINER_STYLES}
          zoom={MAP_DEFAULT_ZOOM}
          center={coords}
          options={MAP_OPTIONS}
          onClick={handleMapClick}
          onLoad={() => {}}
        >
          <Marker
            position={{
              lat: coords.lat,
              lng: coords.lng,
            }}
          />
        </GoogleMap>
        : <></>}
    </div>
  );
};


export { Map };
