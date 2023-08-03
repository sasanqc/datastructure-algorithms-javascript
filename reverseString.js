function reverse(str) {
  const strArray = str.split("");
  for (let i = 0; i < strArray.length / 2; i++) {
    let char = strArray[strArray.length - 1 - i];
    strArray[strArray.length - 1 - i] = strArray[i];
    strArray[i] = char;
  }
  return strArray.join("");
}

const reverse2 = (str) => [...str].reverse().join("");

console.log(reverse("I am a caty"));
console.log(reverse2("i'm another cat"));
