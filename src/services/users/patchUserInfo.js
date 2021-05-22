import { fetchWithToken } from "../../helpers/fetch";

const patchUserInfo = async (id, payload) => {
  const resp = await fetchWithToken(`users/${id}`, { ...payload }, "PATCH");

  const body = await resp.json();

  if (body.ok) {
    return body.updatedUser;
  } else {
    throw Error(body.msg);
  }
};

export default patchUserInfo;
