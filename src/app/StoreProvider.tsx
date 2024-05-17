'use client';
import { Provider } from 'react-redux';
import { useRef } from 'react';
import { AppStore, makeStore } from '@/lib/store';
import { IAppInfo } from '@/types/app-info';
import { loadAppInfo } from '@/lib/features/app/appSlice';

export default function StoreProvider({
  children,
  appInfo,
}: Readonly<{
  children: React.ReactNode;
  appInfo: IAppInfo;
}>) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(loadAppInfo(appInfo));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
