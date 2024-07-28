import { NextPage } from 'next';
import HomeClient from './HomeClient';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <HomeClient />
    </div>
  );
};

export default Page;
