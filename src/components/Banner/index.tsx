import Image from 'next/image';

export default function Banner() {
  return (
    <div className="bg-primary-dark">
      <div className="relative w-full h-full py-[12.33px] flex justify-center max-w-screen-lg mx-auto">
        <div className="absolute h-full w-1/2 bg-gradient-to-r from-primary-dark to-transparent z-[10] top-0 left-0"></div>
        <div className="absolute h-full w-1/2 bg-gradient-to-l from-primary-dark to-transparent z-[10] top-0 right-0"></div>
        <Image
          src="/images/banner-background.jpeg"
          alt="Banner"
          fill
          className="w-full"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="z-[1]">
          <Image
            className="opacity-90"
            src="/images/logo.png"
            alt="Logo"
            width={188}
            height={125.33}
          />
        </div>
      </div>
    </div>
  );
}
