const binarySearch = function (array, target) {
	// TODO: Your code here!
	let left = 0,
		right = array.length - 1,
		mid = Math.floor((left + right) / 2);

	if (array[mid] === target) {
		return mid;
	} else if (array[mid] < target) {
		return mid + 1 + binarySearch(array.slice(mid + 1), target);
	} else if (array[mid] > target) {
		return binarySearch(array.slice(0, mid), target);
	}
};

module.exports = binarySearch;

/**
const binarySearch = function (array, target) {
  // TODO: Your code here!
  let left = 0, right = array.length-1, mid = Math.floor((left + right)/2);
  
  if ( array[mid] === target ) {
    return mid;
  } else if ( array[mid] < target ) {
    return (mid+1) + binarySearch(array.slice(mid+1), target);
  } else if ( array[mid] > target ) {
    return binarySearch(array.slice(0, mid), target);
  }
};

 */
