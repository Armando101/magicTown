import { fetchWithoutToken } from "../../helpers/fetch";

const register = async (username, password) => {
  const resp = await fetchWithoutToken(
    "auth/register",
    { username, password },
    "POST"
  );

  const body = await resp.json();

  if (body.ok) {
    localStorage.setItem("token", body.token);
    localStorage.setItem("token-init-date", new Date().getTime());
  } else {
    throw Error(body.msg);
  }

  return {
    uid: body.uid,
    username: body.username,
    avatar: body.avatar,
    description: body.description,
    role: body.role,
  };
};

export default register;
