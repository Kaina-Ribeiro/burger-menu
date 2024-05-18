'use client';

import { addCartItem } from '@/lib/features/menu/menuSlice';
import { useAppDispatch } from '@/lib/hooks';
import { ICartItemModifier } from '@/types/cart';
import { IMenuItemProps } from '@/types/menu';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import MenuOrderItemModifier from './MenuOrderItemModifier';
import { classNames } from '@/utils/classNames';

interface IMenuOrderItemProps extends IMenuItemProps {
  useAlternativeStyle?: boolean;
}

export default function MenuOrderItem({
  id,
  name,
  description,
  image,
  modifiers,
  price,
  useAlternativeStyle = false,
}: IMenuOrderItemProps) {
  const dispatch = useAppDispatch();
  const [cartModifiers, setCartModifiers] = useState<ICartItemModifier[]>([]);

  const updateModifiers = useCallback((modifier: ICartItemModifier) => {
    setCartModifiers((prev) => {
      return [...prev.filter((i) => i.id !== modifier.id), modifier];
    });
  }, []);

  useEffect(() => {
    dispatch(
      addCartItem({
        id,
        quantity: 1,
        name,
        price,
        modifiers: cartModifiers,
      }),
    );
  }, [cartModifiers, dispatch, id, name, price]);

  return (
    <>
      <div
        className={classNames(
          'flex-1 flex flex-col ',
          useAlternativeStyle ? 'pb-[151px]' : 'pb-[122px]',
        )}
      >
        {image && (
          <Image
            style={{ objectFit: 'cover', width: '100%' }}
            src={image}
            width={503}
            height={320}
            alt={name}
            priority
          />
        )}

        <div
          className={classNames(
            'flex flex-col gap-2',
            useAlternativeStyle && !image ? 'p-6' : 'p-4',
          )}
        >
          <p className="font-bold text-2xl text-black-100">{name}</p>
          <span className="font-normal text-base text-gray-200">
            {description}
          </span>
        </div>

        {modifiers?.map((modifier) => (
          <MenuOrderItemModifier
            key={modifier.id}
            id={modifier.id}
            name={modifier.name}
            items={modifier.items}
            minChoices={modifier.minChoices}
            maxChoices={modifier.maxChoices}
            updateModifier={updateModifiers}
          />
        ))}
      </div>
    </>
  );
}
