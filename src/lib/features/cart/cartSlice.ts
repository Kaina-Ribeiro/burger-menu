import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  modifiers?: string[];
}

const initialState: {
  items: ICartItem[];
} = {
  items: [
    {
      id: 1,
      name: 'test',
      price: 25,
      quantity: 1,
      modifiers: ['Smash', 'test'],
    },
    {
      id: 2,
      name: 'test',
      price: 10,
      quantity: 1,
      modifiers: ['Smash', 'test'],
    },
    {
      id: 3,
      name: 'test',
      price: 67,
      quantity: 1,
      modifiers: ['Smash', 'test'],
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      state.items.push(action.payload);
    },
    sumQtd(state, action: PayloadAction<number>) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items[index].quantity++;
    },
    subQtd(state, action: PayloadAction<number>) {
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
