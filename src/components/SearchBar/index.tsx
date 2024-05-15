import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function SearchBar() {
  return (
    <div className="flex items-center border rounded-md border-[#8A94A4] overflow-hidden">
      <label htmlFor="search" className="py-[10px] px-[12px]">
        <MagnifyingGlassIcon className="w-5 h-5 text-[#8A94A4]" />
      </label>
      <input
        placeholder="Search menu items"
        className="w-full focus:outline-none placeholder:text-gray-900"
        type="text"
      />
    </div>
  );
}
