
import * as fs from 'fs';
import * as path from 'path';

const groupSplit = "\n\n"
const elementSplit = "\n"
const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim()
    .split(groupSplit)
    .map(d => d.split(elementSplit))
  return input;
}

const input = readData();

for (const group of input) {
  for (const element of group) {

  }
}

console.log(input)