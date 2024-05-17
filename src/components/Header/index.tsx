'use client';
import { usePathname } from 'next/navigation';
import HeaderDesktop from './HeaderDesktop';
import useMediaQuery from '@/hooks/useMediaQuery';
import HeaderMobile from './HeaderMobile';

const navigation = [
  {
    name: 'Menu',
    path: '/menu',
  },
  {
    name: 'Entrar',
    path: '/login',
  },
  {
    name: 'Contato',
    path: '/contact',
  },
];

export default function Header() {
  const pathName = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className="bg-primary px-4 flex justify-center">
      {isMobile ? (
        <HeaderMobile navigation={navigation} pathName={pathName} />
      ) : (
        <HeaderDesktop navigation={navigation} pathName={pathName} />
      )}
    </header>
  );
}
