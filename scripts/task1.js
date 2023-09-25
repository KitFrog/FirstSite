// let admin, name;
// name = "Джон";
// admin = name;
// alert(admin);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(Number(a) + Number(b)); // 3

// for(let i = 2; i<10+1; i++){
//     if(i%2 == 0){
//         alert(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0;
// while(i<3){
//     i++;
//     alert( `number ${i}!` );
// }

// let input;
// for(let i = 0; i<1000; i++){
//     input = prompt("Введите число больше 100");
//     if(input == null){
//         break;
//     }
//     else if(input<100){
//         continue;
//     }
//     alert(input);
//     break;
// }

function isPrime(num){
    if (num == 1 || num == 2){
        return false;
    }

    for(let i = 3; i<num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

let num = prompt("Введите число");
num = Number(num);

for(let i = 1; i<num+1; i++){
    if(!prime(i)){
        continue;
    }
    alert(i);
}