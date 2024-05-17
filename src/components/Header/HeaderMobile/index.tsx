import { classNames } from '@/utils/classNames';
import Link from 'next/link';

interface IHeaderMobileProps {
  navigation: { name: string; path: string }[];
  pathName: string;
}

export default function HeaderMobile({
  navigation,
  pathName,
}: IHeaderMobileProps) {
  const currentPath = { ...navigation.find((p) => p.path === pathName) };

  return (
    <nav className="flex h-16">
      <Link
        className={classNames(
          'relative h-full flex items-center text-white justify-center',
        )}
        key={currentPath.path}
        href={currentPath.path || ''}
      >
        {currentPath.name}
      </Link>
    </nav>
  );
}
