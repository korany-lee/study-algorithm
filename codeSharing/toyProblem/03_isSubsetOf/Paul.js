/** @format */
const Paul = () => {
	Array.prototype.isSubsetOf = function (array) {
		let arr1 = [...new Set(this)]; // merge reset 각각의 어레이를 unique value 만 남게해줌
		let arr2 = [...new Set(array)]; // reset merge add commit
		let storage = [];
		for (let i = 0; i < arr1.length; i++) {
			for (let j = 0; j < arr2.length; j++) {
				if (arr1[i] === arr2[j]) {
					storage.push(arr1[i]);
				}
			}
		}
		if (storage.length === arr1.length) return true;
		else return false;
	};
};
module.exports = Paul;
/* 


  const storage = []; 
  for(let i = 0; i < Array.length; i++){
    for(let j = 0; j < array.length; j++){
      if (array[j] === Array[i]) {
        storage.push(Array[j])
        console.log(storage)
      } 
    }
  }
  const result = [...new Set(storage)]; 
  console.log(result)
  if (result.length === array.length) return true; 
  else return false; 
특정 배열이 매개변수로 전달되는 배열의 부분집합인지를 판단하는 메소드를 만드세요. 비교 대상인 두 배열 모두 문자열로 이루어졌다고 가정합니다.
참고 : 배열 내의 중복값은 무시하세요.

array 를 루핑한다
Array를 루핑한다 
만약 Array[j] 를 다 돌았을 때 array[i] 의
벨류가 존재한다면 storage 에 해당 원소를 푸쉬한다 
벨류가 존재하지 않는다면 array
newset 을 리턴  
array.length 가 만약 storage length 와 같다면 true 를 리턴한다. 
아니라면 false 를 리턴한다 . 


let a = ['commit','push']
a.isSubsetOf(['commit','rebase','push','blame']) // true


let b = ['merge','reset','reset']
b.isSubsetOf(['reset','merge','add','commit']) // true


a.isSubsetOf
*/
