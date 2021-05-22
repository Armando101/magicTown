import { fetchWithoutToken } from "../../helpers/fetch";

const getTopRatedTowns = async () => {
  const resp = await fetchWithoutToken("towns/toprated");

  const body = await resp.json();

  if (body.ok) {
    return body.topRated;
  } else {
    throw Error(body.msg);
  }
};

export default getTopRatedTowns;
