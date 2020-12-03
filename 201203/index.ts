
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

const count_trees = (input, x_shift, y_shift) => {

  let result = 0
  let x = 0
  let y = 0
  if (input[x][y] === '#') {
    result += 1
  }
  for (const row of input) {
    x += x_shift
    y += y_shift

    y = y % row.length;
    if (x > input.length - 1) {
      break;
    }
    if (input[x][y] === '#') {
      result += 1
    }
  }

  return result
} 

const input = readData();
const results = [
  count_trees(input, 1, 1),
  count_trees(input, 1, 3),
  count_trees(input, 1, 5),
  count_trees(input, 1, 7),
  count_trees(input, 2, 1),
]

console.log(results.reduce((acc, cur) => acc*cur, 1))