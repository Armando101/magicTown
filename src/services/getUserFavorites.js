function getUserFavorites(id) {
  const apiURL = `http://localhost:8080/favorites?userId=${id}&_expand=town`;

  return fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default getUserFavorites;
