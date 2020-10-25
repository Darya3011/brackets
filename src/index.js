// module.exports = function check(str, bracketsConfig) {
//   const openBrackets = [];
//   const closeBrackets = {};
//   for (let i of bracketsConfig) {
//     let op = i[0].trim();
//     let up = i[1].trim();
//     openBrackets.push(op);
//     closeBrackets[op] = up;
//   } 
//   let stack = [];
//   for (let u of str) {
//     if (openBrackets.indexOf(u) !== -1) {
//       stack.push(u);
//     } else {
//       if (u == stack[stack.length - 1]) {

//       }
//     }
//   }
// }

module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = []
  const closeBracketsMap = {};
  for (let i of bracketsConfig) {
    let op = i[0].trim();
    let up = i[1].trim();
    openBrackets.push(op);
    closeBrackets.push(up);
    closeBracketsMap[op] = up;
  } 
  let stack = [];
  for (let u of str) {
    if (closeBrackets.indexOf(u) !== -1) {
      if (stack.length === 0 || u !== closeBracketsMap[stack[stack.length - 1]]) {
        if (openBrackets.indexOf(u) !== -1) {
          stack.push(u);
        } else {
          return false
        }
      } else {
        stack.pop()
      }
    } else if (openBrackets.indexOf(u) !== -1) {
      stack.push(u);
    } else {
      return false;
    }
  }
  return stack.length === 0
}

