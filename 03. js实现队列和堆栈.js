// js 实现队列和堆栈

// 队列和栈的区别
/*

 队列: 先进先出，后进后出，横向的一个左右开口的桶装管道
 栈: 先进后出，后进先出，纵向的一个只有上部开口的桶装管道

*/
// 实现队列  使用数组的方法unshift在数组的前边添加一个新的元素
let arr = new Array()
// 进
arr.unshift(1)  // [1]
arr.unshift(2)  // [2, 1]
arr.unshift(3)  // [3, 2, 1]
arr.unshift(4)  // [4, 3, 2, 1]
console.log(arr);  // [4, 3, 2, 1]
// 出
console.log(arr.pop());  // 1 [4, 3, 2]
console.log(arr.pop());  // 2 [4, 3]
console.log(arr.pop());  // 3 [4]
console.log(arr.pop());  // 4 []


// 实现栈 使用数组的方法push在数组的后边添加一个新的元素
let arr2 = new Array()
// 进
arr2.push(1)  // [1]
arr2.push(2)  // [1, 2]
arr2.push(3)  // [1, 2, 3]
arr2.push(4)  // [1, 2, 3, 4]
console.log(arr2);  // [1, 2, 3, 4]
// 出
console.log(arr2.pop());  // 4 [1, 2, 3]
console.log(arr2.pop());  // 3 [1, 2]
console.log(arr2.pop());  // 2 [1]
console.log(arr2.pop());  // 1 []