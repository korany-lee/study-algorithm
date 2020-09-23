let Range = function (start, end, step) {
  if (start === undefined) return null;
  this.start = start;
  this.end = end !== undefined ? end : this.start; //end가 없으면 그냥 this.start로 둬서 추후 비교
  this.step =
    step !== undefined ? step : (this.step = this.start < this.end ? 1 : -1); //step이 없을 경우, this.start > this.end 일시는 1로 설정하지만 아니면 -1로 설정
  return this;
};

Range.prototype.size = function () {
  return Math.floor((this.end - this.start) / this.step) + 1;
};

Range.prototype.each = function (callback) {
  if (this.step > 0) {
    for (let i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else {
    for (let i = this.start; i >= this.end; i += this.step) {
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {
  if (this.step > 0) {
    if (val < this.start || val > this.end) return false;
    return (this.start - val) % this.step === 0;
  } else {
    if (val > this.start || val < this.end) return false;
    return (this.start - val) % this.step === 0;
  }
};

// let range = new Range(1);

// let Range = function (start, end, step) {
//   // TODO: your solution here
//   this.storage = {}
//   this.length = 0;
//   if(typeof(end) !== 'number' && !step ) {
//     this.storage[this.length] = start;
//     this.length++
//   }
//   if(start > end && !step) {
//     step = -1;
//   }

//   step = step || 1;

//   if(step < 0) {
//     for (let i = start; i >= end; i += step) {
//       this.storage[this.length++] = i;
//     }
//   } else {
//     for (let i = start; i <= end; i+= step) {
//       this.storage[this.length++] = i;
//     }
//   }
// };

// Range.prototype.size = function () {
//   // TODO: your solution here
//   return this.length
// };

// Range.prototype.each = function (callback) {
//   // TODO: your solution here
//   const arr = [];
//   const keys = Object.keys(this.storage)
//   for (let key of keys) {
//     arr.push(callback(this.storage[key]))
//   }
//   return arr;
// };

// Range.prototype.includes = function (val) {
//   // TODO: your solution here
//   let values = Object.values(this.storage)
//   return values.includes(val);
// };

// let range = new Range(1);
