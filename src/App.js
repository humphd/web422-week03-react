import { useState, useEffect } from "react";

import "./App.css";
import loadUsers from "./users";
import Profiles from "./Profiles";
import PagingButton from "./PagingButton";

function App() {
  // We'll manage some state in our App component.  We set some initial, default
  // state, but after the first run, the values we get will be whatever was
  // stored using the set*() function below.
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);

  // Create a side effect, such that we load the current page of
  // user profile data.  It's dependent on the current page number,
  // so if that changes, we'll re-run this effect.  If it doesn't,
  // we don't need to do anything. When the load Promise finishes,
  // we'll update our state with new values, and this will trigger
  // the component to re-render, with updated values.
  useEffect(() => {
    loadUsers(currentPage).then((result) => {
      setTotalPages(result.total_pages);
      setCurrentPage(result.page);
      setUsers(result.data);
    });
  }, [currentPage]);

  // Define a function to deal with a new page number being selected.
  // The actual event that triggers this will happen in <PagingButton>
  // but we'll define the logic on our side here.  When we get the new page,
  // we update our `pages` state, copying over the existing values, but updating
  // the current page to the new one.  Doing so will cause our effect above
  // to re-run, since the value of pages.current will have updated.
  const handlePageChange = (page) => setCurrentPage(page);

  // This is the "render" part of our component.  We return the React Elements
  // we want to use when representing our UI.  In reality, we "render" a tree
  // of elements, returning a single root element.
  return (
    <div className="App">
      <header className="paging-button">
        <PagingButton
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange}
        />
      </header>

      <main className="profile-cards">
        <Profiles users={users} />
      </main>
    </div>
  );
}

export default App;
