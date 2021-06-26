import { fetchWithToken } from "../../helpers/fetch";

const getAllReviews = async () => {
  const resp = await fetchWithToken(`reviews/`, "GET");

  const body = await resp.json();

  if (body.ok) {
    return body.reviews;
  } else {
    throw Error(body.msg);
  }
};

export default getAllReviews;
