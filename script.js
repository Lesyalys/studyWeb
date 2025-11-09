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

const Ex3 = (elementId, objName) => {
    const objects = {
        'window': window,
        'document': document,
        'location': location,
        'navigator': navigator
    };
    const obj = objects[objName];
    if (!obj) {
        showResult(elementId, `Объект "${objName}" не найден`);
        return;
    }
    let result = `==${objName}===\n`;
    let count = 1;
    for (const prop in obj) {
        if (count > 15) break;
        try {
            let value = obj[prop];
            let valueStr;
            if (typeof value === 'function') {
                valueStr = '[function]';
            } else if (typeof value === 'object' && value !== null) {
                valueStr = '[object]';
            } else {
                valueStr = String(value);
            }
            if (valueStr.length > 40) {
                valueStr = valueStr.substring(0, 40) + '...';
            }

            result += `${count}. ${prop}: ${valueStr}\n`;
            count++;
        } catch (e) {
            result += `${count}. ${prop}: [недоступно]\n`;
            count++;
        }
    }
    showResult(elementId, result);
}

//Задание 4.Сгенерируйте с помощью двумерного массива и функции random() матрицу размера (10х10). 
// Выведите ее на экран с помощью текстовых полей
// (сами поля, а также кнопки – обработчики событий должны создаваться при помощи скрипта).
// По щелчку на кнопке «Сортировка » отсортировать нечетные строки массива по возрастанию, а четные по убыванию.
const Ex4 = (elementId) => {

    const container = document.getElementById(elementId);
    container.innerHTML = '';
    container.classList.remove('result-hidden');
    container.classList.add('result-visible');

    const matrixDiv = document.createElement('div');
    matrixDiv.id = 'matrixContainer';
    matrixDiv.className = 'mb-4';

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'flex gap-2 mb-4';

    const generateBtn = document.createElement('button');
    generateBtn.textContent = 'Сгенерировать матрицу';
    generateBtn.className = 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors';
    generateBtn.onclick = () => generateMatrix('matrixContainer');

    const sortBtn = document.createElement('button');
    sortBtn.textContent = 'Сортировка';
    sortBtn.className = 'bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition-colors';
    sortBtn.onclick = () => sortMatrix('matrixContainer');

    buttonsDiv.appendChild(generateBtn);
    buttonsDiv.appendChild(sortBtn);

    container.appendChild(buttonsDiv);
    container.appendChild(matrixDiv);

}
const generateMatrix = (containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    matrix = [];
    for (let i = 0; i < 10; i++) {
        const row = [];
        const rowDiv = document.createElement('div');
        rowDiv.className = 'flex justify-center mb-1';

        for (let j = 0; j < 10; j++) {
            const value = Math.floor(Math.random() * 100);
            row.push(value);

            const input = document.createElement('input');
            input.type = 'text';
            input.value = value;
            input.className = 'w-8 h-5 text-center bg-gray-700 border border-gray-600 rounded mx-1 text-white font-mono text-sm';
            input.readOnly = true;
            rowDiv.appendChild(input);
        }

        matrix.push(row);
        container.appendChild(rowDiv);
    }

    const infoDiv = document.createElement('div');
    infoDiv.className = 'mt-4 p-3 bg-gray-700 rounded text-sm text-gray-300';
    infoDiv.innerHTML = 'Матрица 10×10 сгенерирована';
    container.appendChild(infoDiv);
}


