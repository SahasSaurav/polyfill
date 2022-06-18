//  create polyfill for arr map

let arr = [1, 2, 3];

Array.prototype.customMap = function (callback) {
  let mapArr = [];
  for (let i = 0; i < this.length; i++) {
    mapArr.push(callback(this[i]));
  }
  return mapArr;
};

let arr2 = arr.customMap((item) => item ** 2);
console.log(arr2);
