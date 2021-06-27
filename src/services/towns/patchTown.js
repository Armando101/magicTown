import { fetchWithToken } from "../../helpers/fetch";

const patchTown = async (id, rate) => {
  const resp = await fetchWithToken(`towns/town/${id}`, { ...rate }, "PATCH");

  const body = await resp.json();

  if (body.ok) {
    return body.updatedTown;
  } else {
    throw Error(body.msg);
  }
};

export default patchTown;
