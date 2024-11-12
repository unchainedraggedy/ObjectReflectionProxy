export default function orderByProps(obj, order) {
  const result = [];
  order.forEach((key) => {
    if (key in obj) {
      result.push({ key, value: obj[key] });
    }
  });
  Object.keys(obj)
    .filter((key) => !order.includes(key))
    .sort()
    .forEach((key) => {
      result.push({ key, value: obj[key] });
    });
  return result;
}
