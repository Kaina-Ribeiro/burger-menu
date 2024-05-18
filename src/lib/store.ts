import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import appSlice from './features/app/appSlice';
import menuSlice from './features/menu/menuSlice';

export function makeStore() {
  return configureStore({
    reducer: combineReducers({
      app: appSlice,
      cart: cartSlice,
      menu: menuSlice,
    }),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
