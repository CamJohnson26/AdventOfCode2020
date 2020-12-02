import * as fs from 'fs';
import * as path from 'path';

const readData = () => {

  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim().split('\n').map(d => parseInt(d))
  return input;
}

const keyValue = 2020;
const input = readData();
const map = new Map();

input.forEach(i => {
  if (map.has(2020 - i)) {
    console.log(i * (2020 - i), i, 2020 - i);
  } else {
    map.set(i, true)
  }
})