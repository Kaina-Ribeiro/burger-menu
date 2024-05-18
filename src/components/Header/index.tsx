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
    path: '/entrar',
  },
  {
    name: 'Contato',
    path: '/contato',
  },
];

export default function Header() {
  const pathName = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className="bg-primary px-4 flex justify-center shadow-lg">
      {isMobile ? (
        <HeaderMobile navigation={navigation} pathName={pathName} />
      ) : (
        <HeaderDesktop navigation={navigation} pathName={pathName} />
      )}
    </header>
  );
}
