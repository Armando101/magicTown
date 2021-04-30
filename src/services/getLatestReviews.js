function getLatestReviews() {
  const apiURL = `http://localhost:8080/reviews?_expand=user&_expand=town&_sort=rate&_order=desc&_limit=3`;
  return fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default getLatestReviews;
