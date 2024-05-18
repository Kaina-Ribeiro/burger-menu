'use client';

import { ICartItemModifier, ICartItemModifierItem } from '@/types/cart';
import { IMenuItemModifier } from '@/types/menu';
import { useEffect, useState } from 'react';
import ModifierItems from './ModifierItems';

export default function MenuOrderItemModifier({
  id,
  minChoices,
  maxChoices,
  name,
  items,
  updateModifier,
}: IMenuItemModifier & {
  updateModifier: (modifiers: ICartItemModifier) => void;
}) {
  const [isValid, setIsValid] = useState(false);
  const [modifierItems, setModifierItems] = useState<ICartItemModifierItem[]>(
    [],
  );

  const toggleItem = (id: number) => {
    const exist = !!modifierItems.find((i) => i.id === id);

    if (exist) {
      return setModifierItems((prev) => prev.filter((i) => i.id !== id));
    }

    if (modifierItems.length >= maxChoices) return;

    const item = items.find((i) => i.id === id)!;

    setModifierItems((prev) =>
      prev.concat({
        id: item.id,
        name: item.name,
        price: item.price,
      }),
    );
  };

  useEffect(() => {
    setIsValid(modifierItems.length >= minChoices);

    updateModifier({
      id,
      items: modifierItems,
      valid: isValid,
      minChoices,
    });
  }, [modifierItems, minChoices, updateModifier, isValid, id]);

  return (
    <div key={id}>
      <div className="leading-5 bg-black/5 p-4">
        <p className="font-bold">{name}</p>
        {minChoices && (
          <>
            Select {minChoices} {minChoices > 1 ? 'options' : 'option'}
          </>
        )}
      </div>
      <ModifierItems
        items={items}
        toggleItem={toggleItem}
        modifierItems={modifierItems}
      />
    </div>
  );
}
