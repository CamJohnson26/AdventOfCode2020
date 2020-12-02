import * as fs from 'fs';
import * as path from 'path';

const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim().split('\n').map(d => d.split(": "))
  return input;
}

const validatePassword: (rule, password: string) => boolean = (rule, password) => {
  const [range, letter] = rule.split(" ");
  const [min, max] = range.split("-").map(i => parseInt(i))

  const count = password.split("").reduce((acc, cur) => acc + (cur === letter ? 1 : 0), 0)
  console.log(rule, password, letter, count)
  return count >= min && count <= max;
}

const input = readData();
const numValid = input.reduce((acc, cur) => {
  return acc + (validatePassword(cur[0], cur[1]) ? 1 : 0)
}, 0)
console.log(numValid)