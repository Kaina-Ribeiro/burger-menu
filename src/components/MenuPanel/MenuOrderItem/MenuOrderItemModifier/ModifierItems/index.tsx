'use client';

import RadioInput from '@/components/RadioInput';
import { useAppSelector } from '@/lib/hooks';
import { ICartItemModifierItem } from '@/types/cart';
import { IMenuItemModifierItem } from '@/types/menu';
import { priceInternalization } from '@/utils/priceInternalization';

function getTestId(str: string) {
  return str.toLowerCase().split(' ').join('-');
}

export default function ModifierItems({
  items,
  toggleItem,
  modifierItems,
}: {
  items: IMenuItemModifierItem[];
  toggleItem: (id: number) => void;
  modifierItems: ICartItemModifierItem[];
}) {
  const appInfo = useAppSelector((state) => state.app.info);

  return (
    <>
      <div className="flex flex-col">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 pr-8 leading-6 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <span>
                {priceInternalization({ price: item.price, appInfo })}
              </span>
            </div>
            <div
              data-testid={`${getTestId(item.name)}-radio`}
              onClick={() => toggleItem(item.id)}
            >
              <RadioInput
                active={!!modifierItems.find((i) => i.id === item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
