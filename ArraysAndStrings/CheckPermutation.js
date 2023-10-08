function CheckPermutation(str1, str2) {
  if (str1.length === str2.length) {
    const FirstSortedString = str1.split("").sort().join("");
    const SecondSortedString = str2.split("").sort().join("");
    if (FirstSortedString === SecondSortedString) {
      return true;
    }
  }
  return false;
}

const test1 = CheckPermutation("abdabd", "abd");
console.log(test1);
