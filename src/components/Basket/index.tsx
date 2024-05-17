'use client';
import { useAppSelector } from '@/lib/hooks';
import CartItem from './CartItem';

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
    <div className="flex-1 h-fit bg-white shadow-md">
      <div className="w-full p-4 bg-black/5">
        <h2 className="font-semibold w-fit">Carrinho</h2>
      </div>
      {(!items.length && (
        <div className="p-4">
          <span>Seu carrinho está vazio</span>
        </div>
      )) || (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              modifiers={item.modifiers}
            />
          ))}
          <div className="flex justify-between items-center text-2xl w-full p-4 bg-black/5">
            <p>Total:</p>
            <span className="font-bold">
              {totalSum(...items?.map((i) => i.price * i.quantity))}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
