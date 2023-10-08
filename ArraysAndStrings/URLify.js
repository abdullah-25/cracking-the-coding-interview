function URLify(str, num) {
  str = str.slice(0, num);
  return str.split(" ").join("%20");
}

const test1 = URLify("Mr John Smith    ", 13);
const test2 = URLify("Mr         John Smith", 13);
const test3 = URLify("Mr John             Smith    ", 31);

console.log(test1, test2, test3);
