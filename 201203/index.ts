
import * as fs from 'fs';
import * as path from 'path';

const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim().split('\n')
    .map(d => {
      return d.split("");
    })
  return input;
}

const input = readData();
// console.log(input)
let result = 0
let x = 0
let y = 0
if (input[x][y] === '#') {
  result += 1
}
// input.shift()
console.log(input.length)
for (const row of input) {
  x += 1
  y += 3

  y = y % row.length;


  if (row[y] === '#') {
    result += 1
  }
}

console.log(result)