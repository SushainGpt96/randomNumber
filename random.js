const getRandom = (n1 = 10, n2) => {
  let value = new Date().getMilliseconds();
  let array = [];
  let output;
  if (!n2) {
    for (let i = 1; i <= n1; i++) {
      let value2 = value * i;
      array.push(value2);
      output = array.join("");
    }
    return output.substring(0, n1);
  } else {
    let value2 = parseInt((value / 1000) * (n2 - n1) + n1);
    return value2;
  }
};
module.exports = getRandom;
