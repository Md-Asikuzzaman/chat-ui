'use client';

import { NextPage } from 'next';
import Friend from './Friend';

interface Props {}

const FriendsList: NextPage<Props> = ({}) => {
  return (
    <div className='flex-1 space-y-5'>
      <Friend name='Md Demo' lastMessage='hey there!!' id="1" />
      <Friend name='Md Demo' lastMessage='hey there!!' id="2" />
      <Friend name='Md Demo' lastMessage='hey there!!' id="3" />
      <Friend name='Md Demo' lastMessage='hey there!!' id="4" />
      <Friend name='Md Demo' lastMessage='hey there!!' id="5" />
    </div>
  );
};

export default FriendsList;
