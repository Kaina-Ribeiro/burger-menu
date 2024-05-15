import Image from 'next/image';

interface IMenuItem {
  title: string;
  description: string;
  price: string;
  image: any;
}

export default function MenuItem({ title, description, price }: IMenuItem) {
  return (
    <div className="flex w-full">
      <div className="flex w-full gap-4 items-center justify-between">
        <div className="flex flex-col">
          <p className="font-medium text-base">{title}</p>
          <span className="font-light text-base">{description}</span>
          <span className="font-medium text-base">{price}</span>
        </div>

        <Image
          src="/images/menu/hardcore.png"
          width={128}
          height={85}
          alt="hardcore"
        />
      </div>
    </div>
  );
}
