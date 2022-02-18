import '../styles/map.css';


const Map = (props) => {
  const {
    address,
    onClick,
  } = props;

  return (
    <div className="map">
      <h3>{address}</h3>
    </div>
  );
};


export { Map };
