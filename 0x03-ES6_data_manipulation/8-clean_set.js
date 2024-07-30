const cleanSet = (set, startString) => {
  const containString = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      containString.push(item.replace(startString, ''));
    }
  }
  return containString.join('-');
};

export default cleanSet;
