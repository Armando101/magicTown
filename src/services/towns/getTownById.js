import { fetchWithoutToken } from "../../helpers/fetch";

const getTownById = async (id) => {
  const resp = await fetchWithoutToken(`towns/town/${id}`);

  const body = await resp.json();

  if (body.ok) {
    return body.town;
  } else {
    throw Error(body.msg);
  }
};

export default getTownById;
