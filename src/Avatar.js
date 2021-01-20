import './Avatar.css';

function Avatar({imgUrl, name}) {
  return (
    <img src={imgUrl} alt={name} title={name} className="profile-avatar" width="128" height="128" />
  );
}

export default Avatar;
