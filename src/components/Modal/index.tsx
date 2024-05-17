'use client';

import Image from 'next/image';
import FooterModal from '../Footer/FooterModal';
import { useEffect } from 'react';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

export default function Modal({ isOpen, onClose, children }: IModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-[#000000A6] flex justify-center items-center z-20">
          <div className="flex relative sm:w-[480px] sm:h-[720px] w-full h-full rounded-lg md:bg-white bg-gray-50">
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
            <div className="flex-1 overflow-y-scroll scrollbar-none">
              {children}
            </div>

            <FooterModal />
          </div>
        </div>
      )}
    </>
  );
}
