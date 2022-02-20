import {
  useLoadScript,
  useJsApiLoader,
  GoogleMap,
  Marker,
} from '@react-google-maps/api';
import { useCallback } from 'react';
import '../styles/map.css';

// const MAP_API_LIBRARIES = [
const libraries = [
  `places`,
];
const MAP_CONTAINER_STYLES = {
  height: `100%`,
  width: `100%`,
};
const MAP_OPTIONS = {
  disableDefaultUI: true,
};
const DEFAULT_CENTER = {
  lat: 54.720379,
  lng: 20.500891,
};


const Map = (props) => {
  const {
    address,
    onClick,
  } = props;

  const { isLoaded } = useJsApiLoader({
    id: `google-map-script`,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    // libraries,
  });

  const handleMapClick = useCallback((event) => {
    console.log(event);
    onClick();
  }, [onClick]);

  return (
    <div className="map">
      { isLoaded 
        ? <GoogleMap
          id="map"
          mapContainerStyle={MAP_CONTAINER_STYLES}
          zoom={8}
          center={DEFAULT_CENTER}
          options={MAP_OPTIONS}
          onClick={handleMapClick}
          onLoad={() => {}}
        >
        </GoogleMap>
        : <></>}
    </div>
  );
};


export { Map };
