//task 1

// let arr = [
//     {id: 1, isDone: true},
//     {id: 2, isDone: false},
//     {id: 3, isDone: true},
// ];

// for(let i = 0; i<arr.length; i++) {
//     if(arr[i].isDone)
//     {
//         alert(arr[i].id);
//     }
// }

//Task 2

// function f(arr = [], num) {
//     let outArr = [];

//     for(let i = 0; i<arr.length; i++) {
//         if(arr[i] > num){
//             outArr.push(arr[i]);
//         }
//     }
//     return outArr;
// }

// console.log(f([1, 4, 6, 3, 2], 2))

// Task 2.1

// let arr1 = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];

// console.log(arr1.flat(Infinity));

// Task 3

// function f(arr = []) {
//     let numOfZeros = 0;

//     for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j<arr.length; j++){
//             if(arr[i] + arr[j] === 0 && i != j){
//                 if(i<j) {
//                     arr.splice(i,1);
//                     arr.splice(j-1,1);
//                 }
//                 else {
//                     arr.splice(j,1);
//                     arr.splice(i-1,1);
//                 }
//                 numOfZeros++;
//             }
//         }
//     }
//     return numOfZeros;
// }

// console.log(f([-7, 12, 4, 6, -4, -12, 0]))
// console.log(f([-1, 2, 4, 7, -4, 1, -2]));
// console.log(f([-1, 1, 0, 1]));
// console.log(f([-1, 1, -1, 1]));
// console.log(f([1, 1, 1, 0, -1]));
// console.log(f([0, 0]));
// console.log(f([]));


// Task 3.1

// function f(arr = []) {
//     let numOfZeros = 0;

//     for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j<arr.length; j++){
//             for(let k = 0; k<arr.length; k++) {
//                 if(arr[i] + arr[j] + arr[k] === 0 && i != j != k){
//                 if(i<j<k){
//                     arr.splice(i,1);
//                     arr.splice(j-1,1);
//                     arr.splice(k-2,1);
//                 }
//                 else if(i<k<j){
//                     arr.splice(i,1);
//                     arr.splice(k-1,1);
//                     arr.splice(j-2,1);
//                 }
//                 else if(k<i<j){
//                     arr.splice(k,1);
//                     arr.splice(i-1,1);
//                     arr.splice(j-2,1);
//                 }
//                 else if(k<j<i){
//                     arr.splice(k,1);
//                     arr.splice(j-1,1);
//                     arr.splice(i-2,1);
//                 }
//                 else if(j<i<k){
//                     arr.splice(j,1);
//                     arr.splice(i-1,1);
//                     arr.splice(k-2,1);
//                 }
//                 else{
//                     arr.splice(j,1);
//                     arr.splice(k-1,1);
//                     arr.splice(i-2,1);
//                 }
//                 numOfZeros++;
//                 }
//             }
//         }
//     }
//     return numOfZeros;
// }

// console.log(f([-1,-1,0,2,4,7,5]))