const sortMatrix = (containerId) => {
    if (matrix.length === 0) {
        alert('Сначала сгенерируйте матрицу!');
        return;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].sort((a, b) => a - b);
        } else {
            matrix[i].sort((a, b) => b - a);
        }
    }
    updateMatrixDisplay(containerId);
    const container = document.getElementById(containerId);
    const infoDiv = document.createElement('div');
    infoDiv.className = 'mt-3 p-2 bg-blue-900 rounded text-sm text-blue-200';
    infoDiv.innerHTML = '✓ Матрица отсортирована: нечетные строки по возрастанию, четные по убыванию';
    container.appendChild(infoDiv);
}
const updateMatrixDisplay = (containerId) => {
    const container = document.getElementById(containerId);
    const inputs = container.getElementsByTagName('input');
    let inputIndex = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (inputs[inputIndex]) {
                inputs[inputIndex].value = matrix[i][j];

                if (i % 2 === 0) {
                    inputs[inputIndex].classList.add('bg-purple-600');
                    inputs[inputIndex].classList.remove('bg-blue-600');
                } else {
                    inputs[inputIndex].classList.add('bg-blue-600');
                    inputs[inputIndex].classList.remove('bg-blue-600');
                }

                inputIndex++;
            }
        }
    }
}

const Ex5 = (elementId) => {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    container.classList.remove('result-hidden');
    container.classList.add('result-visible');

    const contentDiv = document.createElement('div');
    contentDiv.id = 'cramerContent';

    createCramerForm(contentDiv);

    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'cramerResults';
    resultsDiv.className = 'mt-6 hidden';

    contentDiv.appendChild(resultsDiv);
    container.appendChild(contentDiv);
}

