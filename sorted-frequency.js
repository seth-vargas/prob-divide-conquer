// assume: sorted array
// goal: count occurences of the number in the array
// constraints: O(log n)
// Steps:
// 1: find index where number starts
// 2. find index where number ends
// 3. find the difference of those indecies + return that
// 4. if not found, return -1

function findFirst(arr, number) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let result = -1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] === number) {
      result = middleIdx;
      rightIdx = middleIdx - 1;
    } else if (arr[middleIdx] < number) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
  return result;
}

function findLast(arr, number) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let result = -1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] === number) {
      result = middleIdx;
      leftIdx = middleIdx + 1;
    } else if (arr[middleIdx] < number) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
  return result;
}

function sortedFrequency(arr, number) {
  let startIdx = findFirst(arr, number);
  let endIdx = findLast(arr, number);
  if (startIdx === -1 || endIdx === -1) return -1;
  return endIdx - startIdx + 1;
}

module.exports = sortedFrequency;
