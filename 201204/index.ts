
import * as fs from 'fs';
import * as path from 'path';

const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim().split('\n')

  return input;
}

const action = (x, y, z) => {

  let result = 0

  return result
} 

const fields =new Set(['byr',
'iyr',
'eyr',
'hgt',
'hcl',
'ecl',
'pid',])


const input = readData();
const inp = [[]]

for (const i of input) {
  if (i === '') {
    inp.push([])
  }
  else {
    inp[inp.length-1] = inp[inp.length-1].concat(i.split(' '))
  }
}

const valid = (x) => {
  const truth = []
  for (const s of x) {
    if (fields.has(s.split(':')[0])) {
      truth.push(s.split(':')[0])
    }
  }
  if (fields.size !== (new Set(truth)).size) return false;
  for (const a of [...truth])  {
    if (!fields.has(a)) {
      return false
    }
  }
  return true
}
const r = inp.filter(i => valid(i)).length


console.log(r)