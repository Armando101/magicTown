function updtReviewRate(id, payload) {
  const apiURL = `http://localhost:3001/towns/${id}`;

  return fetch(apiURL, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default updtReviewRate;
