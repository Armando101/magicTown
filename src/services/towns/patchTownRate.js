import { fetchWithToken } from "../../helpers/fetch";

const patchTownRate = async (id, rate) => {
  const resp = await fetchWithToken(`towns/town/${id}`, { ...rate }, "PATCH");

  const body = await resp.json();

  if (body.ok) {
    return body.updatedTown;
  } else {
    throw Error(body.msg);
  }
};

export default patchTownRate;
