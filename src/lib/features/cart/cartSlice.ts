import { ICartItem } from '@/types/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = Omit<ICartItem, 'modifiers'> & {
  modifiers: string[];
};

const initialState: {
  items: CartItem[];
} = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push({
        ...action.payload,
        id: `${action.payload.id}.${(+action.payload.id * Math.random()).toString().split('.')[0]}`,
      });
    },
    sumQtd(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items[index].quantity++;
    },
    subQtd(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const item = state.items[index];

      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        return;
      }

      item.quantity--;
    },
  },
});

export const { addToCart, sumQtd, subQtd } = cartSlice.actions;
export default cartSlice.reducer;
