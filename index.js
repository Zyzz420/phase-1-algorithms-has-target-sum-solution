function hasTargetSum(array, target) {
  if (array.length === 1) {
    if (array[0] === target) {
      return true;
    } else {
      return false;
    }
  } else {
    for (const a of array) {
      for (let i = array.indexOf(a) + 1; i < array.length; i++) {
        if (array.indexOf(a) !== i) {
          if (a + array[i] === target) {
            return true;
          }
        }
      }
    }
    return false;
  }
}


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
