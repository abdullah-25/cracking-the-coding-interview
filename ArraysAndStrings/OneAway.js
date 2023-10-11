function OneAway(str1, str2) {
  const difference = Math.abs(str1.length - str2.length);
  if (difference > 1) {
    return false;
  }

  let edits = 0;
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {
      edits++;
      if (edits > 1) {
        return false; // More than one edit away.
      }
      if (difference === 0) {
        i++;
        j++;
      } else if (str1.length > str2.length) {
        i++;
      } else {
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return true;
}

const test1 = OneAway("pale", "ple");
const test2 = OneAway("pales", "pale");
const test3 = OneAway("pale", "bale");
const test4 = OneAway("pale", "bake");

console.log(test1, test2, test3, test4);
