//given an array = [2,1,3,2,5,5,3]
// should return 3

//given an array = [2,1,3]
// should return undefined

//naive solution
function firstRecurringCharacter(array) {
  const seenItems = [];
  let firstSeen = undefined;
  loop: for (const el of array) {
    if (!seenItems.includes(el)) {
      seenItems.push(el);
    } else {
      firstSeen = el;
      break loop;
    }
  }
  return firstSeen;
}

//using hash tables
function firstRecurringCharacter2(array) {
  const seenItems = {};
  for (const key of array) {
    if (seenItems[key]) return key;
    seenItems[key] = true;
  }
  return undefined;
}

console.log(firstRecurringCharacter2([2, 5, 3, 5]));
