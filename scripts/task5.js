//Task 1

// async function counter(n) {
//     for(let i = n; i >= 0; i--) {
//       console.log(i);
//       await new Promise(resolve => setTimeout(resolve, 1000));
//     }
//   }
  
// counter(5);

//Task 1.1


function createCounter(n){
  let currentCount = n;
  let intervalId;

  async function start(){
    intervalId = setInterval(()=>{
      console.log(currentCount);
      currentCount--;
      if(currentCount == 0){
        clearInterval(intervalId);
      }
    },1000);
  }

  function pause(){
    clearInterval(intervalId);
  }

  function stop(){
    clearInterval(intervalId);
    currentCount = n;
  }

  return {start, pause, stop};
}

const counter = createCounter(10);

counter.start();

counter.pause();

counter.stop();

//counter.start();
