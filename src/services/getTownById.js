async function getTownById(id) {
  if (id == "undefined") return;

  const apiURLtoTown = `http://localhost:8080/towns/${id}`;
  const apiURLtoReviews = `http://localhost:8080/reviews?townId=${id}&_expand=user&_limit=6`;

  const town = await fetch(apiURLtoTown).then((response) => response.json());

  const reviews = await fetch(apiURLtoReviews).then((response) =>
    response.json()
  );

  return { town, reviews };
}

export default getTownById;