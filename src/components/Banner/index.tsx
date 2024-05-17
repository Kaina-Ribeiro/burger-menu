import Image from 'next/image';

interface IBannerProps {
  bannerImage: string;
}
export default function Banner({ bannerImage }: IBannerProps) {
  return (
    <div className="bg-primary-dark h-[150px]">
      <Image
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        src={bannerImage}
        alt="Banner"
        width={1440}
        height={150}
        priority
      />
    </div>
  );
}
