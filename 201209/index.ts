
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
const preamble = 25

const memo = {};
const isSum = (num, prev: number[]) => {
  if (Object.keys(memo).includes(`${num}:${prev.join(',')}`)) {
    return memo[`${num}:${prev.join(',')}`];
  };
  if (num < 0) {
    return false
  }
  if (num === 0) {
    return true
  }
  let i = 0
  for (const p of prev) {
    i += 1
    if (isSum(num-p, [...prev.slice(0, i), ...prev.slice(i, prev.length)])) {
      memo[`${num}:${prev.join(',')}`] = true
      return true;
    } else {
      memo[`${num}:${prev.join(',')}`] = false
    }
  }
  return false;
}

for (let i = preamble; i < input.length; i++) {
  // console.log(input[i], input.slice(i-preamble, i));
  if (!isSum(input[i], input.slice(i-preamble, i))) {
    console.log(`Answer: ${input[i]}`)
    break;
  }
}

console.log(result)