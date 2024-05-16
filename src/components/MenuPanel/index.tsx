'use client';

import Accordion from '../Accordion';
import MenuCard from './MenuCard';
import MenuItem from './MenuItem';
import { IRestaurantMenu, IMenuSection } from '@/types/menu';
import { IAppInfo } from '@/types/app-info';
import { useState } from 'react';
import Modal from '../Modal';
import MenuOrderItem from './MenuOrderItem';

interface MenuPanelProps {
  menu: IRestaurantMenu;
  appInfo: IAppInfo;
}

export default function MenuPanel({ menu, appInfo }: MenuPanelProps) {
  const [selectedSection, setSelectedSection] = useState<IMenuSection>(
    menu.sections?.[0],
  );

  const openModal = () => {
    return '';
  };

  return (
    <div className="flex flex-col bg-white max-w-xl w-full gap-14 shadow-md py-5">
      <div className="px-4">
        <div className="flex gap-3">
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
                price={item.price.toLocaleString(appInfo.locale, {
                  currency: appInfo.ccy,
                  minimumFractionDigits: 2,
                  style: 'currency',
                })}
                image={item?.images?.[0].image}
                onClick={openModal}
              />
            ))}
          </div>
        </Accordion>
      )}
    </div>
  );
}
