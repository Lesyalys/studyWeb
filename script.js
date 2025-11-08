//1.1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
const Ex1_1 = (number) => {
    return console.log(Number(number) > 0 ? "Положительное" : "Отрицательное");
}
//1.2 Дана строка. Выведите в консоль длину этой строки.
const Ex1_2 = (stroke) => {
    return console.log(stroke.length);
}
//2.1 Дано число. Выведите в консоль первую цифру этого числа.
const Ex2_1 = (number) => {
    return console.log(String(number)[0]);
}
//2.2 Дано число. Выведите в консоль последнюю цифру этого числа.
const Ex2_2 = (number) => {
    return console.log(String(number)[String(number.lenght - 1)]);
}
//3.1 Дана строка. Если в этой строке более одного символа, 
// выведите в консоль предпоследний символ этой строки.
const Ex3_1 = (stroke) => {
    return console.log(stroke.length > 1 && String(stroke)[String(stroke.length) - 2]);
}
//3.2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
const Ex3_2 = (num1, num2) => {
    return console.log((Number(num1) % Number(num2) === 0 ? true : false));
}
//4.1 Выведите в консоль все целые числа от 1 до 100.
const Ex4_1 = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
//4.5 Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
const Ex4_5 = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) console.log(i);
    }
}
//5.1 Найдите сумму всех целых чисел от 1 до 100.
const Ex5_1 = () => {
    let result;
    for (let i = 1; i <= 100; i++) {
        result += i;
    }
    return console.log((result));
}
//5.4 Даны два целых числа. Найдите остаток от деления первого числа на второе.
const Ex5_4 = (num1, num2) => {
    return console.log(Number(num1) % Number(num2));
}
//6.1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.
const Ex6_1 = (array) => {
    let result = 0;
    array.forEach((e) => { result += e ** 2 });
    return console.log(result);
}
//6.4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
const Ex6_4 = (array) => {
    let result = 0;
    array.forEach((e) => { result += (e > 0 && e < 10) && e });
    return console.log((result));
}
//7.1 Дана строка: 'abcde' Получите массив букв этой строки.
const Ex7_1 = (stroke) => {
    return console.log(Array.from(stroke));
}
//7.3 Дано некоторое число: 12345 Переверните его: 54321
const Ex7_3 = (number) => {
    return console.log(Number(String(number).split('').reverse().join('')));
}
//8.1 Заполните массив целыми числами от 1 до 10.
const Ex8_1 = (array) => {
    let result = [];
    for (let i = 1; i < 10; i++) {
        result.push(i);
    }
    return console.log(result);
}
//Задание 3.Создайте скрипт, выводящий на экран свойства и значения следующих объектов:
// window, document, location, navigator. При выполнении задания используйте оператор for ... in.

//Задание 4.Сгенерируйте с помощью двумерного массива и функции random()
// матрицу размера (10х10). Выведите ее на экран с помощью текстовых полей
// (сами поля, а также кнопки – обработчики событий должны создаваться при помощи скрипта).
// По щелчку на кнопке «Сортировка » отсортировать нечетные строки массива по возрастанию, а четные по убыванию.

