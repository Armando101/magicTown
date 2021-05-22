import { fetchWithToken } from "../../helpers/fetch";

const addUserFavorite = async (id, payload) => {
  const resp = await fetchWithToken(
    `favorites/user/${id}`,
    { ...payload },
    "POST"
  );

  const body = await resp.json();

  if (body.ok) {
    return body.favorite;
  } else {
    throw Error(body.msg);
  }
};

export default addUserFavorite;
