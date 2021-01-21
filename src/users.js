const apiUrl = "https://reqres.in/api";

// Set a default page number of 1, in case the caller doesn't pass us one.
function load(page = 1) {
  const url = `${apiUrl}/users?page=${page}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API returned status code ${res.status}`);
      }

      return res.json();
    })
    .catch((err) => {
      console.warn(err);

      // We have no users to process, return an default object
      return {
        page: 1,
        total: 1,
        data: [],
      };
    });
}

export default load;
