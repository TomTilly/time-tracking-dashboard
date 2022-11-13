import Avatar from './Avatar';
import { User } from '@/data';

const AuthorCard = ({ user }: { user: User }) => {
  const { firstName, lastName, avatarSrc } = user;
  return (
    <div className="bg-violet-blue p-8 rounded-xl grow space-y-12">
      <Avatar imgSrc={avatarSrc} />
      <h1 className="text-4xl font-light leading-tight">
        <span className="text-base block text-pale-blue">Report for</span>
        {firstName}
        <br />
        {lastName}
      </h1>
    </div>
  );
};

export default AuthorCard;
