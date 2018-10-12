// 数组扁平化： 将多维数组变成一维数组
// let arr = [[1,2,3],[4,5,6],7,8,9]  ---> [1,2,3,4,5,6,7,8,9]\

let arr = [[1,2,3],[4,5, [88, [111]],6],7,8,9]
console.log([1,2,3].concat([4,5]));
console.log([1,2,3].concat(4,5));

// 方法一
function filter1(arr) {
  // 1. 数组的concat方法可以合并数组
  // 2. apply传参的形式为数组，此为点睛之笔，但只能处理二位数组
  return [].concat.apply([], arr)
}


// 方法二
// function filter2(arr) {
//   return arr.reduce((pre, next) => {
//     if(Array.isArray(next)){  // 解决多维数组问题
//       next = filter2(next)
//     }
//     return pre.concat(next)  // 只能处理二维数组
//   }, [])
// }

// 上边功能函数的简写方式

function filter2(arr) {
  return arr.reduce((pre, next) => pre.concat(Array.isArray(next)?next=filter2(next):next), [])
}

console.log(filter2(arr));

// let result = [1,2,3,4].reduce((pre, next) => {
//   console.log(pre, next);
//   return pre + next
// }, 10)
//
// console.log(result);

