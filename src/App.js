import { useState, useEffect } from "react";

import "./App.css";
import loadUsers from "./users";
import ProfileCard from "./ProfileCard";

function App() {
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers([page]).then((result) => {
      setPages(result.total_pages);
      setPage(result.page);
      setUsers(result.data);
    });
  }, [page]);

  const changePage = () => {
    if (page === pages) {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className="App">
      <button className="paging-button" onClick={changePage}>
        {page === pages ? "Previous" : "Next"}
      </button>

      <main className="profile-cards">
        {users.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </main>
    </div>
  );
}

export default App;
