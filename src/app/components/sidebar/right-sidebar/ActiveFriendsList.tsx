'use client';

import { NextPage } from 'next';
import ActiveFriend from './ActiveFriend';

interface Props {}

const ActiveFriendsList: NextPage<Props> = ({}) => {
  return (
    <div className='flex-1'>
      <ActiveFriend />
      <ActiveFriend />
      <ActiveFriend />
      <ActiveFriend />
      <ActiveFriend />
      <ActiveFriend />
      <ActiveFriend />
    </div>
  );
};

export default ActiveFriendsList;
