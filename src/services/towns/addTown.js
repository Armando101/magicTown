import { fetchWithToken } from "../../helpers/fetch";

const addTown = async (payload) => {
  const resp = await fetchWithToken(`towns/`, { ...payload }, "POST");

  const body = await resp.json();

  if (body.ok) {
    return body;
  } else {
    throw Error(body.msg);
  }
};

export default addTown;
