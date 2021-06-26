import { fetchWithToken } from "../../helpers/fetch";

const deleteUser = async (id) => {
  const resp = await fetchWithToken(`users/${id}`, {}, "DELETE");

  const body = await resp.json();

  if (body.ok) {
    return body;
  } else {
    throw Error(body.msg);
  }
};

export default deleteUser;
