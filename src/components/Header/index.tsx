'use client';
import { classNames } from '@/utils/classNames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <header className="bg-primary px-4 flex justify-center">
      <nav className="flex h-[52px]">
        {navigation.map((item) => {
          return (
            <Link
              className={classNames(
                'relative w-[232px] h-full flex items-center text-white justify-center after:absolute after:block after:w-full after:h-[5px] after:bottom-0 after:transition-colors after:duration-200',
                pathName === item.path ? `after:bg-white` : '',
              )}
              key={item.path}
              href={item.path}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
