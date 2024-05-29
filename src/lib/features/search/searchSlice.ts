import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  search?: string;
} = {};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchItem(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { searchItem } = searchSlice.actions;
export default searchSlice.reducer;
