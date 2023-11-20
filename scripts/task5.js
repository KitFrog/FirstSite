// First half

//Task 1

// async function counter(n) {
//     for(let i = n; i >= 0; i--) {
//       console.log(i);
//       await new Promise(resolve => setTimeout(resolve, 1000));
//     }
//   }
  
// counter(5);


//Task 1.1



// function createCounter(n){
//   let currentCount = n;
//   let intervalId;

//   async function start(){
//     intervalId = setInterval(()=>{
//       console.log(currentCount);
//       currentCount--;
//       if(currentCount == 0){
//         stop();
//       }
//     },1000);
//   }

//   async function pause(){
//     clearInterval(intervalId);
//   }

//   async function stop(){
//     clearInterval(intervalId);
//     currentCount = n;
//   }

//   return {start, pause, stop};
// }

// const counter =  createCounter(3);

// counter.start();


// Task 2

// function delay(count){
//   if (count > 0){
//     setTimeout(()=>{
//       console.log(count);
//       delay(count-1);
//     },1000);
//   }
// }

// delay(5);

//Task 2.1

// async function getFirstRepository(username) {
//   try {
//     const userResponse = await fetch(`https://api.github.com/users/${username}`);
//     const userData = await userResponse.json();
//     const reposResponse = await fetch(userData.repos_url);
//     const reposData = await reposResponse.json();
//     const firstRepo = reposData[0];
//     return firstRepo.name;
//   } catch (error) {
//     throw new Error('Ошибка при получении данных с GitHub API');
//   }
// }

// // Пример использования
// getFirstRepository('octocat')
//   .then(repoName => console.log(`Первый репозиторий: ${repoName}`))
//   .catch(error => console.error(error.message));


// Task 3

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   const response = await fetch(url);

//   if (response.status == 200) {
//     return await response.json();
//   }
//   else {
//     throw new HttpError(response);
//   }
// }

// async function getGithubUser() {
//   let name;
//   do {
//     name = prompt("Введите логин?", "iliakan");

//     try {
//       const user = await loadJson(`https://api.github.com/users/${name}`);
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     }
//     catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//       }
//       else {
//         throw err;
//       }
//     }
//   } while (true);
// }


// getGithubUser();


// Second half==============================================================================================================================================

// Task 1

// /**
//  * 
//  * @param {number[]} array 
//  */

// function maxAndMin(array){
//   const numberSortFn = (a, b) => {
//     if (a < b) {
//       return -1;
//     } else if (a === b) {
//       return 0;
//     } else {
//       return 1;
//     }
//   };
  
//   array.sort(numberSortFn);
//   let min = array[0];
//   let max = array[array.length-1];
//   return{min,max, array};
// }

// console.log(maxAndMin([1, 6, -1, 22, 13]));


// Task 2

// /**
//  * 
//  * @param {string} str 
//  */
// function reverse(str){
//   let arr = str.split('');
//   arr.reverse();
//   str = arr.join('');
//   return str;
// }

// console.log(reverse("!тевирП"));


// Task 3

// /**
//  * 
//  * @param {number[]} arr 
//  */
// function sumOfScuares(arr){
//   let outPut = 0;
//   for(let i = 0; i<arr.length; i++){
//       outPut += arr[i]*arr[i];
//   }
//   return outPut;
// }

// console.log(sumOfScuares([3, 5, 8, 13, 21, 42]));


// Task 4

// /**
//  * 
//  * @param {string} str1 
//  * @param {string} str2 
//  */
// function anagram(str1, str2){
//   str1 = str1.toLowerCase().replace(/\s/g, '');
//   str2 = str2.toLowerCase().replace(/\s/g, '');

//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(anagram("Лунь", "нуль")); // true
// console.log(anagram("Лунь", "ноль")); // false


// Task 5

// /**
//  * 
//  * @param {string} str 
//  */
// function palindrome(str){
//   str = str.toLowerCase().replace(/\s/g, '');
//   let arr = str.split('');
//   for(let i=0, j=arr.length-1; i<arr.length-1; i++, j--){
//     if(arr[i] !== arr[j]){ 
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindrome("Не гни папин ген"));
// console.log(palindrome("123"));

// Task 6

function fibonacci(n){
  if(n === 0){
    return 0;
  }
  if(n === 1 || n === 2) {
      return 1;
    }
        

  return (fibonacci(n-1) + fibonacci(n-2));
}

async function counterFibonacci(n) {
  for(let i = 1; i < n+1; i++) {
    console.log(fibonacci(i));
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

counterFibonacci(10);


// Task 7

function delay(N) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, N * 1000);
  });
}

delay(5).then(() => {
  console.log('Прошло 5 секунд');
});


// Task 8

function intersect(arrA, arrB) {
  return arrA.filter(item => arrB.includes(item));
}

const arrA = [1, 2, 3, 4, 5];
const arrB = [3, 4, 5, 6, 7];

const result = intersect(arrA, arrB);
console.log(result); // Выведет: [3, 4, 5]
