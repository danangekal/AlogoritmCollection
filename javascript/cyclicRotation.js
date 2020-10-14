function cyclicRotation(arr, n) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr[(i + n) % (arr.length)] = arr[i]
  }

  return newArr;
}

// TEST
var A = [3, 8, 9, 7, 6];
var K = 3;

console.log(cyclicRotation(A, K)); // [9, 7, 6, 3, 8]
// console.log(cyclicRotation([], 10)); // []
// console.log(cyclicRotation([2,5,5,5,5,5,5,3,3,2,1,0,6,4], 33)); // [2,1,0,6,4,2,5,5,5,5,5,5,3,3]
// console.log(cyclicRotation([1,2,3,4,5,6,7,8,9], 8)); // [2,3,4,5,6,7,8,9, 1]