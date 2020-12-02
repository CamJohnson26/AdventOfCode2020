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
  input.forEach(j => {
    if (!map.has(i + j)) {
      map.set(i + j, [i, j])
    }
  })
})

input.forEach(i => {
  if (map.has(2020 - i)) {
    const vals = map.get(2020 - i).concat(i)
    console.log(vals.reduce((cur, acc) => cur * acc, 1), vals);
  }
})