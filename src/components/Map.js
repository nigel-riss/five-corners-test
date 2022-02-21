import {
  useCallback,
  useEffect,
  useRef
} from 'react';
import {
  // useLoadScript,
  useJsApiLoader,
  GoogleMap,
  Marker,
} from '@react-google-maps/api';
import {
  MAP_CONTAINER_STYLES,
  MAP_DEFAULT_CENTER,
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
    coords,
    onClick,
  } = props;

  const { isLoaded } = useJsApiLoader({
    id: `google-map-script`,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    // libraries,
  });

  const mapRef = useRef();

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.panTo({
      lat: coords.lat,
      lng: coords.lng,
    });
  }, [coords]);

  const handleMapClick = useCallback((event) => {
    onClick({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, [onClick]);

  const handleMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className="map">
      { isLoaded 
        ? <GoogleMap
          id="map"
          mapContainerStyle={MAP_CONTAINER_STYLES}
          zoom={MAP_DEFAULT_ZOOM}
          center={MAP_DEFAULT_CENTER}
          options={MAP_OPTIONS}
          onClick={handleMapClick}
          onLoad={handleMapLoad}
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
