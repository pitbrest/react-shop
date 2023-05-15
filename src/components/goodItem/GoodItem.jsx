import { useState } from 'react';
import PropTypes from 'prop-types';
import './GoodItem.css';

function GoodItem(props) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const { id, url, title, description, price, addItemToOrder, order = [] } = props;

  const btnStatus = order.filter(item => item.id === id).length;

  const tooltipHandler = () => {
    setIsTooltipVisible(true);
    setTimeout(() => {
      setIsTooltipVisible(false);
    }, 1000);
  };

  const tooltipStyleObj = isTooltipVisible ? {
    display: 'inline-block',
    visibility: 'visible'
  } : {
    display: 'none',
    visibility: 'hidden'
  };

  return (
    <div className="row good-item hoverable">
      <div>
        <div className="card">
          <div className="card-image">
            <img src={url}
              alt="good" />
          </div>
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <span className='price'>{price} руб</span>
            <button type='button'
              className={btnStatus ? "btn blue darken-3" : "btn"}
              onClick={() => {
                addItemToOrder(props);
                tooltipHandler();
              }} >Купить
            </button>
            <span className="item-tooltip" style={tooltipStyleObj}>Товар добавлен в корзину</span>
          </div>
        </div>
      </div>
    </div>
  );
}

GoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addItemToOrder: PropTypes.func.isRequired,
  order: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired
};

export default GoodItem;