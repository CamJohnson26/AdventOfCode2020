
import * as fs from 'fs';
import * as path from 'path';

const groupSplit = "\n"
const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim()
    .split(groupSplit).map(e => parseInt(e))
  return input;
}

const input = readData();
const result = input;
const preamble = 31161678

const reduce = (input, depth) => {
  console.log(depth)
  for (let i = 0; i <= input.length - depth; i++) {
    const val = input.slice(i, i+ depth).reduce((acc, cur) => acc + cur, 0)
    if (val === preamble) {
      const m = Math.min(...input.slice(i, i+ depth)) + Math.max(...input.slice(i, i+ depth))
      console.log(`Answer: ${m}`)
      return false;
    }
  }
  return true
}
let d = 2
let answer = true;
while(answer){
  answer = reduce(input, d)
  d+=1;
}

console.log(result)