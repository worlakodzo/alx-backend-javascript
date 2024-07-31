const updateUniqueItems = (map) => {
  try {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      } else {
        throw new Error('Cannot process');
      }
    }
    return map;
  } catch (error) {
    throw new Error('Cannot process');
  }
};

export default updateUniqueItems;
