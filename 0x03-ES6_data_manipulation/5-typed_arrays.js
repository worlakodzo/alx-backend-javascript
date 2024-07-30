const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  try {
    view[position] = value;
  } catch (error) {
    throw new Error('Position outside range');
  }
  return view;
};

export default createInt8TypedArray;
