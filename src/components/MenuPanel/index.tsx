'use client';

import { IMenuItem, IMenuSection, IRestaurantMenu } from '@/types/menu';
import { useEffect, useState } from 'react';
import Accordion from '../Accordion';
import MenuCard from './MenuCard';
import MenuItem from './MenuItem';
import { extracSectionItems, filterByName } from '@/utils/extractSectionItems';
import { useAppSelector } from '@/lib/hooks';

interface MenuPanelProps {
  menu: IRestaurantMenu;
}

export default function MenuPanel({ menu }: MenuPanelProps) {
  const searchString = useAppSelector((state) => state.search.search);
  const [selectedSection, setSelectedSection] = useState<IMenuSection>(
    menu.sections?.[0],
  );
  const [filteredItems, setFilteredItems] = useState<IMenuItem[]>([]);

  useEffect(() => {
    if (!searchString) {
      setFilteredItems([]);
      return;
    }
    const itemsToFilter = extracSectionItems(menu.sections);
    setFilteredItems(filterByName(itemsToFilter, searchString || ''));
  }, [menu.sections, searchString]);

  return (
    <>
      {searchString ? (
        <div className="flex flex-col md:max-w-xl w-full bg-white md:shadow-md md:py-5">
          {filteredItems.length > 0 ? (
            <>
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description ?? ''}
                  price={item.price}
                  modifiers={item?.modifiers}
                  image={item?.images?.[0].image}
                />
              ))}
            </>
          ) : (
            <h1 className="font-medium text-lg text-black-100 md:font-semibold text-center p-4">
              Ops! Não encontramos nenhum produto com esse nome.
            </h1>
          )}
        </div>
      ) : (
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
            <Accordion
              key={selectedSection.id}
              headerTitle={selectedSection.name}
            >
              <div className="flex flex-col">
                {selectedSection.items.map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description ?? ''}
                    price={item.price}
                    modifiers={item?.modifiers}
                    image={item?.images?.[0].image}
                  />
                ))}
              </div>
            </Accordion>
          )}
        </div>
      )}
    </>
  );
}
