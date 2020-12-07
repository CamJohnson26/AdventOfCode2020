
import * as fs from 'fs';
import * as path from 'path';

const groupSplit = "\n"
const elementSplit = " contain "
const readData = () => {
  const file_path = 'input.txt'
  const data = fs.readFileSync(path.resolve(__dirname, file_path))
  const input = data.toString().trim()
    .split(groupSplit)
    .map(d => [d.split(elementSplit)[0], d.split(elementSplit)[1].split(', ')])
  return input;
}

const input = readData();

const graphMap = {}
for (const group of input) {
  const outer = (group[0] as string).replace('bags.', '').replace('bag.', '').replace('bags', '').replace('bag', '').trim()
  // console.log(outer)
  for (const element of group[1]) {
    const parsed = element.slice(2, element.length).replace('bags.', '').replace('bag.', '').replace('bags', '').replace('bag', '').trim()
    if (parsed === ' other' || parsed === ' other ' || parsed === 'other ' || parsed.includes('other')) {
      continue;
    } else {

      // console.log(outer)
      if (Object.keys(graphMap).includes(outer)) {
        graphMap[outer].add(parsed)
      } else {
        graphMap[outer] = new Set([parsed])
      }
      // console.log(parsed)
    }
  }
}

const all = new Set(Object.keys(graphMap))
const memo = {}

function depthFirst(element) {
  // console.log(element)
  // console.log(memo)
  element === 'dark orange' && console.log(element)
  if (element === 'shiny gold') {
    return false
  }
  if (Object.keys(memo).includes(element)) {
    return memo[element]
  } else {
    if (!Object.keys(graphMap).includes(element)) {
      return false;
    }
    if (Array.from(graphMap[element]).includes('shiny gold')) {
      // console.log(true)
      return true;
    }
    // console.log(Array.from(graphMap[element]))
    return Array.from(graphMap[element]).reduce((acc, cur) => {
      return acc || depthFirst(cur)
    }, false);
  }
}

console.log(graphMap)

let count = 0;
for (const a of Array.from(all)) {
  if (depthFirst(a)) {
    count += 1
    console.log(a)
  }
}

console.log(count)
// console.log(all)

// console.log(input)