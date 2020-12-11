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
const elementSplit = " "
const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim()
    .split(groupSplit)
    .map(d => d.split(elementSplit))
  return input;
}

const input = readData();

console.log(input)