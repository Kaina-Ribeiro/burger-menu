import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';
import Banner from '@/components/Banner';
import StoreProvider from './StoreProvider';
import getAppInfo from '@/serverActions/getAppInfo';
import FooterMobile from '@/components/Footer/FooterMobile';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

function preloadAppInfo() {
  void getAppInfo();
}

export async function generateMetadata(): Promise<Metadata> {
  preloadAppInfo();
  const app = await getAppInfo();

  return {
    title: app.name,
    applicationName: app.internalName,
    description: app.description,
    openGraph: {
      title: app.name,
      description: app.description ?? '',
      locale: app.locale,
      images: app.webSettings.bannerImage,
      countryName: app.country,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preloadAppInfo();
  const app = await getAppInfo();

  return (
    <StoreProvider appInfo={app}>
      <html lang="pt-BR">
        <body className={roboto.className}>
          <div className="relative">
            <div className="min-h-screen w-full">
              <Header />
              <Banner bannerImage={app.webSettings.bannerImage} />
              <div className="bg-white md:bg-body">{children}</div>
            </div>
            <footer className="w-full h-[147px] bg-gray-50 z-10 md:hidden">
              <div className="flex flex-col h-[67px] border-y border-solid border-body items-center justify-center p-6">
                <button className="bg-white max-w-[345px] w-full h-[19px] rounded-[8px] text-primary underline font-bold text-base">
                  View Allergy information
                </button>
              </div>
            </footer>
            <FooterMobile />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
