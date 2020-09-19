let Range = function (start, end, step) {
    // this.start = start || null; // 0이 falsy값이 된 듯
    if (start === undefined) {
      this.start = null;
    } else {
      this.start = start;
    }
    // this.end = end || start; // 0이 falsy값이 된 듯
    if (end === undefined) {
      this.end = this.start;
    } else {
      this.end = end;
    }
    if (step === undefined) {
      if (this.start < this.end) { // 부등호 좀!!!!!
        this.step = 1
      } else {
        this.step = -1
      }
    } else {
      this.step = step;
    }
  };
  
  Range.prototype.size = function () {
    return Math.floor(Math.abs(this.start - this.end) / Math.abs(this.step)) + 1
  
    // // 실행시간 초과 코드
    // let count = 0;
    // // start 
    // for (let i = this.start; i <= this.end; i += this.step) {
    //   count++;
    // }
    // return count;
  };
  
  Range.prototype.each = function (callback) {
     if (this.step > 0) {
      for (var i = this.start; i <= this.end; i += this.step) {
        callback(i);
      }
    } else {
      for (var i = this.start; i >= this.end; i += this.step) { // 부등호 ㅂㄷㅂㄷ
        callback(i);
      }
    }
  };
  
  Range.prototype.includes = function (val) {
    if (this.step < 0) { // step이 음수면 자리를 바꿔
      [this.start, this.end] = [this.end, this.start]
    }
    if (this.start <= val && this.end >= val) {
      if (Math.abs(this.start) % this.step === Math.abs(val) % this.step) {
        return true;
      }
    }
    return false;
  };
  
  let range = new Range(1);
  
  
  /* includes first try
  if (this.start > val && this.start <= val) {
    //   while(val > this.start) {
    //     this.start += this.step
    //   }
    //   return this.start % val ? true : false; 
    // } 
  */