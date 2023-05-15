import { useContext } from 'react';
import { ShopContext } from '../../context/Shop-context';
import BasketItem from './basket-item/Basket-item';

function BasketList() {
  const { order, basketStatusHandler, deleteOrderItem, orderItemCountHandler } = useContext(ShopContext);

  const totalPrice = order.reduce((acc, item) => item.price * item.quantity + acc, 0);

  return (
    <div className="modal-wrapper"><div className='basketList-container'>
      <div className="material-icons close-icon"
        onClick={basketStatusHandler}
        onKeyDown={() => { }}
        role='button'
        tabIndex={0}>close
      </div>
      <ul className="basket-content collection" >
        {order ? order.map(item => {
          const { id, quantity, url, title, description, price } = item;
          return <BasketItem
            key={id} id={id}
            quantity={quantity} url={url}
            title={title} description={description}
            price={price}
            deleteOrderItem={deleteOrderItem}
            orderItemCountHandler={orderItemCountHandler} />;
        }) : 'Ваша корзина пуста'}
      </ul>
      <div className="basket-totalInfo">
        {!totalPrice ? 'Ваша корзина пуста' : <div className="total-price">Ваш заказ: <span>{totalPrice}</span> руб</div>}

      </div>
      <button className='btn confirm-btn' type='button'>Оформить заказ</button>

    </div></div>
  );
}

export default BasketList;