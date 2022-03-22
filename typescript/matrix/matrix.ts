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
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  }

  get rows(): number[][] {
    return this.rowsOfIntFromString(this.m);
  }

  // works
  get columns1(): number[][] {
    const final: number[][] = [];
    for (let outerIn = 0; outerIn < this.rows[0].length; outerIn++) {
      const column = this.rows.map((_, innerIn: number) => {
        return this.rows[innerIn][outerIn];
      });
      final.push(column);
    }
    return final;
  }

  // works
  get columns(): number[][] {
    return this.transpose(this.rows);
  }

  // doesnt work
  get columns3(): number[][] {
    return this.transposeArray(this.rows);
  }
}

console.log(new Matrix("1 2 3\n4 5 6").rows);
console.log(new Matrix("1 2 3\n4 5 6").columns);
