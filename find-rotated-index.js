function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid;
    }

    // Check if the left half of the array is sorted
    if (arr[left] <= arr[mid]) {
      // Check if the number is within the left half
      if (arr[left] <= num && num < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // The right half of the array is sorted
      // Check if the number is within the right half
      if (arr[mid] < num && num <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
module.exports = findRotatedIndex;
