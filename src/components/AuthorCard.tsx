import Avatar from './Avatar';

const AuthorCard = () => {
  return (
    <div className="bg-violet-blue p-8 rounded-xl">
      <Avatar />
      <h1 className="text-4xl font-light">
        <span className="text-base block">Report for</span>
        Jeremy
        <br />
        Robson
      </h1>
    </div>
  );
};

export default AuthorCard;
