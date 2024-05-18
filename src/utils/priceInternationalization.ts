import { IAppInfo } from '@/types/app-info';

interface IPriceInternationalizationProps {
  price: number;
  appInfo: IAppInfo | undefined;
}
export function priceInternationalization({
  price,
  appInfo,
}: IPriceInternationalizationProps) {
  return price.toLocaleString(appInfo?.locale, {
    currency: appInfo?.ccy,
    style: 'currency',
    minimumFractionDigits: 2,
  });
}
