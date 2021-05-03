async function getUserReviews(id) {
  const apiURL = `http://localhost:3001/reviews?userId=${id}&_expand=town`;

  return await fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default getUserReviews;
