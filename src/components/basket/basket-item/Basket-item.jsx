import './Basket-item.css';

function BasketItem(prop) {
  const { id, quantity, url, title, description, price,
    deleteOrderItem, orderItemCountHandler } = prop;

  return (
    <li className='collection-item basketItem-container'>
      <img className='basketItem-img'
        src={url}
        alt="basket item" />
      <div className="item-info">
        <div className="item-description">
          <div className="item-title">{title}</div>
          <div className="item-subtitle">{description}</div>
        </div>
        <div className="item-price">{price} руб</div>
      </div>
      <div className="itemHandler">
        <div className="itemCount-handler">
          <button
            className='material-icons count-handler' type='button'
            onClick={() => orderItemCountHandler(id, 'dec')}>chevron_left</button>
          <span className='item-quantity'>{quantity}</span>
          <button className='material-icons count-handler' type='button'
            onClick={() => orderItemCountHandler(id, 'inc')}>chevron_right</button>
        </div>
        <button className='deleteItem-btn' type='button'
          onClick={() => deleteOrderItem(id)}
        >Удалить</button>
      </div>
    </li>
  );
}

export default BasketItem;