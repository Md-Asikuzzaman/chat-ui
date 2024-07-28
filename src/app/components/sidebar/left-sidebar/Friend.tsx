'use client';

import clsx from 'clsx';
import { NextPage } from 'next';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { RxAvatar } from 'react-icons/rx';

interface Props {
  name?: string;
  lastMessage?: string;
  isSelected?: string;
  id?: string;
}

const Friend: NextPage<Props> = ({ name, lastMessage, isSelected, id }) => {
  const { id: paramsId }: { id: string } = useParams();

  return (
    <Link
      className='flex items-center gap-3 bg-[#007efc0a] border-l-4 border-[#007DFC] p-4'
      href={`/conversations/${id}`}
    >
      <RxAvatar size={40} />
      <div>
        <p
          className={clsx(
            'text-md font-semibold ',
            paramsId == id ? 'text-[#007DFC]' : 'text-gray-200'
          )}
        >
          {name}
        </p>
        <p
          className={clsx(
            'text-sm',
            paramsId == id ? 'text-[#007DFC]' : 'text-gray-300'
          )}
        >
          {lastMessage}
        </p>
      </div>
    </Link>
  );
};

export default Friend;
