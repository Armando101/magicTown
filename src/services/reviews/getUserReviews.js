import { fetchWithToken } from "../../helpers/fetch";

const getTownReviews = async (id) => {
  const resp = await fetchWithToken(`reviews/user/${id}`);

  const body = await resp.json();

  if (body.ok) {
    return body.userReviews;
  } else {
    throw Error(body.msg);
  }
};

export default getTownReviews;
