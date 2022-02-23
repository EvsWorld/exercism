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

function printNumsA(n: number) {
  for (let i = 1; i <= n; i++) {
    let p = "";

    if (i % 3 === 0) {
      // console.log("fiz");
      p += "fiz";
    }
    if (i % 5 === 0) {
      // console.log("buz");
      p += "buz";
    }
    if (p === "") {
      // console.log(i);
      p = i;
    }
    console.log(p);
  }
}

printNumsA(15);
