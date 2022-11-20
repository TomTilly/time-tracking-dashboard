import Avatar from './Avatar';
import { User } from '@/data';

const AuthorCard = ({ user }: { user: User }) => {
  const { firstName, lastName, avatarSrc } = user;
  return (
    <div className="bg-violet-blue p-6 sm:p-8 rounded-xl grow flex md:flex-col gap-8 items-center md:items-start">
      <Avatar imgSrc={avatarSrc} />
      <h1 className="text-2xl lg:text-4xl font-light leading-tight">
        <span className="text-base block text-pale-blue">Report for</span>
        {firstName} {lastName}
      </h1>
    </div>
  );
};

export default AuthorCard;
