export class Matrix {
  constructor(public m: string) {}

  private transposeArray(
    array: number[][],
    arrayLength: number = array.length
  ) {
    var newArray: number[][] = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push([]);
    }

    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < arrayLength; j++) {
        newArray[j].push(array[i][j]);
      }
    }

    return newArray;
  }

  private rowsOfIntFromString(s: string) {
    const rowsArray = s.split("\n");
    const rowsArrayNum = rowsArray.map((e: string) => {
      return e.split(" ").map((n: string) => Number(n));
    });
    return rowsArrayNum;
  }

  private transpose(matrix: number[][]): number[][] {
    console.log("matrix[0] :>> ", matrix[0]);
    // NOTE: loop over the first row
    return matrix[0].map((_, colIndex) => {
      console.log("_ :>> ", _);
      // for the length of the first row (the number of columns), loop over each
      // row and return the element at the current column index
      return matrix.map((row) => {
        console.log("row :>> ", row);
        return row[colIndex];
      });
    });
  }

  get rows(): number[][] {
    return this.rowsOfIntFromString(this.m);
  }

  // works
  get columns(): number[][] {
    const final: number[][] = [];
    console.log("this.rows :>> ", this.rows);
    // loop for the length of the first row (the number of columns in the first row)
    for (let outerIn = 0; outerIn < this.rows[0].length; outerIn++) {
      console.log("\nIn outer for loop: outerIn :>> ", outerIn);
      // for each row array, return the element on that row that is at the
      // current column index
      // for example, the first outer loop, you're in the first column (outerIn == 0).
      const column = this.rows.map((row) => {
        console.log("row :>> ", row);
        // Then for each row, loop overyou return the first element from that row, and
        // return that as an array
        console.log("elem :>> ", row[outerIn]);
        return row[outerIn];
      });

      final.push(column);
      console.log("final :>> ", final);
    }
    return final;
  }

  // works (best solution)
  get columns1(): number[][] {
    return this.transpose(this.rows);
  }

  // doesnt work
  get columns3(): number[][] {
    return this.transposeArray(this.rows);
  }
}

// console.log(new Matrix("1 2 3 4\n5 6 7 8").rows);
// console.log(new Matrix("1 2 3 4\n5 6 7 8").columns);
