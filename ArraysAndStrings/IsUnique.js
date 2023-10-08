function IsUnique(str) {
  const strArr = str.split("");
  if (strArr.length <= 1) {
    return false;
  }
  const obj = {};
  for (let i of strArr) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  for (let items in obj) {
    if (obj[items] > 1) {
      return false;
    }
  }
  return true;
}

// "abdullah"
//go through each letter and put its count in hashmap

const test1 = IsUnique("abdullah");
const test2 = IsUnique("a");
const test3 = IsUnique("");
const test4 = IsUnique("aabb");
const test5 = IsUnique("abcdef");

console.log(test1, test2, test3, test4, test5);
