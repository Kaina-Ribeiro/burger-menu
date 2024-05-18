import { IAppInfo } from '@/types/app-info';

interface IPriceInternalizationProps {
  price: number;
  appInfo: IAppInfo | undefined;
}
export function priceInternalization({
  price,
  appInfo,
}: IPriceInternalizationProps) {
  return price.toLocaleString(appInfo?.locale, {
    currency: appInfo?.ccy,
    style: 'currency',
    minimumFractionDigits: 2,
  });
}
