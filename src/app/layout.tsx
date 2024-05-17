import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Banner from '@/components/Banner';
import StoreProvider from './StoreProvider';
import getAppInfo from '@/serverActions/getAppInfo';
import FooterMobile from '@/components/Footer/FooterMobile';

const inter = Inter({ subsets: ['latin'] });

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
        <body className={inter.className}>
          <div className="relative">
            <div className="h-screen w-full">
              <Header />
              <Banner bannerImage={app.webSettings.bannerImage} />
              <div className="bg-white md:bg-body">{children}</div>
            </div>
            <FooterMobile />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
