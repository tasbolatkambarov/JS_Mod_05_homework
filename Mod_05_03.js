//Задание 3.

//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = 'hello';

str = str.split("");
str = str.reverse();
str = str.join("");

console.log(str)