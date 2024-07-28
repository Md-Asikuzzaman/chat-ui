import { NextPage } from 'next';

import Header from '@/app/components/header/Header';

import LeftSidebar from '@/app/components/sidebar/left-sidebar/LeftSidebar';
import RightSidebar from '@/app/components/sidebar/right-sidebar/RightSidebar';

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='bg-[#050711] flex flex-col h-screen text-white'>
      <Header />
      <div className='flex-1'>
        <div className='flex h-full'>
          <LeftSidebar />
          <div className='flex-1'>{children}</div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
