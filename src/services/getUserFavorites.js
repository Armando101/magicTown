async function getUserFavorites(id) {
  const apiURL = `http://localhost:8080/favorites?userId=${id}&_expand=town`;
  // const apiURLtoReviews = `http://localhost:8080/reviews?townId=${id}&_expand=user&_limit=6`;

  return await fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default getUserFavorites;
