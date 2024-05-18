export interface IMenuItem {
  id: number;
  name: string;
  description: string | null;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: IMenuItemModifier[];
  images: IMenuItemImage[];
  available: boolean;
}

export interface IMenuItemProps
  extends Pick<IMenuItem, 'name' | 'description' | 'modifiers' | 'id'> {
  image: string;
  price: number;
  onClick?: () => void;
}

export interface IMenuItemModifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: IMenuItemModifierItem[];
}

export interface IMenuItemModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
}

export interface IMenuItemImage {
  id: number;
  image: string;
}

export interface IMenuSection {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images?: IMenuItemImage[];
  items: IMenuItem[];
}

export interface IRestaurantMenu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: IMenuSection[];
}
