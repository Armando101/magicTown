function getMostLikedTowns() {
  const apiURL = `http://localhost:3001/towns?_sort=rate&_order=desc&_limit=3`;
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
