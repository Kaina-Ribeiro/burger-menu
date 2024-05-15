import { classNames } from '@/utils/classNames';
import Image from 'next/image';

interface IMenuCard {
  isSelected: boolean;
}

export default function MenuCard({ isSelected }: IMenuCard) {
  return (
    <div
      className={classNames(
        'relative flex flex-col gap-4 px-4 h-9.125 justify-center items-center after:absolute after:block after:w-full after:h-[2px] after:bottom-0 after:transition-colors after:duration-200',
        isSelected ? 'after:bg-primary' : '',
      )}
    >
      <Image
        className="rounded-full"
        src="/images/menu/burguer.png"
        width={74}
        height={74}
        alt=""
      />

      <p className="font-semibold text-base">Burgers</p>
    </div>
  );
}
