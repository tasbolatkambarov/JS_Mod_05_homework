// Задание 7.
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
let arr = [1, 3, 4, 7, 8.9, 0, null];
let sumEven = 0;
let sumOdd = 0;
let nullElement = 0;
let NaN = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number') {
    if (arr[i] % 2 === 0 & arr[i] !== 0) {
      sumEven += 1
    } else {
      if (arr[i] % 2 !== 0) {
        sumOdd += 1
      } else {
        if (arr[i] === 0) {
          nullElement = 'Массив содержит нулевой элемент'
        }
      }
      }
    } else {
      if (typeof arr[i] !== 'number') {
        NaN = 'Массив содержит элементы не являющиеся числами'
      }
    }
  }
   
console.log(`Массив содержит ${sumEven} чётных и ${sumOdd} нечётных числа`)
if (nullElement !== 0) {
  console.log(nullElement)
}
if (NaN !== 0) {
  console.log(NaN)
}