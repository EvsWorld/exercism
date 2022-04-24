function solution(A, Y) {
  // write your code in JavaScript
  let accumulatedProfit = 0
  console.log(A)
  console.log(Y)
  let lastHighPrice = A[0]

  A.forEach((price, i) => {
    console.log(price)
    if (price > lastHighPrice + Y) {
      console.log(price)
      console.log(lastHighPrice + Y)
      let transaction = price - lastHighPrice - Y
      // lastHighPrice = price

      // console.log(lastHighPrice)
      console.log(transaction)
      accumulatedProfit += transaction
      console.log(accumulatedProfit)
    }
  })

  return accumulatedProfit
}

const tests = [
  [[7050, 7150, 7000, 6930, 7300, 6980, 7200, 7115, 7150], 50],
  // [[7200, 7050, 7300, 7500, 7440, 7200, 7300, 7280, 7400], 50],
  // [[7200, 7050, 7300, 7500, 7440, 7200, 7300, 7280, 7400], 50]
]

tests.forEach((test) => console.log(solution(test[0], test[1])))
