'use client';
import { classNames } from '@/utils/classNames';
import { useState } from 'react';

interface IAccordion {
  headerTitle: string;
  children?: any;
}

export default function Accordion({ headerTitle, children }: IAccordion) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => setIsOpen((s) => !s);

  return (
    <div id="accordion-open" data-accordion="open">
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full px-4 font-medium gap-3"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="false"
          aria-controls="accordion-open-body-1"
          onClick={toggleContent}
        >
          <span className="flex items-center text-2xl">{headerTitle}</span>
          <svg
            data-accordion-icon
            className={classNames(
              'w-3 h-3 shrink-0',
              isOpen ? '' : 'rotate-180',
            )}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>

      <div
        id="accordion-open-body-1"
        className={isOpen ? 'block' : 'hidden'}
        aria-labelledby="accordion-open-heading-1"
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
