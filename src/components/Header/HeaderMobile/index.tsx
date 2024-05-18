import Image from 'next/image';
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
    <nav className="relative flex items-center justify-center w-full py-[18px]">
      <Link key={currentPath.path} href={currentPath.path || ''}>
        <h1 className="font-medium text-lg text-white p-0 m-0 hover:opacity-80">
          {currentPath.name}
        </h1>
      </Link>

      <button className="absolute right-0 hover:opacity-80">
        <Image
          src="/images/icons/header-hamburger.svg"
          width={16}
          height={16}
          alt="hamburger-icon"
        />
      </button>
    </nav>
  );
}
