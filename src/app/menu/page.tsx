import Basket from '@/components/Basket';
import MenuPanel from '@/components/MenuPanel';
import SearchBar from '@/components/SearchBar';
import getMenuInfo from '@/serverActions/getMenuInfo';
import getAppInfo from '@/serverActions/getAppInfo';

function preloadMenuInfo() {
  void getMenuInfo();
}

function preloadAppInfo() {
  void getAppInfo();
}

export default async function Menu() {
  preloadMenuInfo();
  preloadAppInfo();
  const app = await getAppInfo();
  const menu = await getMenuInfo();

  return (
    <section id="menu" className="flex justify-center items-center">
      <div className="flex flex-col gap-[6px] max-w-screen-desktop w-full">
        <SearchBar />
        <div className="w-full h-83 px-10 py-8 bg-container">
          <div className="flex gap-6">
            <MenuPanel menu={menu} appInfo={app} />
            <Basket />
          </div>
        </div>
      </div>
    </section>
  );
}
