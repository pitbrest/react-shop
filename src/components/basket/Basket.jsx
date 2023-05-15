import { useContext } from 'react';
import { ShopContext } from '../../context/Shop-context';
import './Basket .css';

function Basket() {
  const { order, basketStatusHandler } = useContext(ShopContext);

  return (
    <div className='basket-container right'
      onClick={basketStatusHandler}
      onKeyDown={() => { }}
      role='button'
      tabIndex={0}>
      {order.length ? <div className="dark-text cart-quantity">{order.length}</div> : null}
      <i className="material-icons medium blue-grey-text text-darken-2 right basket">shopping_cart </i>
    </div>
  );
}

export default Basket;