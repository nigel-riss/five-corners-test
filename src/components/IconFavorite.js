import heartIcon from '../img/icons/heart.svg';
import '../styles/icon.css';

const IconFavorite = () => {
  return (
    <div className="icon">
      <img
        src={heartIcon}
        alt="favorite"
      />
    </div>
  );
};


export { IconFavorite };
