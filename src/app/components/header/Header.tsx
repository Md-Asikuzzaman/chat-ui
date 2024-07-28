'use client';

import { NextPage } from 'next';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ModeControl from './ModeControl';

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className='bg-[#050711] flex py-4 items-center px-5 justify-between border-b-2 border-[#262C51] gap-10'>
      <Logo />
      <SearchBar />
      <ModeControl />
    </header>
  );
};

export default Header;
