//Задание 2.

//Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

//Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let x = '5';
if (typeof x === "string") {
  console.log("x-string");
} else if (typeof x === "number") {
  console.log("x-number");
} else if (typeof x === "boolean") {
  console.log("x-boolean");
} else {
  console.log("type x - is undefined");
}