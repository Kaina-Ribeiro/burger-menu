'use client';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { sumQtd, subQtd } from '@/lib/features/cart/cartSlice';
import Image from 'next/image';

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
    <div className="p-4 leading-5 bg-white">
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
          className="bg-primary w-5 h-5 px-1 py-[8.5px] rounded-full"
        >
          <div className="w-[12px] h-[3px] bg-white" />
        </button>
        <span className="font-bold text-black-100">{quantity}</span>
        <button onClick={sum} className="bg-primary w-5 h-5 p-1 rounded-full">
          <Image
            src="/images/icons/plus-icon.svg"
            alt="plus-icon"
            width={12}
            height={12}
          />
        </button>
      </div>
    </div>
  );
}
