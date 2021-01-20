import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  // {
  //   "id": 1,
  //   "email": "george.bluth@reqres.in",
  //   "first_name": "George",
  //   "last_name": "Bluth",
  //   "avatar": "https://reqres.in/img/faces/1-image.jpg"
  // }

  return (
    <div className="App">
      <ProfileCard id="1" email="george.bluth" name="George Bluth" avatarUrl="https://reqres.in/img/faces/1-image.jpg" />
    </div>
  );
}

export default App;
