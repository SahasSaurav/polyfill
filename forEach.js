//  write a pollyfill for array forEach method

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

let arr = [1, 2, 3];
let newArr = [];
// arr.forEach((item) => {
//   newArr.push(item * 2);
// });
arr.customForEach((item) => {
  newArr.push(item * 2);
});

console.log('arr', arr);
console.log('newArr', newArr);
