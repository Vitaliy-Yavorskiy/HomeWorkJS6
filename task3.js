// Завдання 3

// Написати розв’язок нижче описаного завдання за допомогою function expression or arrow:
// Створіть функцію, в яку передається 2 параметри, які користувач вводить через вікно prompt(). 
// Потрібно щоб функція виводила діапазон тільки простих чисел console.log(), між тими які ввів користувач.
// Приклад роботи:
// simpleNumber(10,15) – має повернути 11, 13
// simpleNumber (2,20) – має повернути 2,3,5,7,11,13,17,19

// function fib(n, s) { 
//     return 1 * ((1 - s * n) / (1 - s));
// }
// console.log(fib(2,20));

function number(n){ 
  var nums = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  return nums.slice(0, Math.max( 0, Math.min(n, nums.length) ) ).join(', ');
}
  console.log( number(5) );