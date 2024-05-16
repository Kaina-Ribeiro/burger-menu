import { classNames } from '@/utils/classNames';
import Image from 'next/image';

interface IMenuCard {
  isSelected: boolean;
  image: string;
  name: string;
}

export default function MenuCard({ isSelected, image, name }: IMenuCard) {
  return (
    <div
      className={classNames(
        'relative flex flex-col gap-4 px-4 h-9.125 justify-center items-center after:absolute after:block after:w-full after:h-[2px] after:bottom-0 after:transition-colors after:duration-200',
        isSelected ? 'after:bg-primary' : '',
      )}
    >
      <div className="w-[74px] h-[74px] relative rounded-full overflow-hidden">
        <Image
          className="w-auto h-auto"
          src={image}
          alt={name}
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <p className="font-semibold text-base">{name}</p>
    </div>
  );
}
