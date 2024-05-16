import { combineReducers, configureStore } from '@reduxjs/toolkit';

export function makeStore() {
  return configureStore({
    reducer: combineReducers({}),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
