'use client';

import { NextPage } from 'next';
import FriendsList from './FriendsList';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';

interface Props {}

const LeftSidebar: NextPage<Props> = ({}) => {
  return (
    <div className='max-w-[400px] w-full border-r-2 border-[#262C51]'>
      <div className='h-full p-4'>
        {/* it's should a component */}
        <div className='flex items-center justify-between mb-3'>
          <h2 className='text-lg text-white font-semibold'>Messages</h2>
          <BiSolidMessageSquareDetail size={23} className='text-[#007DFC]' />
        </div>
        {/* it's should a component */}
        <FriendsList />
      </div>
    </div>
  );
};

export default LeftSidebar;
