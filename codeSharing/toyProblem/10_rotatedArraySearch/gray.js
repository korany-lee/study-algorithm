const rotatedArraySearch = function (
	rotated,
	target,
	left = 0,
	right = rotated.length - 1
) {
	// TODO : Your code here!
	// O(logN)을 하려면? 이진탐색
	// 반을 자른다. 가운데 있는 값이 타겟인가? --> 리턴 타겟인덱스
	// 가운데 있는 값과 타겟을 비교한다. 타겟이 더 큰가? --> 오른쪽을 돌린다.
	// 타겟이 더 작은가? --> 왼쪽을 돌린다.

	// 3,4,5,6,7,8,0,1,2
	// 7 --> 타겟 : 2 --> 왼쪽돌리면 안됨

	// 그냥 반 나눠서 둘 다 돌린 다음, 타겟이 있으면 리턴하자. 근데 어떻게 인덱스를 가져올까? --> 재귀하면 인덱스를 못가져온다.
	// 인덱스를 기준으로 재귀를 하면 어떨까?
	if (left > right) {
		return null;
	}

	let mid = Math.floor((left + right) / 2);

	if (rotated[mid] === target) {
		return mid;
	}

	if (rotated[left] < rotated[mid]) {
		if (rotated[left] < target && rotated[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	} else {
		if (rotated[mid] >= target && rotated[right] >= target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return rotatedArraySearch(rotated, target, left, right);
};

/**
const rotatedArraySearch = function (rotated, target) {
  // TODO : Your code here!
  return rotated.indexOf(target) === -1 ? null : rotated.indexOf(target);
};

 */
