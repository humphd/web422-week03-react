import './ProfileCard.css';

import Avatar from './Avatar';
import UserInfo from './UserInfo';

function ProfileCard({id, name, email, avatarUrl}) {
  return (
    <section id={`user-${id}`} className="profile-card">
      <Avatar imgUrl={avatarUrl} name={name} />
      <UserInfo name={name} email={email} />
    </section>
  )
}

export default ProfileCard;
