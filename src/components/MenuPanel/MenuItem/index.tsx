import { IMenuItem } from '@/types/menu';
import Image from 'next/image';

interface IMenuItemProps extends Pick<IMenuItem, 'name' | 'description'> {
  image: string;
  price: string;
}

export default function MenuItem({
  name,
  description,
  price,
  image,
}: IMenuItemProps) {
  return (
    <div className="flex w-full hover:bg-black/5 p-4 transition-colors cursor-pointer">
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
  );
}
