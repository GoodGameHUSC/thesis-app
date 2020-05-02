
export const toLocaleString = (number) => {
  try {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  } catch (error) {
    console.warn(error);
  }
}

export const getAttr = (o, ...p) => {
  try {
    return p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)
  } catch (error) {
    return null;
  }
};