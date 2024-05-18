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
        `relative flex flex-col gap-4 px-4 h-9.125 justify-center items-center
          after:absolute
          after:block
          after:w-full
          after:h-[2px]
          after:bottom-0
          after:transition
          after:duration-200
        `,
        isSelected ? 'after:bg-primary' : '',
      )}
    >
      <div
        data-testid={`${name.toLowerCase()}-tab-selector`}
        className={classNames(
          'flex items-center justify-center h-[82px] w-[82px] rounded-[50px] p-[2px] border-2 border-solid  transition-all duration-200',
          isSelected ? 'border-primary' : 'border-transparent',
        )}
      >
        <Image
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '50px',
          }}
          src={image}
          alt={name}
          loading="lazy"
          width={112}
          height={75}
        />
      </div>
      <p className="font-semibold text-base text-black-100">{name}</p>
    </div>
  );
}
