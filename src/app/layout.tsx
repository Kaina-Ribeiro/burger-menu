import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Banner from '@/components/Banner';
import StoreProvider from './StoreProvider';
import getAppInfo from '@/serverActions/getAppInfo';

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
  return (
    <StoreProvider>
      <html lang="pt-BR">
        <body className={inter.className}>
          <Header />
          <Banner />
          <div className="p-4 bg-body">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
