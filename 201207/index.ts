
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
    const num = parseInt(element.split(' ')[0])
    const parsed = element.slice(2, element.length).replace('bags.', '').replace('bag.', '').replace('bags', '').replace('bag', '').trim()
    if (parsed === ' other' || parsed === ' other ' || parsed === 'other ' || parsed.includes('other')) {
      continue;
    } else {

      // console.log(outer)
      if (Object.keys(graphMap).includes(outer)) {
        graphMap[outer].add({val: parsed, num})
      } else {
        graphMap[outer] = new Set([{val: parsed, num}])
      }
      // console.log(parsed)
    }
  }
}
console.log(graphMap)
const all = new Set(Object.keys(graphMap))
const memo = {}

function depthFirst(element) {
  console.log('-----------------')
  console.log(element)
  // console.log(memo)
  if (Object.keys(memo).includes(element.val)) {
    return memo[element.val]
  } else {
    if (!Object.keys(graphMap).includes(element.val)) {
      return 1;
    }
    console.log(Array.from(graphMap[element.val]))
    return (Array.from(graphMap[element.val]).reduce((acc: number, cur: {val: string, num: number}) => {
      // console.log(acc, cur.val, cur.num, depthFirst(cur),acc + (cur.val === 'shiny gold' ? 0 : (depthFirst(cur)))* cur.num)
      const rv = acc + (cur.val === 'shiny gold' ? 0 : (depthFirst(cur)))* cur.num
      console.log(element, rv)
      return rv
    }, 0)) as number + 1;
  }
}


let count = 0;
  count += depthFirst({val: 'shiny gold', num: 1})
count -= 1
console.log(count)
// console.log(all)

// console.log(input)