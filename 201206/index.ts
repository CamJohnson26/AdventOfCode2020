
import * as fs from 'fs';
import * as path from 'path';

const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim().split('\n\n')
    .map(d => d.split('\n'))
  return input;
}

const action = (x, y, z) => {

  let result = 0

  return result
} 

const input = readData();

let counts = 0
for (const group of input) {
  const map = {}
  for (const row of group) {
    const ans = row.split('')
    for (const answer of ans) {
      if (Object.keys(map).includes(answer)) {
        continue
      } else {
        map[answer] = true
      }
    }
  }
  counts += Object.keys(map).length
}


console.log(counts)