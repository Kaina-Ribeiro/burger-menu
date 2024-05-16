'use client';
import Image from 'next/image';
import { useState } from 'react';
interface IAccordion {
  headerTitle: string;
  children?: any;
}

export default function Accordion({ headerTitle, children }: IAccordion) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleContent = () => setIsOpen((s) => !s);

  return (
    <div data-accordion="open">
      <h2 className="px-4">
        <button
          type="button"
          className="flex items-center justify-between w-full font-medium gap-3"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="false"
          aria-controls="accordion-open-body-1"
          onClick={toggleContent}
        >
          <span className="flex items-center text-2xl text-black-100">
            {headerTitle}
          </span>
          <Image
            className={isOpen ? '' : 'rotate-180'}
            src="/images/icons/arrow-icon.svg"
            width={17}
            height={10}
            alt="arrow"
          />
        </button>
      </h2>

      <div
        className={isOpen ? 'block' : 'hidden'}
        aria-labelledby="accordion-open-heading-1"
      >
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
}
