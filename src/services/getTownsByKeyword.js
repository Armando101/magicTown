function getTownsByKeyword(keyword) {
  const apiURL = `http://localhost:8080/towns?q=${keyword}`;
  return fetch(apiURL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default getTownsByKeyword;
