/*

for (let i = 0; i < input.length; i++) {

}

[...input.slice(0, i), ...input.slice(i, input.length)]

(new RegExp(/^#[0-9a-f]{6}$/)).test(b)

const sum = vals.reduce((acc, cur) => {
  return cur + acc
}, 0)

Object.keys(var).includes(val)

var.hasOwnProperty(key)

Array.from(sets.reduce((acc, cur) => new Set(Array.from(cur).filter(c => acc.has(c))))).length
*/
import * as fs from 'fs';
import * as path from 'path';

const groupSplit = "\n"
// const elementSplit = " "
const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim()
    .split(groupSplit)
    .map(d => parseInt(d))
  return input;
}

const input = readData();

const builtIn = Math.max(...input) + 3
const start = 0;

let oneJolt = 0;
let threeJolt = 0;

function count(cur, list, depth) {
  // console.log(depth)
  let result = 0
  if (list.length === 0) {
    // jolts.push(3)
    // console.log(jolts)
    // console.log('Done!', jolts.filter(j => j === 1).length * jolts.filter(j => j === 3).length)
    return 1;
  }
  for (let i = 0; i < list.length; i++) {
    const e = list[i]
    const diff = e - cur
    if (diff <= 3) {
      result += count(e, [...list.slice(i+1, list.length)], depth + 1)
    }
  }
  return result
}

const memo = {}

let current = 0;


const inputS = input.sort((a,b) => a < b ? -1 : a > b? 1 : 0)
// inputS.push(builtIn)
// memo[0] = 1

// for (const element of inputS) {
//   const chains = inputS.filter(i => element - i <= 3 && element - i > 0)
//   if (element - 0 <= 3) {
//     chains.push(0)
//   }
//   // console.log(chains)
//   for (const c of chains) {
//     console.log(element, memo[element], memo)
//     memo[element] = chains.reduce((acc, cur) => {
//       return memo[cur] + acc
//     }, 0)
//   }
//   // console.log(memo)
//   // break
// }
// // console.log(memo)

const recurse = (cur, list, log) => {
  if (memo.hasOwnProperty(cur)) {
    return memo[cur];
  }
  if (list.length === 0) {
    if (builtIn - cur <= 3 && builtIn - cur > 0) {
      console.log(cur, list, log)
    }
    memo[cur] = builtIn - cur <= 3 && builtIn - cur > 0 ? 1 : 0
    return memo[cur]
  }
  const result = list.map((l, i) => l - cur <= 3 && l - cur > 0 ? recurse(l, list.slice(i + 1, list.length), [...log, l]) : 0)
    .reduce((acc,cur) => acc + cur, 0)

  memo[cur] = result
  return memo[cur]
}
console.log(recurse(0, inputS, [0]))

// console.log(count(start, inputS, 0));
