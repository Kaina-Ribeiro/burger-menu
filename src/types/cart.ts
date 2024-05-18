export interface ICartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  modifiers: ICartItemModifier[];
}

export interface ICartItemModifier {
  id: number;
  minChoices: number;
  items: ICartItemModifierItem[];
  valid: boolean;
}

export interface ICartItemModifierItem {
  id: number;
  name: string;
  price: number;
}
