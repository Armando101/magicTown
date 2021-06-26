import { fetchWithToken } from "../../helpers/fetch";

const getAllTowns = async () => {
  const resp = await fetchWithToken(`towns/`, "GET");

  const body = await resp.json();

  if (body.ok) {
    return body.towns;
  } else {
    throw Error(body.msg);
  }
};

export default getAllTowns;
