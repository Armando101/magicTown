import { fetchWithoutToken } from "../../helpers/fetch";

const getTownByKeyword = async (keyword) => {
  if (keyword == "" || keyword == null) return;

  const resp = await fetchWithoutToken(`towns/query/${keyword}`);

  const body = await resp.json();

  if (body.ok) {
    return body.towns;
  } else {
    throw Error(body.msg);
  }
};

export default getTownByKeyword;
