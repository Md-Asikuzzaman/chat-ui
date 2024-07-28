import { NextPage } from 'next';
import ConversationsClient from './ConversationsClient';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <ConversationsClient />
    </div>
  );
};

export default Page;
