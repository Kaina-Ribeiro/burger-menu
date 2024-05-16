import Image from 'next/image';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

export default function Modal({ isOpen, onClose, children }: IModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-[#000000A6] flex justify-center items-center">
        <div className="flex relative w-[480px] h-[720px] rounded-lg bg-white">
          <button
            className="absolute top-5 right-4 shadow-sm p-2 rounded-full bg-white"
            onClick={onClose}
          >
            <Image
              src="/images/icons/chevron.svg"
              width={12}
              height={12}
              alt="arrow"
            />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
