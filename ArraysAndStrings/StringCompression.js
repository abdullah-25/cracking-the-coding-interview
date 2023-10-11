function StringCompression(str) {
  let count = 1;
  let compressed = [];
  const StringArr = str.split("");

  for (let i = 0; i < StringArr.length; i++) {
    if (StringArr[i] === StringArr[i + 1]) {
      count++;
    } else {
      compressed.push(str[i] + count);
      count = 1;
    }
  }
  if (compressed.length > str) {
    return str;
  } else {
    return compressed.join("");
  }
}

const test1 = StringCompression("aabcccccaaa"); //a2b1c5a3
console.log(test1);
