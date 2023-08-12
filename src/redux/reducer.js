import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItem: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart : (state, action) => {
      const item = action.payload;
     
      // console.log(item)
      const isItemExist = state.cartItem.find((i)=>i.id===item.id);
      if (isItemExist) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
          }
        });
      } else {
        state.cartItem.push(item);
      }
    },
    decrement : (state, action) => {
      let item = state.cartItem.find((i) => i.id === action.payload.id);

      if (item.quantity > 1) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) {
            i.quantity -= 1;
          }
        });
      }
    },

    deleteFromCart : (state, action) => {
      
      state.cartItem =  state.cartItem.filter((i) => i.id !== action.payload);
    },
    calculatePrice : (state) => {
      let sum = 0;
      state.cartItem.map((i) => (sum += i.price*i.quantity));
      
      state.subTotal =sum;
      state.shipping = state.subTotal > 1000 ? 0 : 200;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.tax + state.shipping;
    },
  }
);
