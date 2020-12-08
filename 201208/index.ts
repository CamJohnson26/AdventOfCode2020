
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
    .map(e => [e[0], parseInt(e[1])])
  return input;
}

const input = readData();

const done: {[key: string]: boolean} = {}

let acc = 0;
let index = 0
console.log(input)
while (!Object.keys(done).includes(index.toString())) {
  console.log(input[index])
  done[index.toString()] = true
  if (input[index][0] === 'nop') {
    index += 1;
  } else if (input[index][0] === 'acc') {
    acc += input[index][1] as number;
    index += 1;
  } else if (input[index][0] === 'jmp') {
    index += input[index][1] as number;
  }
}

console.log(acc)