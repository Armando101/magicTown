function compareTownName(arr = [], name) {
  if (arr.length <= 1 || !name) return;

  const result = arr.filter((item) => {
    const town = { ...item.town };
    if (town.name == name) {
      return true;
    } else {
      return false;
    }
  });
  return result[0].id;
}

export default compareTownName;
