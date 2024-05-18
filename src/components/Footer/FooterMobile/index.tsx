'use client';

import Basket from '@/components/Basket';
import Modal from '@/components/Modal';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import FooterBasketCheckout from '../FooterBasketCheckout';
import { useAppSelector } from '@/lib/hooks';

export default function FooterMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const openModal = () => setIsOpen((i) => !i);
  const cartLength = useAppSelector((state) => state.cart.items.length);

  return (
    <>
      {isMobile && cartLength > 0 && (
        <div className="fixed bottom-0 w-full backdrop-blur-sm bg-white/30 flex flex-col h-20 items-center justify-center px-6 pb-6 pt-2">
          <button
            className="bg-primary max-w-[345px] w-full h-12 rounded-[40px] text-white font-medium text-lg"
            onClick={openModal}
          >
            Your basket • {cartLength} item
          </button>
        </div>
      )}
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
