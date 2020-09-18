//let range1 = new Range(10,0,-2);
//             new Range(10,0,2) -> 이럴 때는 값이 나와야하는가..?
//let range2 = new Range(10,0);

let Range = function (start, end, step) {
  this.start = start;
  this.end = end;
  this.step = step;
};

Range.prototype.size = function () {
  let size = 0;
  if(this.step) { //step이 있을 때
    if(this.step > 0) { //step 이 양수일 때
      for(let i = this.start; i <= this.end; i+=this.step) {
        size++;
      }
    } else { //한번에 엮을 수 있는 방법이 없을까? for문 안의 증감식 처리방법 어떻게 할까,,
      for(let i = this.start; i >= this.end; i+=this.step) {
        size++;
      }
    }
  } else { //step이 없을 때
    if(!this.end) return 1;
    if(this.start < this.end) {
      for(let i = this.start; i <= this.end; i++) {
        size++;
      }
    } else {
      for(let i = this.start; i >= this.end; i --) {
        size--;
      }
    }
  }
  return size;
};

Range.prototype.each = function (callback) {
  if(this.step) { //step이 있을 때
    if(this.step > 0) { //step 이 양수일 때
      for(let i = this.start; i <= this.end; i+=this.step) {
        callback(i);
      }
    } else { //한번에 엮을 수 있는 방법이 없을까? for문 안의 증감식 처리방법 어떻게 할까,,
      for(let i = this.start; i >= this.end; i+=this.step) {
        callback(i);
      }
    }
  } else { //step이 없을 때
    //if(!this.end) return 1; 이게 왜 걸리는건지..
    if(this.start < this.end ) {
      for(let i = this.start; i <= this.end; i++) {
        callback(i);
      }
    } else if(this.start > this.end) {
      for(let i = this.start; i >= this.end; i--) {
        callback(i);
      }
    }
  }
};

Range.prototype.includes = function (val) {
  if(this.step) { //step이 있을 때
    if(this.step > 0) { //step 이 양수일 때
      for(let i = this.start; i <= this.end; i+=this.step) {
        if(val === i) {
          return true;
        }
      }
    } else { //한번에 엮을 수 있는 방법이 없을까? for문 안의 증감식 처리방법 어떻게 할까,,
      for(let i = this.start; i >= this.end; i+=this.step) {
        if(val === i) {
          return true;
        }
      }
    }
  } else { //step이 없을 때
    if(!this.end) {
      return !!(this.start === val); 
    }
    if(this.start < this.end ) {
      for(let i = this.start; i <= this.end; i++) {
        if(val === i) {
          return true;
        }
      }
    } else if(this.start > this.end) {
      for(let i = this.start; i >= this.end; i--) {
        if(val === i) {
          return true;
        }
      }
    }
  }
  return false;
};

let range = new Range(1);