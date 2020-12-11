/*

for (let i = 0; i < input.length; i++) {

}

[...input.slice(0, i), ...input.slice(i + 1, input.length)]

(new RegExp(/^#[0-9a-f]{6}$/)).test(b)

const sum = vals.reduce((acc, cur) => {
  return cur + acc
}, 0)

Object.keys(var).includes(val)

var.hasOwnProperty(key)

Array.from(sets.reduce((acc, cur) => new Set(Array.from(cur).filter(c => acc.has(c))))).length

input.sort((a,b) => a < b ? -1 : a > b? 1 : 0)
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
    .map(d => d.split(''))
  return input;
}

const input = readData();

const getSeatState = (seat, adj: string[]) => {
  if (seat === 'L') {
    if (adj.filter(a => a === '#').length === 0) {
      return '#'
    }
  }
  if (seat === '#') {
    if (adj.filter(a => a === '#').length >= 5) {
      return 'L'
    }
  }
  return seat
}

const getAdjacent = (i, j, state) => {
  let ni = -1;
  let nj = -1;
  const adj = []
  while (ni <= 1) {
    while (nj <= 1) {
      if (!(ni === 0 && nj === 0)) {
        let di = i + ni
        let dj = j + nj
        while ((state[di]||{})[dj] === '.') {
          di = di + ni;
          dj = dj + nj;
        }
        if ((state[di]||{})[dj] !== undefined) {
          adj.push(state[di][dj])
        }
  
      }
      nj += 1;
    }
    nj = -1
    ni += 1;
  }
  return adj
}

const nextState = (state: string[][]) => {

  return state.map((row, i) => row.map((seat, j) => getSeatState(seat, getAdjacent(i, j, state))))
}

const statesMatch = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false
  }
  if (s1[0].length !== s2[0].length) {
    return false
  }

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1[i][j] != s2[i][j]) return false
    }
  }
  return true
}

let state = input
let oldState = []
let counter = 0
while (!statesMatch(state, oldState)) {
  oldState = state;
  state = nextState(state)
  counter += 1
}

let count = 0
console.log(state)
state.forEach(row => row.forEach(seat => seat === '#' ? count += 1 : null))
console.log(count)
// console.log(nextState(input))