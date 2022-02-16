// Input [1,2,3]
// Out [1,2,4]

// Input [1,2,3,9]
// Out [1,2,4,0]

// Input [9,9,9]
// Out [1,0,0,0]

export function incrementArray(arr: number[]) {
  // join array and convert to a number
  let number = Number(arr.join(""));
  number += 1;
  // change number back to string
  let numString = number.toString();
  // console.log(numString);

  // make string an array (of strings)
  let numArr = [...numString];
  // console.log("numArr :>> ", numArr);

  // convert array of strings into array of numbers
  const final = numArr.map((n) => Number(n));

  // console.log("final :>> ", final);
  return final;
}

function incrementArrayFor(arr: number[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);

    if (arr[i] === 9 && arr[arr.length] === 9) {
      arr[i] = 0;
    }

    arr[i] += 1;
  }
}

// console.log(helloWorld([1, 2, 3]));
