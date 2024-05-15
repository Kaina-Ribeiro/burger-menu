import Basket from '@/components/Basket';
import MenuPanel from '@/components/MenuPanel';

export default function menuLayout() {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-screen-desktop w-full h-83 px-10 py-8 bg-container">
        <div className="flex gap-6">
          <MenuPanel />
          <Basket />
        </div>
      </div>
    </section>
  );
}
