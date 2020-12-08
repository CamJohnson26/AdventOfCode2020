
import * as fs from 'fs';
import * as path from 'path';

const groupSplit = "\n"
const elementSplit = " "
const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim()
    .split(groupSplit)
    .map(d => d.split(elementSplit))
    .map(e => [e[0], parseInt(e[1])])
  return input;
}

const old_input = readData();

for (let i = 0; i < old_input.length; i++) {
  console.log(i)
  const input = [...old_input];
  input[i] = [old_input[i][0] === 'jmp' ? 'nop' : old_input[i][0] === 'nop' ? 'jmp' : 'acc', old_input[i][1]];
  const done: {[key: string]: boolean} = {}

  let acc = 0;
  let index = 0
  while (!Object.keys(done).includes(index.toString())) {
    done[index.toString()] = true
    if (input[index][0] === 'nop') {
      index += 1;
    } else if (input[index][0] === 'acc') {
      acc += input[index][1] as number;
      index += 1;
    } else if (input[index][0] === 'jmp') {
      index += input[index][1] as number;
    }
  
    if (index === input.length) {
      console.log('FOUND IT!!!!!!!!!!!!!!!!!!', acc)
    }
  }
}
