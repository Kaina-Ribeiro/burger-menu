'use client';

import { classNames } from '@/utils/classNames';
import Image from 'next/image';
import { ReactNode, useEffect } from 'react';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
  modalFooter?: ReactNode;
  boxShadow?: boolean;
  fullHeight?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  modalFooter,
  boxShadow,
  fullHeight = true,
}: IModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          data-testid="modal"
          className="fixed inset-0 bg-[#000000A6] flex justify-center items-center z-20"
        >
          <div
            className={classNames(
              'flex relative sm:w-[480px] sm:h-[720px] w-full rounded-lg md:bg-white ',
              fullHeight ? 'h-full bg-gray-50' : 'h-fit bg-white',
            )}
          >
            <button
              className={classNames(
                'absolute top-5 right-4 p-2 rounded-full bg-white',
                boxShadow ? 'shadow-sm' : '',
              )}
              onClick={onClose}
              data-testid="modal-close-button"
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
            {modalFooter}
          </div>
        </div>
      )}
    </>
  );
}
