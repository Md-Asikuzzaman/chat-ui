'use client';

import { NextPage } from 'next';

import { IoSearchOutline } from 'react-icons/io5';

interface Props {}

const SearchBar: NextPage<Props> = ({}) => {
  return (
    <form className='max-w-[800px] w-full'>
      <div className='relative'>
        <IoSearchOutline
          size={22}
          className='absolute top-0 left-0 text-white my-[13px] mx-[12px]'
        />
        <input
          type='text'
          placeholder='Search'
          className='ps-10 bg-[#0D1126] outline-none border-2 border-[#262C51] text-white p-[10px] rounded-md w-full placeholder:opacity-90 placeholder:text-white'
        />
      </div>
    </form>
  );
};

export default SearchBar;
