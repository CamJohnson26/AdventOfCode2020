
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
  const sets = group.map(g => new Set(g))
  const count = Array.from(sets.reduce((acc, cur) => new Set(Array.from(cur).filter(c => acc.has(c))))).length
  console.log(group, count)
  counts += count
}


console.log(counts)