import { useState } from "react";

import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
  ]);

  const profileCards = users.map((user) => (
    <ProfileCard key={user.id} user={user} />
  ));

  return <div className="App">{profileCards}</div>;
}

export default App;
