'use client';

import { IMenuItemProps } from '@/types/menu';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import RadioInput from '../../RadioInput';

export default function MenuOrderItem({
  name,
  description,
  image,
  modifiers,
}: IMenuItemProps) {
  const appInfo = useAppSelector((state) => state.app.info);

  return (
    <div className="flex-1 flex flex-col pb-[122px]">
      {image && (
        <Image src={image} width={503} height={320} alt={name} priority />
      )}

      <div className="flex flex-col gap-2 p-4">
        <p className="font-bold text-2xl text-black-100">{name}</p>
        <span className="font-normal text-base text-gray-200">
          {description}
        </span>
      </div>

      {modifiers?.map((modifier) => (
        <div key={modifier.id} className="">
          <div className="leading-5 bg-black/5 p-4">
            <p className="font-bold">{modifier.name}</p>
            {modifier.minChoices && (
              <>
                Select {modifier.minChoices}{' '}
                {modifier.minChoices > 1 ? 'options' : 'option'}
              </>
            )}
          </div>

          <div className="flex flex-col">
            {modifier.items.map((item) => (
              <div
                key={item.id}
                className="p-4 pr-8 leading-6 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <span>
                    {item.price.toLocaleString(appInfo?.locale, {
                      currency: appInfo?.ccy,
                      style: 'currency',
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <RadioInput active={false} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
