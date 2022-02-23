// print out number 1 -> n

function printNums(n: number) {
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
    let p = "";

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

// now refactor in functional style.
// Should return array
function fizzBuzz(start: number, end: number) {
  const range = [...new Array<number>(end + 1 - start).keys()].map(
    (n) => n + start
  );
  const r = range.map((val, i, a) => {
    let p = ""; // starting return val
    if (val % 3 === 0) {
      p += "fizz"; // build up ret val
      return p;
    }
    if (val % 5 === 0) {
      p += "bazz"; // build up ret val
      return p;
    }
    return val;
  });
  // console.log(r);
  return r;
}

// console.log(fizzBuzz(1, 100));
const fizzBuzz15 = fizzBuzz(1, 15);
console.log("fizzBuzz15 :>> ", fizzBuzz15);

// while fizzbuzz

// recursive fizzbuzz