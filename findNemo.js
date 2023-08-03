const nemo = ["nemo"];
const large = new Array(100000).fill("nemo");
function findNmeo(array) {
  let t0 = performance.now();
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "nemo") {
      console.log("found nemo");
    }
  }
  let t1 = performance.now();
  console.log("Time: ", t1 - t0);
}

findNmeo(large); // O(n) --> linear Time
