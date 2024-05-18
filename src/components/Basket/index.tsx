'use client';
import { useAppSelector } from '@/lib/hooks';
import CartItem from './CartItem';
import Row from '../Row';

export default function Basket() {
  const appInfo = useAppSelector((state) => state.app.info);
  const items = useAppSelector((state) => state.cart.items);

  const totalSum = (...values: number[]) => {
    return values
      .reduce((prev, curr) => prev + curr)
      .toLocaleString(appInfo?.locale, {
        currency: appInfo?.ccy,
        style: 'currency',
        minimumFractionDigits: 2,
      });
  };

  return (
    <div className="flex-1 md:max-w-80 md:min-w-[215px] w-full md:h-fit md:shadow-md">
      <div className="w-full text-center md:text-left md:py-[22px] py-[23px] px-6 md:bg-gray-50 bg-white border-b border-solid border-gray-100">
        <h1 className="font-medium text-lg text-black-100 md:font-semibold md:text-2xl md:text-gray-400">
          Basket
        </h1>
      </div>

      {(!items.length && (
        <div className="p-6 bg-white">
          <span className="font-normal text-gray-400">
            Seu carrinho está vazio
          </span>
        </div>
      )) || (
        <div>
          {items.map((item) => (
            <CartItem
              key={item.id}
              id={Number(item.id)}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              modifiers={item.modifiers}
            />
          ))}
          <div className="flex-1 items-center justify-center">
            <div className="bg-gray-50 border-t border-solid border-gray-100">
              <div className="flex justify-between items-center text-base w-full p-4 ">
                <p className="font-normal">Sub total</p>
                <span className="font-medium">
                  {totalSum(...items?.map((i) => i.price))}
                </span>
              </div>
              <div className="px-4">
                <Row />
              </div>
              <div className="flex md:gap-8 justify-between items-center text-2xl w-full p-4">
                <p className="font-light">Total:</p>
                <span className="font-bold" data-testid="cart-total-price">
                  {totalSum(...items?.map((i) => i.price * i.quantity))}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
