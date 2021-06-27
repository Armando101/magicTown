import { fetchWithToken } from "../../helpers/fetch";

const deleteReview = async (id) => {
  const resp = await fetchWithToken(`reviews/${id}`, {}, "DELETE");

  const body = await resp.json();

  if (body.ok) {
    return body;
  } else {
    throw Error(body.msg);
  }
};

export default deleteReview;
