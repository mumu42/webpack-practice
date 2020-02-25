// let sum = 0
function recursion(num: number, str: string) {
  if (num > 10) {
    return
  }
  console.log(num, `${str}`)
  recursion(++num, 'first')
  console.log(num, `m`)
  recursion(++num, 'second')
}
recursion(0, '0次')
// console.log(sum, 'sum')
