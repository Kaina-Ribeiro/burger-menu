import Image from 'next/image';
import getAppInfo from '@/serverActions/getAppInfo';

function preloadAppInfo() {
  void getAppInfo();
}

export default async function Banner() {
  preloadAppInfo();
  const app = await getAppInfo();

  return (
    <div className="bg-primary-dark">
      <Image
        src={app.webSettings.bannerImage}
        alt="Banner"
        width={1440}
        height={150}
        priority
        className="mx-auto"
      />
    </div>
  );
}
