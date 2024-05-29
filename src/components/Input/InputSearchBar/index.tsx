'use client';

import { searchItem } from '@/lib/features/search/searchSlice';
import { useAppDispatch } from '@/lib/hooks';

import { debounce } from 'lodash';
import Image from 'next/image';
import { ChangeEvent } from 'react';

export default function InputSearchBar() {
  const dispatch = useAppDispatch();

  const debouncedSearch = debounce((name) => {
    dispatch(searchItem(name));
  }, 400);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    debouncedSearch(value);
  };

  return (
    <div className="flex items-center border rounded-md border-[#8A94A4] overflow-hidden bg-white w-full">
      <label htmlFor="search" className="py-[10px] px-[12px] bg-white">
        <Image
          src="/images/icons/search-icon.svg"
          width={19.71}
          height={19.71}
          alt="search-icon"
        />
      </label>
      <input
        placeholder="Search menu items"
        className="w-full focus:outline-none placeholder:text-gray-900"
        onChange={handleChange}
        type="text"
      />
    </div>
  );
}
