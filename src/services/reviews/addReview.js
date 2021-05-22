import { fetchWithToken } from "../../helpers/fetch";

const addReview = async (id, payload) => {
  const resp = await fetchWithToken(
    `reviews/user/${id}`,
    { ...payload },
    "POST"
  );

  const body = await resp.json();

  if (body.ok) {
    return body.review;
  } else {
    throw Error(body.msg);
  }
};

export default addReview;
