// Return how many perfect squares there are in between two numbers
function solution(A, B) {
  const isNumberSquare = function (num) {
    for (let j = 0; ; j++) {
      let times = j * j;
      if (times === num) return true;
      else if (times > num) return false;
    }
  };
  const list = [];
  let count = 0;
  for (var i = A; i <= B; i++) {
    list.push(i);
    if (isNumberSquare(i)) {
      count += 1;
    }
  }
  console.log("list :>> ", list);
  console.log("count :>> ", count);
  return count;
}

console.log(solution(4, 17));
console.log(solution(-3, 18));

// Return first unique number, or -1 of none
function findFirstUnique(A) {
  return (
    A.find(function (num) {
      return A.indexOf(num) === A.lastIndexOf(num);
    }) || -1
  );
}

console.log(findFirstUnique([22, 25, 3, 3, 1, 2, 0, 0, 100, 22, 25, 1, 2]));
console.log(findFirstUnique([4, 10, 5, 4, 2, 10]));
console.log(findFirstUnique([1, 4, 3, 3, 1, 2]));
console.log(findFirstUnique([6, 4, 4, 6]));

// For doing the chessboard problem
const A = [];
A[0][0] = 2;
A[0][1] = 2;
A[0][2] = 4;
A[0][3] = 2;

A[1][0] = 3;
A[1][1] = 3;
A[1][2] = 0;
A[1][3] = 0;
A[1][0] = 0;

const testInput = [
  [2, 2, 4, 2],
  [0, 3, 0, 1],
  [1, 2, 2, 1],
  [4, 1, 2, 2],
];
