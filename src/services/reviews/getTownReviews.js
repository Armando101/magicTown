import { fetchWithoutToken } from "../../helpers/fetch";

const getTownReviews = async (id) => {
  const resp = await fetchWithoutToken(`reviews/town/${id}`);

  const body = await resp.json();

  if (body.ok) {
    return body.townReviews;
  } else {
    throw Error(body.msg);
  }
};

export default getTownReviews;
