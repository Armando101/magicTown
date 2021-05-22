import { fetchWithToken } from "../../helpers/fetch";

const getUserFavorites = async (id) => {
  const resp = await fetchWithToken(`favorites/user/${id}`);

  const body = await resp.json();

  if (body.ok) {
    return body.userFavorites;
  } else {
    throw Error(body.msg);
  }
};

export default getUserFavorites;
