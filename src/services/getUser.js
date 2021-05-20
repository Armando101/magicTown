function getUser({ username, password }) {
  if (!username || !password) return;

  const apiURL = `http://localhost:3001/users?username=${username}&password=${password}`;
  return fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response[0];
    })
    .catch((err) => {
      return err;
    });
}

export default getUser;
