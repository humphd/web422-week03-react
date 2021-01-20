import { useState } from 'react';

import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  const [user, setUser] = useState({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  return (
    <div className="App">
      <ProfileCard user={user} />
    </div>
  );
}

export default App;
