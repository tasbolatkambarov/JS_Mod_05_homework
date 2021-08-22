// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [7, 7, 7, 7, 7];
let boolean = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[0]) {
    boolean = false;
    console.log(boolean);
    break;
  }
}
if (boolean) {
  console.log(boolean);
}