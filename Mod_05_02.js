//Задание 2.

//Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

//Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let x = null;
if (typeof x === 'number') {
   console.log('X - число');
   }
else if (typeof x === "string") {
  console.log('X - string')
}
else if (typeof x === 'boolean') {
    console.log('X - Boolean')
}
else  {
  console.log('X - undefined')
}
