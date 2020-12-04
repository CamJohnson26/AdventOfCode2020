
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
let validate = (a, b) => {
  if (b === "") return false
  if (a === "cid") return true
  if (a === 'byr') {
    const nums = (new RegExp(/^([0-9]{4,})$/)).test(b)
    if (!nums) return false;
    const srtr = parseInt(b);
    if (srtr === NaN) return false;
    return srtr >= 1920 && srtr <= 2002
  }
  if (a === 'iyr') {
    const nums = (new RegExp(/^([0-9]{4,})$/)).test(b)
    if (!nums) return false;
    const srtr = parseInt(b);
    if (srtr === NaN) return false;
    return srtr >= 2010 && srtr <= 2020
  }
  if (a === 'eyr') {
    const nums = (new RegExp(/^([0-9]{4,})$/)).test(b)
    if (!nums) return false;
    const srtr = parseInt(b);
    if (srtr === NaN) return false;
    return srtr >= 2020 && srtr <= 2030
  }
  if (a === 'hgt') {
    const ends = (new RegExp(/^([0-9]+cm)|[0-9]+in$/)).test(b)
    if (!ends) return false;
    const vals = b.split("")
    vals.pop()
    vals.pop()
    const str = parseInt(vals.join(""))
    if (str === NaN) return false;
    return (b.includes("cm") && str >= 150 && str <= 193) || (b.includes("in") && str >= 59 && str <= 76);
  }
  if (a === 'hcl') {
    return (new RegExp(/^#[0-9a-f]{6}$/)).test(b)
  }
  if (a === 'ecl') {
    return (new RegExp(/^(amb|blu|brn|gry|grn|hzl|oth)$/)).test(b)
  }
  if (a === 'pid') {
    return (new RegExp(/^[0-9]{9,}$/)).test(b) && b.length < 10
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
    if (!fields.has(a)|| !validate(a, x.filter(y => y.split(':')[0] === a)[0].split(':')[1]) ) {
      console.log(x.filter(y => y.split(':')[0] === a)[0].split(':')[1], a)
      return false
    }
  }
  return true
}
const r = inp.filter(i => valid(i)).length


console.log(r)