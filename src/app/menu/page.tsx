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
    <section id="menu" className="flex justify-center items-center md:px-4">
      <div className="flex flex-col items-center justify-center md:gap-[6px] md:max-w-screen-lg w-full">
        <div className="w-full py-4 px-4 md:px-0">
          <InputSearchBar />
        </div>
        <div className="flex justify-center w-full md:h-83 md:bg-gray-50">
          <div className="flex w-full md:h-[1071px] h-full md:px-10 md:pt-8 gap-6">
            <MenuPanel menu={menu} />
            <div className="flex-1 hidden md:block">
              <Basket />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
