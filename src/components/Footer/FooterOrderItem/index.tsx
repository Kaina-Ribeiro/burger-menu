'use client';
import { addToCart } from '@/lib/features/cart/cartSlice';
import { subItemQtd, sumItemQtd } from '@/lib/features/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { classNames } from '@/utils/classNames';
import Image from 'next/image';
import { useCallback } from 'react';

interface IFooterOrderItemProps {
  onClose: () => void;
  alternativeBackground?: boolean;
}

export default function FooterOrderItem({
  onClose,
  alternativeBackground,
}: IFooterOrderItemProps) {
  const appInfo = useAppSelector((state) => state.app.info);
  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => state.menu.item);

  const isValid = useCallback(() => {
    return !item?.modifiers
      .map((m) => m.items.length >= m.minChoices)
      .filter((r) => r === false).length;
  }, [item]);

  const price = useCallback(() => {
    const values: number[] = [0];

    item?.modifiers.forEach((m) => {
      m.items.forEach((i) => values.push(i.price));
    });

    values.push(item?.price ?? 0);

    return values.reduce((a, b) => (a += b)) * (item?.quantity ?? 1);
  }, [item]);

  const sumQtd = () => {
    dispatch(sumItemQtd());
  };

  const subQtd = () => {
    dispatch(subItemQtd());
  };

  const submit = () => {
    if (!item) return;

    const modifiers: string[] = [];

    item.modifiers.forEach((i) => {
      i.items.forEach((i) => {
        modifiers.push(i.name);
      });
    });

    dispatch(
      addToCart({
        ...item,
        price: price() / item.quantity,
        modifiers,
      }),
    );

    onClose();
  };
  return (
    <footer
      className={classNames(
        'absolute bottom-0 w-full h-[122px] md:backdrop-blur-md md:bg-white/30 z-10 px-6 pb-6 pt-2',
        alternativeBackground ? 'bg-white' : 'bg-gray-50r',
      )}
    >
      <div className="flex flex-col w-full gap-[10px] items-center justify-center">
        <div className="flex gap-4">
          <button
            data-testid="sub-button"
            className={classNames(
              'px-[7px] py-[14.5px] rounded-full',
              item?.quantity === 1 ? 'bg-gray-100' : 'bg-primary',
            )}
            onClick={subQtd}
          >
            <div
              className={`w-[18px] h-[3px] ${item?.quantity === 1 ? 'bg-primary' : 'bg-white'}`}
            />
          </button>
          <span
            data-testid="item-quantity"
            className="text-black-100 font-semibold text-2xl"
          >
            {item?.quantity}
          </span>
          <button
            data-testid="sum-button"
            className="bg-primary p-[7px] rounded-full"
            onClick={sumQtd}
            disabled={!isValid()}
          >
            <Image
              src="/images/icons/plus-icon.svg"
              alt="plus-icon"
              width={18}
              height={18}
            />
          </button>
        </div>

        <button
          data-testid="add-to-cart-button"
          className="bg-primary max-w-[432px] w-full h-12 rounded-[40px] text-white font-medium text-lg disabled:!bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed transition-opacity"
          onClick={submit}
          disabled={!isValid()}
        >
          <span data-testid="footer-order-price">
            Add to Order •{' '}
            {price().toLocaleString(appInfo?.locale, {
              currency: appInfo?.ccy,
              style: 'currency',
              minimumFractionDigits: 2,
            })}
          </span>
        </button>
      </div>
    </footer>
  );
}
