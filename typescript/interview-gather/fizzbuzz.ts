// print out number 1 -> n

export function printNums(n: number) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// printNums(15)

// print fiz for multiples of 3
// print buz for multiples of 5
// print fizbuz for multiples of both

function fizzBuzzFor(n: number) {
  for (let i = 1; i <= n; i++) {
    let p: string | number = "";

    if (i % 3 === 0) {
      // console.log("fiz");
      p += "fiz";
    }
    if (i % 5 === 0) {
      // console.log("buz");
      p += "buzz";
    }
    if (p === "") {
      // console.log(i);
      p = i;
    }
    console.log(p);
  }
}

// fizzBuzzFor(15);

// NOTE:
// If the recursive call occurs at the end of a method, it is called a
// *tail* recursion. The tail recursion is similar to a loop. The method executes
// all the statements before jumping into the next recursive call.

// If the recursive call occurs at the beginning of a method, it is called a
// *head* recursion. The method saves the state before jumping into the next
// recursive call.

// recursive fizzbuzz outputting array (tail)
function fizzBuzzRecursive(start: number, end: number): (string | number)[] {
  if (start === end) {
    return [start];
  } else {
    let p: string | number = "";
    const countArray = fizzBuzzRecursive(start, end - 1);
    console.log("start :>> ", start);
    console.log("end :>> ", end);
    if (end % 3 === 0) {
      p += "fizz";
    }
    if (end % 5 === 0) {
      p += "buzz";
    }
    if (p === "") {
      p = end;
    }
    countArray.push(p);
    // console.log(countArray);
    return countArray;
  }
}

// console.log(fizzBuzzRecursive(1, 15));

// fizzbuzz recursion 2 (tail)
function fizzBuzzRecursive2(start: number, end: number) {
  console.log("start :>> ", start);
  console.log("end :>> ", end);
  let p: string | number = "";
  if (start % 3 === 0) {
    p += "fizz";
  }
  if (start % 5 === 0) {
    p += "buzz";
  }
  if (p === "") {
    p = start;
  }
  console.log(p);
  if (start < end) {
    fizzBuzzRecursive2(start + 1, end);
  }
}
// console.log(fizzBuzzRecursive2(1, 15));

// fizzbuzz recursion 3 (tail)
function fizzBuzzRecursive3(start: number, end: number) {
  let p: string | number = "";
  console.log("start :>> ", start);
  console.log("end :>> ", end);
  if (start % 3 === 0) {
    p += "fizz";
  }
  if (start % 5 === 0) {
    p += "buzz";
  }
  if (p === "") {
    p = start;
  }
  console.log(p);
  if (start === end) {
    return;
  } else {
    fizzBuzzRecursive3(start + 1, end);
  }
}

// console.log(fizzBuzzRecursive3(1, 15));

// fizzbuzz recursion 4 (head)
function fizzBuzzRecursive4(start: number, end: number) {
  if (start < end) {
    console.log("start :>> ", start);
    console.log("end :>> ", end);
    fizzBuzzRecursive4(start, end - 1);
  }
  console.log("start :>> ", start);
  console.log("end :>> ", end);
  let p: string | number = "";
  if (end % 3 === 0) {
    p += "fizz";
  }
  if (end % 5 === 0) {
    p += "buzz";
  }
  if (p === "") {
    p = end;
  }
  console.log(p);
}
// console.log(fizzBuzzRecursive4(1, 15));

// now refactor in functional style.
// Should return array
function fizzBuzz(start: number, end: number) {
  const range = [...new Array<number>(end + 1 - start).keys()].map(
    (n) => n + start
  );
  const r = range.map((val, i, a) => {
    let p: string | number = ""; // starting return val
    if (val % 3 === 0) {
      p += "fizz"; // build up ret val
      return p;
    }
    if (val % 5 === 0) {
      p += "buzz"; // build up ret val
      return p;
    }
    return val;
  });
  return r;
}

// console.log(fizzBuzz(1, 15));
// const fizzBuzz15 = fizzBuzz(1, 15);
// console.log("fizzBuzz15 :>> ", fizzBuzz15);

// while fizzbuzz
function fizzBuzzWhile(n: number) {
  let i = 1;
  while (i <= n) {
    let p: string | number = "";
    if (i % 3 === 0) {
      p += "fizz";
    }
    if (i % 5 === 0) {
      p += "buzz";
    }
    if (p === "") {
      p = i;
    }
    console.log(p);
    i++;
  }
}

console.log(fizzBuzzWhile(15));
