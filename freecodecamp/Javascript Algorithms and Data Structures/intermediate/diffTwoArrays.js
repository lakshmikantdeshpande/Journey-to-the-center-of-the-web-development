function diffArray(arr1, arr2) {
  var concat = arr1.concat(arr2);

  var newArr = concat.filter(function(x) {
    if (arr1.indexOf(x) == -1 || arr2.indexOf(x) == -1) {
      return x;
    }
  });
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
