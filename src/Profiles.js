import ProfileCard from "./ProfileCard";

function Profiles({ users }) {
  // We need to provide a unique way to identify React Elements in a list
  // so that React can map the data items in users to <ProfileCard> elements.
  // We'll use the user's id, which is a perfect fit for this case.
  return users.map((user) => <ProfileCard key={user.id} user={user} />);
}

export default Profiles;
