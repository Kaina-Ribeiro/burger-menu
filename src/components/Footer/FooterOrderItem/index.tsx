import Image from 'next/image';

export default function FooterOrderItem() {
  return (
    <footer className="absolute bottom-0 w-full h-[122px] md:backdrop-blur-md md:bg-white/30 bg-white z-10 px-6 pb-6 pt-2">
      <div className="flex flex-col gap-[10px] items-center justify-center">
        <div className="flex gap-4">
          <button className="bg-gray-100 px-[7px] py-[14.5px] rounded-full">
            <div className="w-[18px] h-[3px] bg-gray-400" />
          </button>
          <span className="text-black-100 font-semibold text-2xl">1</span>
          <button className="bg-primary p-[7px] rounded-full">
            <Image
              src="/images/icons/plus-icon.svg"
              alt="plus-icon"
              width={18}
              height={18}
            />
          </button>
        </div>

        <button className="bg-primary max-w-[432px] w-full h-12 rounded-[40px] text-white font-medium text-lg">
          Add to Order • 1
        </button>
      </div>
    </footer>
  );
}
