import { IAppInfo } from '@/types/app-info';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  info?: IAppInfo;
} = {};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loadAppInfo(state, action: PayloadAction<IAppInfo>) {
      state.info = action.payload;
    },
  },
});

export const { loadAppInfo } = appSlice.actions;
export default appSlice.reducer;
