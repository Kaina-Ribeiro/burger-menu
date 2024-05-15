import Accordion from '../Accordion';
import MenuCard from './MenuCard';
import MenuItem from './MenuItem';

export default function MenuPanel() {
  return (
    <div className="flex flex-col bg-white max-w-xl w-full h-67.9 gap-14">
      <div className="flex gap-3">
        <MenuCard isSelected />
        <MenuCard isSelected={false} />
        <MenuCard isSelected={false} />
      </div>
      <Accordion headerTitle="Burgers">
        <div className="flex flex-col gap-4">
          <MenuItem
            title="Hardcore"
            description="180g angus beef burger, plus ribs, gruyere cheese..."
            price="R$33,00"
            image="/images/menu/hardcore.png"
          />
          <MenuItem
            title="Hardcore"
            description="180g angus beef burger, plus ribs, gruyere cheese..."
            price="R$33,00"
            image="/images/menu/hardcore.png"
          />
          <MenuItem
            title="Hardcore"
            description="180g angus beef burger, plus ribs, gruyere cheese..."
            price="R$33,00"
            image="/images/menu/hardcore.png"
          />
        </div>
      </Accordion>

      <Accordion headerTitle="Drinks">
        <div className="flex flex-col gap-4">
          <MenuItem
            title="Hardcore"
            description="180g angus beef burger, plus ribs, gruyere cheese..."
            price="R$33,00"
            image="/images/menu/hardcore.png"
          />
          <MenuItem
            title="Hardcore"
            description="180g angus beef burger, plus ribs, gruyere cheese..."
            price="R$33,00"
            image="/images/menu/hardcore.png"
          />
          <MenuItem
            title="Hardcore"
            description="180g angus beef burger, plus ribs, gruyere cheese..."
            price="R$33,00"
            image="/images/menu/hardcore.png"
          />
        </div>
      </Accordion>
    </div>
  );
}
