import { ICartItem } from '@/types/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  item?: ICartItem;
} = {};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<ICartItem>) {
      state.item = action.payload;
    },
    sumItemQtd(state) {
      if (!state.item) return;
      state.item.quantity += 1;
    },
    subItemQtd(state) {
      if (!state.item) return;
      if (state.item.quantity === 1) return;
      state.item.quantity -= 1;
    },
  },
});

export const { addCartItem, subItemQtd, sumItemQtd } = menuSlice.actions;
export default menuSlice.reducer;
