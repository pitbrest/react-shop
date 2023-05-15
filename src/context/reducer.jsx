const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'Set_Goods':
      return {
        ...state,
        goods: payload.goods,
        isLoading: false
      };

    case 'Add_Item_To_Order': {
      const { id, url, title, description, price } = payload.props;
      const newOrderItem = {
        id,
        quantity: 1,
        url,
        title,
        description,
        price
      };

      const checkingOrder = state.order.filter(item => item.id === id).length;

      if (checkingOrder) {
        const changedOrder = state.order.map(item => {
          let changedItem = { ...item };
          if (changedItem.id === id) { changedItem = { ...changedItem, quantity: changedItem.quantity += 1 }; };
          return changedItem;
        });
        return {
          ...state,
          order: changedOrder
        };
      }
      return {
        ...state,
        order: [...state.order, newOrderItem]
      };
    };

    case 'Delete_Order_Item': {
      return {
        ...state,
        order: state.order.filter(item => item.id !== payload.id)
      };
    }

    case 'Order_Item_Count_Handler': {
      const { id, operation } = payload;
      let supportOrder = [...state.order];

      if (operation === 'inc') {
        supportOrder = state.order.map(item => {
          const changedItem = { ...item };
          if (changedItem.id === id) changedItem.quantity += 1;
          return changedItem;
        });
      }
      if (operation === 'dec') {
        const targetItem = supportOrder.filter(item => item.id === id);

        if (targetItem[0].quantity !== 1) {
          supportOrder = state.order.map(item => {
            const changedItem = { ...item };
            if (item.id === id) changedItem.quantity -= 1;
            return changedItem;
          });
        }
      }

      return {
        ...state,
        order: supportOrder
      };
    }

    case 'Basket_Status_Handler': {
      return { ...state, busketStatus: !state.busketStatus };
    }
    default:
      return state;
  }
};

export default reducer;