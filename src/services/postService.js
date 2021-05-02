async function postService(url = "reviews", payload) {
  const apiURL = `http://localhost:8080/${url}`;

  return await fetch(apiURL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}

export default postService;