const createCramerForm = (container) => {
    const header = document.createElement('h3');
    header.className = 'text-lg font-semibold text-white mb-4';
    header.textContent = 'Система уравнений:';
    container.appendChild(header);

    const table = document.createElement('table');
    table.className = 'w-full mb-6 bg-gray-800 rounded-lg overflow-hidden';

    const thead = document.createElement('thead');
    thead.className = 'bg-gray-700';
    const headerRow = document.createElement('tr');

    const headers = ['Уравнение', 'X₁', 'X₂', 'X₃', '=', 'Свободный член'];
    headers.forEach((headerText, index) => {
        const th = document.createElement('th');
        th.className = 'p-3 text-left text-sm font-semibold text-gray-300';
        if (index === 0) th.className += ' w-32';
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    const equations = [
        { name: '1-е уравнение', ids: ['a11', 'a12', 'a13', 'b1'] },
        { name: '2-е уравнение', ids: ['a21', 'a22', 'a23', 'b2'] },
        { name: '3-е уравнение', ids: ['a31', 'a32', 'a33', 'b3'] }
    ];

    equations.forEach((eq, index) => {
        const row = document.createElement('tr');
        row.className = index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750';

        const nameCell = document.createElement('td');
        nameCell.className = 'p-3 text-gray-300 text-sm';
        nameCell.textContent = eq.name;
        row.appendChild(nameCell);

        eq.ids.forEach((id, coeffIndex) => {
            const cell = document.createElement('td');
            cell.className = 'p-2';

            const input = document.createElement('input');
            input.type = 'number';
            input.id = id;
            input.className = 'w-16 h-10 text-center bg-gray-700 border border-gray-600 rounded text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors';
            input.placeholder = '0';
            input.step = '0.1';

            cell.appendChild(input);
            row.appendChild(cell);

            //знак равенства после третьего коэффициента
            if (coeffIndex === 2) {
                const equalsCell = document.createElement('td');
                equalsCell.className = 'p-3 text-center text-gray-300 font-bold';
                equalsCell.textContent = '=';
                row.appendChild(equalsCell);
            }
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'flex flex-wrap gap-4 justify-center';

    const generateBtn = document.createElement('button');
    generateBtn.textContent = 'Сгенерировать коэффициенты';
    generateBtn.className = 'bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium';
    generateBtn.onclick = generateCoefficients;

    const solveBtn = document.createElement('button');
    solveBtn.textContent = 'Решение системы';
    solveBtn.className = 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium';
    solveBtn.onclick = solveCramerSystem;

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Очистить';
    clearBtn.className = 'bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium';
    clearBtn.onclick = clearCoefficients;

    buttonsDiv.appendChild(generateBtn);
    buttonsDiv.appendChild(solveBtn);
    buttonsDiv.appendChild(clearBtn);
    container.appendChild(buttonsDiv);
}

const generateCoefficients = () => {
    const coefficients = ['a11', 'a12', 'a13', 'b1', 'a21', 'a22', 'a23', 'b2', 'a31', 'a32', 'a33', 'b3'];

    coefficients.forEach(id => {
        const input = document.getElementById(id);
        let value;
        if (id.startsWith('a') && (id === 'a11' || id === 'a22' || id === 'a33')) {
            do {
                value = Math.floor(Math.random() * 21) - 10;
            } while (value === 0);
        } else {
            value = Math.floor(Math.random() * 21) - 10;
        }
        input.value = value;
    });
}

const clearCoefficients = () => {
    const coefficients = ['a11', 'a12', 'a13', 'b1', 'a21', 'a22', 'a23', 'b2', 'a31', 'a32', 'a33', 'b3'];

    coefficients.forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
    });

    const resultsDiv = document.getElementById('cramerResults');
    resultsDiv.classList.add('hidden');
}

// Решение системы методом Крамера
const solveCramerSystem = () => {
    const resultsDiv = document.getElementById('cramerResults');
    resultsDiv.classList.remove('hidden');
    resultsDiv.innerHTML = '';

    const a11 = parseFloat(document.getElementById('a11').value) || 0;
    const a12 = parseFloat(document.getElementById('a12').value) || 0;
    const a13 = parseFloat(document.getElementById('a13').value) || 0;
    const b1 = parseFloat(document.getElementById('b1').value) || 0;

    const a21 = parseFloat(document.getElementById('a21').value) || 0;
    const a22 = parseFloat(document.getElementById('a22').value) || 0;
    const a23 = parseFloat(document.getElementById('a23').value) || 0;
    const b2 = parseFloat(document.getElementById('b2').value) || 0;

    const a31 = parseFloat(document.getElementById('a31').value) || 0;
    const a32 = parseFloat(document.getElementById('a32').value) || 0;
    const a33 = parseFloat(document.getElementById('a33').value) || 0;
    const b3 = parseFloat(document.getElementById('b3').value) || 0;

    // определители
    const mainDet = calculateDeterminant3x3(a11, a12, a13, a21, a22, a23, a31, a32, a33);
    const detX1 = calculateDeterminant3x3(b1, a12, a13, b2, a22, a23, b3, a32, a33);
    const detX2 = calculateDeterminant3x3(a11, b1, a13, a21, b2, a23, a31, b3, a33);
    const detX3 = calculateDeterminant3x3(a11, a12, b1, a21, a22, b2, a31, a32, b3);

    const resultContent = document.createElement('div');
    resultContent.className = 'bg-gray-800 p-6 rounded-lg border border-gray-700';

    let resultHTML = '';

    if (mainDet === 0) {
        if (detX1 === 0 && detX2 === 0 && detX3 === 0) {
            resultHTML = `
                <div class="text-center">
                    <div class="text-yellow-400 text-lg font-semibold mb-2">Система имеет бесконечное количество решений</div>
                    <p class="text-gray-300">Определитель системы равен нулю, и все определители неизвестных также равны нулю.</p>
                </div>
            `;
        } else {
            resultHTML = `
                <div class="text-center">
                    <div class="text-red-400 text-lg font-semibold mb-2">Система не имеет решений</div>
                    <p class="text-gray-300">Определитель системы равен нулю, но хотя бы один определитель неизвестных не равен нулю.</p>
                </div>
            `;
        }
    } else {
        const x1 = detX1 / mainDet;
        const x2 = detX2 / mainDet;
        const x3 = detX3 / mainDet;

        resultHTML = `
            <div class="text-center mb-6">
                <div class="text-green-400 text-lg font-semibold mb-2">Система имеет единственное решение</div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                    <label class="block text-gray-300 mb-2 font-medium">X₁</label>
                    <input type="text" value="${x1.toFixed(4)}" readonly 
                           class="w-full p-3 bg-gray-700 border border-green-500 rounded text-white text-center text-lg font-mono">
                </div>
                <div class="text-center">
                    <label class="block text-gray-300 mb-2 font-medium">X₂</label>
                    <input type="text" value="${x2.toFixed(4)}" readonly 
                           class="w-full p-3 bg-gray-700 border border-green-500 rounded text-white text-center text-lg font-mono">
                </div>
                <div class="text-center">
                    <label class="block text-gray-300 mb-2 font-medium">X₃</label>
                    <input type="text" value="${x3.toFixed(4)}" readonly 
                           class="w-full p-3 bg-gray-700 border border-green-500 rounded text-white text-center text-lg font-mono">
                </div>
            </div>
            
            <div class="bg-gray-750 p-4 rounded-lg">
                <h4 class="text-white font-semibold mb-3">Расчет определителей:</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div class="text-center">
                        <div class="text-blue-300">Δ</div>
                        <div class="text-gray-300">${mainDet.toFixed(4)}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-blue-300">ΔX₁</div>
                        <div class="text-gray-300">${detX1.toFixed(4)}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-blue-300">ΔX₂</div>
                        <div class="text-gray-300">${detX2.toFixed(4)}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-blue-300">ΔX₃</div>
                        <div class="text-gray-300">${detX3.toFixed(4)}</div>
                    </div>
                </div>
            </div>
        `;
    }

    resultContent.innerHTML = resultHTML;
    resultsDiv.appendChild(resultContent);
}

// определителя 3x3
const calculateDeterminant3x3 = (a11, a12, a13, a21, a22, a23, a31, a32, a33) => {
    return a11 * (a22 * a33 - a23 * a32)
        - a12 * (a21 * a33 - a23 * a31)
        + a13 * (a21 * a32 - a22 * a31);
}

const Exs6_1 = (event) => {
    $(event.target).closest('.bg-black').find('p').hide(500);
}

const Exs6_2 = (event) => {
    $(event.target).closest('.bg-black').find('#p1').hide(500);
}

const Exs6_3_1 = (event) => {
    $(event.target).closest('.bg-black').find('#p2').hide(500);
}
const Exs6_3_2 = (event) => {
    $(event.target).closest('.bg-black').find('#p3').hide(500);
}

const Exs6_4 = (event) => {
    $(event.target).closest('.bg-black').find('.hides').hide(500);
}
// Вариант 1: в исходный файл Experiments.html добавить в начало две кнопки: одну-для
// скрытия элементов, другую – для отображения скрытых элементов. Настроить методы
// click( ) кнопок, так чтобы они то скрывали, то отображали нечетные элементы с классом MsoNormal.
const Exs6_var1 = (event) => {
    const $container = $(event.target).closest('.bg-black');
    const $oddElements = $container.find('ul li:nth-child(odd)');

    if ($oddElements.is(':visible')) {
        $oddElements.hide(500);
        $(event.target).text('Показать нечетные');
    } else {
        $oddElements.show(500);
        $(event.target).text('Скрыть нечетные');
    }
}
const Exs6_5 = (event) => {
    $(event.target).closest('.bg-black').hide(this);
}
const Exs6_6 = () => {
    $('button').on('dblclick', () => { $('#dblclick').hide(500) })
}
const Exs6_7 = () => {
    $('#chengBtn').on('mouseenter', function () {
        $(this)
            .css({
                'background-color': '#2796dbff',
                'transform': 'scale(1.1)',
                'box-shadow': '0 10px 25px rgba(219, 39, 119, 0.3)',
                'transition': 'all 0.3s ease-in-out'
            })
            .text('🚀 Изменено при наведении!');
    }).on('mouseleave', function () {
        $(this)
            .css({
                'background-color': '#ec4899',
                'transform': 'scale(1)',
                'box-shadow': 'none'
            })
            .text('Измениюсь при наведении');
    });
}

const Exs6_8 = () => {
    $('#focus').on('focus', function () {
        $(this)
            .css({
                'background-color': 'linear-gradient(135deg, #db2778 0%, #fecaca 100%)',
                'transform': 'scale(1.1)',
                'box-shadow': '0 10px 25px rgba(219, 39, 119, 0.3)',
                'transition': 'all 0.3s ease-in-out'
            })
            .attr('placeholder', '');
    })
        .on('blur', function () {
            $(this)
                .removeClass('input-focused')
                .css({
                    'background-color': '#111827',
                    'border-color': '#ec4899',
                    'transform': 'scale(1)',
                    'box-shadow': '0 0 0 0px rgba(139, 92, 246, 0)',
                    'color': '#f3f4f6'
                })
                .attr('placeholder', 'Кликните для фокуса...');
        });
}
const Exs6_9 = (event) => {
    $(event.target).closest('.bg-black').find('#speedChenge').hide(1000);
}
const Exs6_10 = (event) => {
    $(event.target).closest('.bg-black').find('#speedChenge').toggle(500);
}
const Exs6_var2 = () => {
    $('.imgInTable').each(function () {
        const $td = $(this);
        const $img = $td.find('img');

        $td.on('mouseenter', function () {
            $img.stop(true).fadeOut(400);
        }).on('mouseleave', function () {
            $img.stop(true).fadeIn(400);
        });
    });
}
const Exs6_var3 = (event) => {
    const $button = $(event.target);
    let isFirstPhase = true;
    $button.prop('disabled', true);
    const $paragraphs = $('.border-pink-500 p');
    $paragraphs.each(function (index) {
        const $p = $(this);


        if (isFirstPhase) {
            if ((index + 1) % 2 === 0) {
                // Четный параграф 
                $p.fadeIn(2000);
            } else {
                // Нечетный параграф 
                $p.fadeOut(2000);
            }
        }
    });

    setTimeout(() => {
        $paragraphs.each(function (index) {
            const $p = $(this);

            if ((index + 1) % 2 === 0) {
                // Четный параграф 
                $p.fadeOut(2000);
            } else {
                // Нечетный параграф 
                $p.fadeIn(2000);
            }
        });
        setTimeout(() => {
            $button.prop('disabled', false);
            $button.text(isFirstPhase ? "Показать снова" : "Показать");
        }, 2000);

    }, 2000);
}
const Exs6_11 = () => {
    $('#div1').fadeIn();        // Быстро
    $('#div2').fadeIn("slow");  // Средне
    $('#div3').fadeIn(3000);    // Медленно
}

const Exs6_12 = () => {
    $('#div1_1').fadeOut();        // Быстро
    $('#div2_2').fadeOut("slow");  // Средне
    $('#div3_3').fadeOut(3000);    // Медленно
}
const Exs6_13 = () => {
    $("#schengeDiv").slideDown("slow");
}
const Exs6_14 = () => {
    $("div#schengeDiv").animate({ left: '250px' });
}
const Exs6_15 = () => {
    var links = $('#linksShow li > a');
    for (var i = 0; i < links.length; i++) {
        alert(links[i].href);
    }
}
const Exs6_16 = () => {
    var links = $('a', 'li');
    for (var i = 0; i < links.length; i++) {
        alert(i + " Example 16: " + links[i].href);
    }
}
const Exs6_17 = () => {
    var links = $('li a');
    links.each(function (i, a) {
        alert(i + ': ' + a.innerHTML);
        if (i == 1) return false; // стоп на элементе коллекции с индексом 1
    });
}
const Exs6_18 = () => {
    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });

    $("#btn2").click(function () {
        alert("HTML: " + $("#test").html());
    });
}
const Exs6_19 = () => {
    $("#button19").click(function () {
        alert("Value: " + $("#test").val());
    });
}
const Exs6_20 = () => {
    $("#button20").click(function () {
        alert($("#w3s").attr("href"));
    });
}
const Exs6_var4 = () => {
    //  все изображения
    const $images = $('img');

    $images.each(function (index) {

        if (index % 2 === 0) { // Нечетные рисунки (1,3,5)
            const $currentImg = $(this);
            $currentImg.slideUp('slow', function () {
                // После скрытия  обратно
                $(this).slideDown('slow');
            });
        }
    });
}
$(document).ready(function () {
    Exs6_7();
    Exs6_8();
    Exs6_var2();
    Exs6_18();
    Exs6_19();
    // Exs6_16();
});