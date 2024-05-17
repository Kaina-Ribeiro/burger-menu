'use client';

import Accordion from '../Accordion';
import MenuCard from './MenuCard';
import MenuItem from './MenuItem';
import { IRestaurantMenu, IMenuSection } from '@/types/menu';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';

interface MenuPanelProps {
  menu: IRestaurantMenu;
}

export default function MenuPanel({ menu }: MenuPanelProps) {
  const appInfo = useAppSelector((state) => state.app.info);
  const [selectedSection, setSelectedSection] = useState<IMenuSection>(
    menu.sections?.[0],
  );

  return (
    <div className="flex flex-col md:max-w-xl w-full bg-white gap-14 md:shadow-md md:py-5">
      <div className="px-4">
        <div className="flex items-center justify-center md:justify-start gap-3">
          {menu.sections.map((section) => (
            <div
              className="cursor-pointer"
              key={section.id}
              onClick={() => setSelectedSection(section)}
            >
              <MenuCard
                name={section.name}
                image={section.images?.[0]?.image ?? ''}
                isSelected={section.id === selectedSection.id}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedSection && (
        <Accordion key={selectedSection.id} headerTitle={selectedSection.name}>
          <div className="flex flex-col">
            {selectedSection.items.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description ?? ''}
                price={item.price.toLocaleString(appInfo?.locale, {
                  currency: appInfo?.ccy,
                  minimumFractionDigits: 2,
                  style: 'currency',
                })}
                modifiers={item?.modifiers}
                image={item?.images?.[0].image}
              />
            ))}
          </div>
        </Accordion>
      )}
    </div>
  );
}
