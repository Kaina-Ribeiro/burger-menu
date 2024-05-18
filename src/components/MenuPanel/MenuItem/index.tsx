'use client';

import Modal from '@/components/Modal';
import { IMenuItemProps } from '@/types/menu';
import Image from 'next/image';
import MenuOrderItem from '../MenuOrderItem';
import { useState, useEffect } from 'react';
import FooterOrderItem from '@/components/Footer/FooterOrderItem';
import { useAppSelector } from '@/lib/hooks';
import { priceInternalization } from '@/utils/priceInternalization';
import useMediaQuery from '@/hooks/useMediaQuery';

function getTestId(str: string) {
  return str.toLowerCase().split(' ').join('-');
}

export default function MenuItem({
  id,
  name,
  description,
  price,
  image,
  modifiers,
}: IMenuItemProps) {
  const appInfo = useAppSelector((state) => state.app.info);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen((i) => !i);
  const [amount, setAmount] = useState(0);
  const items = useAppSelector((state) => state.cart.items);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const useAlternativeStyle = !!(isMobile && modifiers && modifiers.length > 0);

  useEffect(() => {
    const qtds = items
      .filter((i) => i.id.toString().split('.')[0] === id.toString())
      .map((i) => i.quantity);

    if (!qtds.length) return setAmount(0);

    setAmount(qtds.reduce((a, b) => (a += b)));
  }, [id, items]);

  return (
    <>
      <div
        data-testid={`${getTestId(name)}-item`}
        className="flex w-full hover:bg-black/5 p-4 transition-colors cursor-pointer"
        onClick={openModal}
      >
        <div className="flex w-full gap-4 items-center justify-between">
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="font-medium text-base text-black-100 flex items-center gap-2">
              {amount > 0 && (
                <div className="bg-primary text-white w-[18px] h-[18px] inline rounded-md text-center">
                  <span
                    data-testid={`${getTestId(name)}-item-amount`}
                    className="font-medium text-sm"
                  >
                    {amount}
                  </span>
                </div>
              )}{' '}
              <span>{name}</span>
            </div>
            <span className="font-light text-base text-gray-200 md:truncate max-w-sm text-ellipsis line-clamp-2 md:line-clamp-none">
              {description}
            </span>
            <span
              data-testid={`${getTestId(name)}-item-price`}
              className="font-medium text-base text-gray-200"
            >
              {priceInternalization({ price, appInfo })}
            </span>
          </div>
          {image && (
            <Image src={image} width={128} height={85} alt={name} priority />
          )}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={openModal}
        modalFooter={
          <FooterOrderItem
            alternativeBackground={useAlternativeStyle}
            onClose={openModal}
          />
        }
        boxShadow={useAlternativeStyle}
        fullHeight={useAlternativeStyle}
      >
        <MenuOrderItem
          id={id}
          name={name}
          description={description}
          price={price}
          image={image}
          modifiers={modifiers}
          useAlternativeStyle={!useAlternativeStyle}
        />
      </Modal>
    </>
  );
}
