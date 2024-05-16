import { IMenuItemProps } from '@/types/menu';
import Image from 'next/image';

export default function MenuOrderItem({
  name,
  description,
  price,
  image,
}: IMenuItemProps) {
  return (
    <div className="flex-1 flex flex-col">
      {image && (
        <Image src={image} width={503} height={320} alt={name} priority />
      )}

      <div className="flex flex-col gap-2 p-4">
        <p className="font-bold text-2xl text-black-100">{name}</p>
        <span className="font-normal text-base text-gray-200">
          {description}
        </span>
      </div>

      <div>
        <p className="font-normal text-base text-gray-200">{description}</p>
      </div>
    </div>
  );
}
