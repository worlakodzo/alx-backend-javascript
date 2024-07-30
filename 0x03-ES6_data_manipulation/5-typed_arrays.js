const createInt8TypedArray = (length, position, value) => {
    const buffer = new ArrayBuffer(length);
    const view = new Int8Array(buffer);
    view[position] = value;
    return view;
}

export default createInt8TypedArray;