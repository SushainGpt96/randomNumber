exports.random = () => {
  let value = Date.now().toString().split("").reverse()[1];
  return value;
};
