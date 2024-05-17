import Modal from '@/components/Modal';
import { IMenuItemProps } from '@/types/menu';
import Image from 'next/image';
import MenuOrderItem from '../MenuOrderItem';
import { useState } from 'react';

export default function MenuItem({
  name,
  description,
  price,
  image,
  modifiers,
}: IMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen((i) => !i);
  return (
    <>
      <div
        className="flex w-full hover:bg-black/5 p-4 transition-colors cursor-pointer"
        onClick={openModal}
      >
        <div className="flex w-full gap-4 items-center justify-between">
          <div className="flex flex-col gap-1 overflow-hidden">
            <p className="font-medium text-base text-black-100">{name}</p>
            <span className="font-light text-base text-gray-200 truncate text-ellipsis">
              {description}
            </span>
            <span className="font-medium text-base text-gray-200">{price}</span>
          </div>
          {image && (
            <Image src={image} width={128} height={85} alt={name} priority />
          )}
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={openModal}>
        <MenuOrderItem
          name={name}
          description={description}
          price={price}
          image={image}
          modifiers={modifiers}
        />
      </Modal>
    </>
  );
}
