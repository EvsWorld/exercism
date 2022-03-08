export class Matrix {
  _rows = 0;
  _colums = m;
  constructor(m: Matrix) {
    // throw new Error('Remove this statement and implement this function')
  }

  get rows(): number[] {
    // throw new Error('Remove this statement and implement this function')
    return m["_rows"];
  }

  get columns(): number[] {
    // throw new Error('Remove this statement and implement this function')
    return [this._colums];
  }
}

console.log(new Matrix("1 2\n3 4"));
