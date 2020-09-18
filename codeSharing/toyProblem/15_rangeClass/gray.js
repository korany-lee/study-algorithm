let Range = function (start, end, step) {
	if (start === null) {
		return null;
	} else {
		this.start = start || 0;
		if (end === null || end === undefined) {
			this.end = start || 0;
		} else {
			this.end = end;
		}
		this.step = !step
			? start > end
				? -1
				: 1
			: start > end
			? -1 * Math.abs(step)
			: Math.abs(step);
	}
};
Range.prototype.size = function () {
	// TODO: your solution here
	let [count, min, max, step] = [
		0,
		Math.min(this.start, this.end),
		Math.max((this.start, this.end)),
		Math.abs(this.step),
	];

	while (min <= max) {
		count++;
		min += step;
	}
	return count;
};

Range.prototype.each = function (callback) {
	// TODO: your solution here
	let [count, start, end, step] = [0, this.start, this.end, this.step];
	if (start > end) {
		while (start >= end) {
			callback(start);
			start += step;
		}
	} else {
		while (start <= end) {
			callback(start);
			start += step;
		}
	}
};

Range.prototype.includes = function (val) {
	// TODO: your solution here
	let [count, min, max, step] = [
		0,
		Math.min(this.start, this.end),
		Math.max(this.start, this.end),
		this.step < 0 ? -1 * this.step : this.step,
	];

	while (min <= max) {
		if (min === val) {
			return true;
		}
		min += step;
	}
	return false;
};

let range = new Range(1);
/**pass
let Range = function (start, end, step) {  
  this.start = start || 0;
  this.end = typeof end === 'number' ? end : end || start;
  this.step = typeof step === 'number' ? start > end ? -1 * Math.abs(step) : Math.abs(step) : start > end ? -1 : 1;
}
Range.prototype.size = function () {
  // TODO: your solution here
  let [count, min, max, step ] = [0, Math.min(this.start, this.end), Math.max((this.start, this.end)), Math.abs(this.step)];
  
  while ( min <= max ) {
    count++;
    min += step;
  }
  return count;
};

Range.prototype.each = function (callback) {
  // TODO: your solution here
  let [count, start, end, step ] = [0, this.start, this.end, this.step];
  if ( start > end ) {
    step = step > 0 ? -1 * step : step;
    while ( start >= end ) {
      callback(start);
      start += step;
    }
  } else {
    step = step > 0 ? step : -1 * step;
    while ( start <= end ) {
      callback(start);
      start += step;
    }
  }
};

Range.prototype.includes = function (val) {
  // TODO: your solution here
  let [count, min, max, step ] = [0, Math.min(this.start, this.end), Math.max(this.start, this.end), this.step < 0 ? -1 * this.step : this.step];
  
  while ( min <= max) {
    if ( min === val ) {
      return true;
    }
    min += this.step;
  }
  return false;
};

let range = new Range(1);
 */

// let Range = function (start, end, step) {
//   start = start || 0;
//   end = end || start;
//   step = step || start > end ? -1 : 1;

//   this.range = [];
//   this.len = Math.max(Math.ceil((end-start) / step), 0);
//   for ( let i = 0; i < this.len; i++ ) {
//     range[i] = start;
//     start += step;
//   }
// }
// Range.prototype.size = function () {
//   // TODO: your solution here
//   return this.len;
// };

// Range.prototype.each = function (callback) {
//   // TODO: your solution here
//   for ( let val of this.range ) {
//     callback(val);
//   }
// };

// Range.prototype.includes = function (val) {
//   // TODO: your solution here
//   return this.range.includes(val);
//   // for ( let value of this.range ) {
//   //   if ( value === val ) {
//   //     return true;
//   //   }
//   // }
//   // return false;
// };

// let range = new Range(1);

// let Range = function (start, end, step) {
//   // TODO: your solution here
//   this.start = start || 0;
//   this.end = end || start || 0;
//   this.step = step || start > end ? -1 : 1;

//   const len = Math.max(Math.ceil((end-start) / step), 0);
//   let range = [];
//   let tmpStart = start;

//   for ( let i = 0; i < len; i++ ) {
//     range[i] = tmpStart;
//     tmpStart += step;
//   }

//   return range;
// };

// Range.prototype.size = function () {
//   // TODO: your solution here
//   let [count, startPoint, endPoint, steps] = [0, this.start, this.end, this.step];

//   if ( startPoint > endPoint ) {
//     let tmp = startPoint;
//     startPoint = endPoint;
//     endPoint = tmp;
//   }

//   while ( startPoint <= endPoint ) {
//     count++;
//     startPoint += steps;
//   }

//   return count;
// };

// Range.prototype.each = function (callback) {
//   // TODO: your solution here
//   let [tmpStart, tmpEnd] = [this.start, this.end];

//   if ( tmpStart > tmpEnd ) {
//     while ( tmpStart >= tmpEnd ) {
//       callback(tmpStart);
//       tmpStart -= this.step;
//     }
//   } else {
//     while ( tmpStart <= tmpEnd ) {
//       callback(tmpStart);
//       tmpStart += this.step;
//     }
//   }
// };

// Range.prototype.includes = function (val) {
//   // TODO: your solution here
//   let [tmpStart, tmpEnd] = [this.start, this.end];

//     if ( tmpStart > tmpEnd ) {
//     while ( tmpStart >= tmpEnd ) {
//       if ( tmpStart === val ) {
//         return true;
//       }
//       tmpStart -= this.step;
//     }
//   } else {
//     while ( tmpStart <= tmpEnd ) {
//       if ( tmpStart === val ) {
//         return true;
//       }
//       tmpStart += this.step;
//     }
//   }
//   return false;
// };

// let range = new Range(1);

module.exports = Range;
