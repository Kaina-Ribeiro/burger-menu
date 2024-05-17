import Basket from '@/components/Basket';
import MenuPanel from '@/components/MenuPanel';
import InputSearchBar from '@/components/Input/InputSearchBar';
import getMenuInfo from '@/serverActions/getMenuInfo';

function preloadMenuInfo() {
  void getMenuInfo();
}

export default async function Menu() {
  preloadMenuInfo();
  const menu = await getMenuInfo();

  return (
    <section id="menu" className="flex justify-center items-center">
      <div className="flex flex-col gap-[6px] max-w-screen-desktop w-full">
        <InputSearchBar />
        <div className="w-full h-83 px-10 py-8 bg-container">
          <div className="flex gap-6">
            <MenuPanel menu={menu} />
            <Basket />
          </div>
        </div>
      </div>
    </section>
  );
}
