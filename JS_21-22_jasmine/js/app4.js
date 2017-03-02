
function compareArr(arr1, arr2, arrayLength) {
    for (var i = 0; i < arrayLength; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

  try {
  module.exports = compareArr;

  } catch (e) {}
