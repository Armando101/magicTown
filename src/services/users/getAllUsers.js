import { fetchWithToken } from "../../helpers/fetch";

const getAllUsers = async () => {
  const resp = await fetchWithToken(`users/`, "GET");

  const body = await resp.json();

  if (body.ok) {
    return body.users;
  } else {
    throw Error(body.msg);
  }
};

export default getAllUsers;
