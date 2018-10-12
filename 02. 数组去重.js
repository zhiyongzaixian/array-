// 数组去重
let arr = [1,2,2,2,3,4,5,5,4,4,5]


// 方法一
function unique_arr(arr) {
  let uniqueArr = [];
  for (var i = 0; i < arr.length; i++) {
    // 数组去重
    uniqueArr.indexOf(arr[i]) === -1?uniqueArr.push(arr[i]):''
  }
  return uniqueArr
}

console.log(unique_arr(arr));
// 方法二

function unique_arr2(arr) {
  // 利用ES5的filter方法
  return arr.filter((item, index, array) => array.indexOf(item) === index)
}

// 方法三
function unique_arr3(arr) {
  // 利用ES6的set容器和三点运算符
  return [...new Set(arr)]
}

console.log(unique_arr2(arr));

