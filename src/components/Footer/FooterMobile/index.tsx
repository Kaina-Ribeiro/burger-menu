'use client';
import Basket from '@/components/Basket';
import Modal from '@/components/Modal';
import { useState } from 'react';

export default function FooterMobile() {
  const [isOpen, setIsOpen] = useState(true);
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
          <button className="bg-primary max-w-[345px] w-full h-12 rounded-[40px] text-white font-medium text-lg">
            Your basket • 1 Item
          </button>
        </div>
      </footer>
      <Modal isOpen={isOpen} onClose={openModal}>
        <Basket />
      </Modal>
    </>
  );
}
