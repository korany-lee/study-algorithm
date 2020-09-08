const deepEquals = function (apple, orange) {
  // TODO: Your code here!
  const appleKeys = Object.keys(apple);
  const orangeKeys = Object.keys(orange);

  if (appleKeys.length === 0 && orangeKeys.length === 0) {
    return true;
  } else if (appleKeys.length !== orangeKeys.length) {
    return false;
  }

  let result = false;

  for (let key of appleKeys) {
    if (typeof apple[key] === "object") {
      result = deepEquals(apple[key], orange[key]);
    } else if (apple[key] === orange[key]) {
      result = true;
    } else {
      return false;
    }
  }

  return result;
};

/**
const deepEquals = function (apple, orange) {
	// TODO: Your code here!
	const appleKeys = Object.keys(apple);
	const orangeKeys = Object.keys(orange);

	if (appleKeys.length === 0 && orangeKeys.length === 0) {
		return true;
	}

	let result = false;

	for (let key of appleKeys) {
		if (typeof apple[key] === 'object') {
			result = deepEquals(apple[key], orange[key]);
		} else if (apple[key] === orange[key]) {
			result = true;
		} else if (typeof apple[key] !== 'object' && apple[key] !== orange[key]) {
			return false;
		}
	}

	for (let key of orangeKeys) {
		if (typeof apple[key] !== 'object' && apple[key] !== orange[key]) {
			return false;
		}
	}

	return result;
};

 */
