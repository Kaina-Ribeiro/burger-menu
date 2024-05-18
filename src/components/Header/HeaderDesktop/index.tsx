import { classNames } from '@/utils/classNames';
import Link from 'next/link';

interface IHeaderDesktopProps {
  navigation: { name: string; path: string }[];
  pathName: string;
}

export default function HeaderDesktop({
  navigation,
  pathName,
}: IHeaderDesktopProps) {
  return (
    <nav className="flex h-[52px]">
      {navigation.map((item) => {
        return (
          <Link
            className={classNames(
              'relative w-[232px] h-full flex items-center text-white justify-center after:absolute after:block after:w-full after:h-[5px] after:bottom-0 after:transition-colors after:duration-200 hover:opacity-80',
              pathName === item.path ? `after:bg-white` : '',
            )}
            key={item.path}
            href={item.path}
          >
            <span className="font-normal text-xl">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
