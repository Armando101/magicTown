function getMostLikedTowns() {
  const apiURL = `http://localhost:8080/towns?_sort=rate&_order=asc&_limit=3`;
  return fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default getMostLikedTowns;
