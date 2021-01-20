import { useState, useEffect } from "react";

import "./App.css";
import load from "./users";
import ProfileCard from "./ProfileCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    load().then((results) => setUsers(results));
  }, []);

  const profileCards = users.map((user) => (
    <ProfileCard key={user.id} user={user} />
  ));

  return <div className="App">{profileCards}</div>;
}

export default App;
