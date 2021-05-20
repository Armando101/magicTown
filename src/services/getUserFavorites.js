function getUserFavorites(id) {
  if (!id) return;

  const apiURL = `http://localhost:3001/favorites?userId=${id}&_expand=town`;

  return fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export default getUserFavorites;
