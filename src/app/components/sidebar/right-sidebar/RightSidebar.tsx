'use client';

import { NextPage } from 'next';
import ActiveFriendsList from './ActiveFriendsList';
import { HiStatusOnline } from 'react-icons/hi';

interface Props {}

const RightSidebar: NextPage<Props> = ({}) => {
  return (
    <div className='max-w-[200px] w-full border-l-2 border-[#262C51]'>
      <div className='h-full p-4'>
        {/* it's should a component */}
        <div className='flex items-center justify-between'>
          <h2 className='text-lg text-white font-semibold'>Active</h2>
          <HiStatusOnline size={23} className='text-[#007DFC]' />
        </div>
        {/* it's should a component */}
        <ActiveFriendsList />
      </div>
    </div>
  );
};

export default RightSidebar;
