import { IMenuItem, IMenuSection } from '@/types/menu';

export function extracSectionItems(sections: IMenuSection[]) {
  const items: IMenuItem[] = [];
  sections.forEach((section) => {
    section?.items.forEach((item) => items.push(item));
  });
  return items;
}

export function filterByName(menuItems: IMenuItem[], name: string) {
  return menuItems.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase()),
  );
}
