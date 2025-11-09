function showResult(elementId, result) {
    const getElementId = document.getElementById(elementId);
    getElementId.textContent = result;
    getElementId.classList.remove('result-hidden');
    getElementId.classList.add('result-visible');
}

//1.1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
const Ex1_1 = (number, elementId) => {
    const result = (Number(number) > 0 ? "Положительное" : "Отрицательное");
    showResult(elementId, result);
}
//1.2 Дана строка. Выведите в консоль длину этой строки.
const Ex1_2 = (stroke, elementId) => {
    const result = stroke.length;
    showResult(elementId, result);
}
//2.1 Дано число. Выведите в консоль первую цифру этого числа.
const Ex2_1 = (number, elementId) => {
    const result = String(number)[0];
    showResult(elementId, result);
}
//2.2 Дано число. Выведите в консоль последнюю цифру этого числа.
const Ex2_2 = (number, elementId) => {
    const result = String(number)[String(number.length - 1)];
    showResult(elementId, result);
}
//3.1 Дана строка. Если в этой строке более одного символа, 
// выведите в консоль предпоследний символ этой строки.
const Ex3_1 = (stroke, elementId) => {
    const result = stroke.length > 1 && String(stroke)[String(stroke.length) - 2];
    showResult(elementId, result);
}
//3.2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
const Ex3_2 = (num1, num2, elementId) => {
    const result = Number(num1) % Number(num2) === 0 ? true : false;
    showResult(elementId, result);
}
//4.1 Выведите в консоль все целые числа от 1 до 100.
const Ex4_1 = (elementId) => {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        result += i + (i < 100 ? ', ' : '');
    }
    showResult(elementId, result);
}

//4.5 Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
const Ex4_5 = (elementId) => {
    let result = '';
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            result += i + (i < 99 ? ', ' : '');
            count++;
        }
    }
    showResult(elementId, result);
}

//5.1 Найдите сумму всех целых чисел от 1 до 100.
const Ex5_1 = (elementId) => {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
        result += i;
    }
    showResult(elementId, result);
}

//5.4 Даны два целых числа. Найдите остаток от деления первого числа на второе.
const Ex5_4 = (num1, num2, elementId) => {
    const result = Number(num1) % Number(num2);
    showResult(elementId, result);
}

//6.1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.
const Ex6_1 = (arrayString, elementId) => {
    const array = arrayString.split(',').map(num => Number(num.trim()));
    let result = 0;
    array.forEach((e) => { result += e ** 2 });
    showResult(elementId, result);
}

//6.4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
const Ex6_4 = (arrayString, elementId) => {
    const array = arrayString.split(',').map(num => Number(num.trim()));
    let result = 0;
    array.forEach((e) => {
        if (e > 0 && e < 10) {
            result += e;
        }
    });
    showResult(elementId, result);
}

//7.1 Дана строка: 'abcde' Получите массив букв этой строки.
const Ex7_1 = (stroke, elementId) => {
    const result = Array.from(stroke);
    showResult(elementId, result);
}

//7.3 Дано некоторое число: 12345 Переверните его: 54321
const Ex7_3 = (number, elementId) => {
    const result = Number(String(number).split('').reverse().join(''));
    showResult(elementId, result);
}

//8.1 Заполните массив целыми числами от 1 до 10.
const Ex8_1 = (elementId) => {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        result.push(i);
    }
    showResult(elementId, result);
}
//Задание 3.Создайте скрипт, выводящий на экран свойства и значения следующих объектов:
// window, document, location, navigator. При выполнении задания используйте оператор for ... in.

//Задание 4.Сгенерируйте с помощью двумерного массива и функции random()
// матрицу размера (10х10). Выведите ее на экран с помощью текстовых полей
// (сами поля, а также кнопки – обработчики событий должны создаваться при помощи скрипта).
// По щелчку на кнопке «Сортировка » отсортировать нечетные строки массива по возрастанию, а четные по убыванию.

