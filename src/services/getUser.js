function getUser({ username, password }) {
  const apiURL = `http://localhost:8080/users?username=${username}&password=${password}`;
  return fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default getUser;
