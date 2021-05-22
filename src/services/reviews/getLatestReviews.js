import { fetchWithoutToken } from "../../helpers/fetch";

const getLatestReviews = async () => {
  const resp = await fetchWithoutToken("reviews/latest");

  const body = await resp.json();

  if (body.ok) {
    return body.latestReviews;
  } else {
    throw Error(body.msg);
  }
};

export default getLatestReviews;
