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

function count(cur, list, jolts) {
  console.log(list)
  if (list.length === 0) {
    jolts.push(3)
    console.log(jolts)
    console.log('Done!', jolts.filter(j => j === 1).length * jolts.filter(j => j === 3).length)
    return 0;
  }
  for (let i = 0; i < input.length; i++) {
    const e = list[i]
    const diff = e - cur
    if (diff <= 3) {
      return 1 + count(e, [...list.slice(0, i), ...list.slice(i+1, list.length)], jolts.concat([diff]))
    }
  }
}

console.log(count(start, input, []));
