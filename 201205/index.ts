
import * as fs from 'fs';
import * as path from 'path';

const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim().split('\n')
    .map(d => {
      return [parseInt(d.slice(0, 7).split('').map(s => s === 'F' ? '0' : '1').join(''), 2),
       parseInt(d.slice(7,10).split('').map(s => s === 'L' ? '0' : '1').join(''), 2)]
    })
  return input;
}

const action = (x, y, z) => {

  let result = 0

  return result
} 

const input = readData();
const r = input.map(i => i[0] * 8 + i[1])


console.log(Math.max(...r))