function compareTownName(arr = [], name) {
  if (!arr || arr.length <= 0 || !name) return;

  const result = arr.filter((item) => {
    const town = { ...item.town };
    if (town.name == name) {
      return true;
    } else {
      return false;
    }
  });
  if (result.length == 0) {
    return null;
  }
  return result[0].id;
}

export default compareTownName;
