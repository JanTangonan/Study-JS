//-----------------------------------------------------------------------------------------------------------------------------------//
// Factorial
//-----------------------------------------------------------------------------------------------------------------------------------//

// function factorial(num) {
//     if (num === 1) {
//         return 1
//     }
//     return num * factorial(num - 1)
// }

// console.log(factorial(6)) // = 120

//-----------------------------------------------------------------------------------------------------------------------------------//
// Fibonacci
//-----------------------------------------------------------------------------------------------------------------------------------//

function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(9));


