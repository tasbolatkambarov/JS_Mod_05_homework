//Задание 5.

//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const arr = ['string', true, NaN, 7, undefined, null, false];
console.log(arr.length);

for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
