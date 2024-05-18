'use client';
import Basket from '@/components/Basket';
import Modal from '@/components/Modal';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import FooterBasketCheckout from '../FooterBasketCheckout';

export default function FooterMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const openModal = () => setIsOpen((i) => !i);

  return (
    <>
      <footer className="sticky bottom-0 w-full max-h-[147px] bg-gray-50 z-10 md:hidden">
        <div className="flex flex-col h-[67px] border-y border-solid border-body items-center justify-center p-6">
          <button className="bg-white max-w-[345px] w-full h-[19px] rounded-[8px] text-primary underline font-bold text-base">
            View Allergy information
          </button>
        </div>

        <div className="flex flex-col h-20 items-center justify-center px-6 pb-6 pt-2">
          <button
            className="bg-primary max-w-[345px] w-full h-12 rounded-[40px] text-white font-medium text-lg"
            onClick={openModal}
          >
            Your basket • 1 allergy
          </button>
        </div>
      </footer>
      <Modal
        isOpen={isOpen && isMobile}
        onClose={openModal}
        modalFooter={<FooterBasketCheckout />}
      >
        <Basket />
      </Modal>
    </>
  );
}
