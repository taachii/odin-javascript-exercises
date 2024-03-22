/**
 * 
 * @param {number[]} arr 
 * @param {number[]} nums
 */

const removeFromArray = function(arr, ...nums) {
  // const newArr = [];

  // arr.forEach((num) => {
  //   if(!nums.includes(num)) {
  //     newArr.push(num);
  //   }
  // });

  // return newArr;
  
  return arr.filter(num => !nums.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
