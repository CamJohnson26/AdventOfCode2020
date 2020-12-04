
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

const action = (x, y, z) => {

  let result = 0

  return result
} 

const input = readData();


console.log(input)