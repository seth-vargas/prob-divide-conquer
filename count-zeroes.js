function countZeroes(arr) {
  // assume: sorted array [1, ..., 0]
  // Steps:
  // 1. Find if middle value is 0
  // 2. If it is, check for more to the left
  // 3. if it is not, check for a 0 to the right
  // 4. After the while loop is completed, the left index will be the last '1'
  //    - return return of arr minus the index of the last found 1
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === 0) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return arr.length - left;
}

module.exports = countZeroes;
