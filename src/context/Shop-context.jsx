import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./reducer";

const initialState = {
  goods: [],
  isLoading: true,
  order: [],
  busketStatus: false,
};

const ShopContext = createContext();

function WithShopContext({ children }) {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (goods) => {
    dispatch({ type: 'Set_Goods', payload: { goods } });
  };

  value.addItemToOrder = (props) => {
    dispatch({ type: 'Add_Item_To_Order', payload: { props } });
  };

  value.deleteOrderItem = (itemId) => {
    dispatch({ type: 'Delete_Order_Item', payload: { id: itemId } });
  };

  value.orderItemCountHandler = (itemId, operation) => {
    dispatch({ type: 'Order_Item_Count_Handler', payload: { id: itemId, operation } });
  };

  value.basketStatusHandler = () => {
    dispatch({ type: 'Basket_Status_Handler' });
  };

  return < ShopContext.Provider value={value} > {children}</ShopContext.Provider >;
};

WithShopContext.propTypes = {
  children: PropTypes.node.isRequired
};

export { ShopContext, WithShopContext };