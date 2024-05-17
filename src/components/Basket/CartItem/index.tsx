'use client';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { sumQtd, subQtd } from '@/lib/features/cart/cartSlice';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  modifiers?: string[];
}

export default function CartItem({
  id,
  name,
  price,
  quantity,
  modifiers,
}: CartItemProps) {
  const dispatch = useAppDispatch();
  const appInfo = useAppSelector((state) => state.app.info);

  const sum = () => {
    dispatch(sumQtd(id));
  };

  const sub = () => {
    dispatch(subQtd(id));
  };

  return (
    <div className="p-4 leading-5">
      <div className="font-semibold flex justify-between">
        <p>{name}</p>
        <span>
          {price.toLocaleString(appInfo?.locale, {
            currency: appInfo?.ccy,
            style: 'currency',
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
      {modifiers?.map((modifier, i) => (
        <span className="block" key={i}>
          {modifier}
        </span>
      ))}
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={sub}
          className="w-[20px] h-[20px] bg-primary-dark text-white flex items-center justify-center rounded-full"
        >
          -
        </button>
        {quantity}
        <button
          onClick={sum}
          className="w-[20px] h-[20px] bg-primary-dark text-white flex items-center justify-center rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
}
