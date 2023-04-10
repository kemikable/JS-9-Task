// //2.9.5
// let num = prompt("Введите число (в интервале от 1 до 999)");
// if (num > 0 && num <= 999) {
//     let sum = 0;
//     for (let i = 100; i <= 999; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     console.log("Сумма всех трехзначных делителей числа " + num + ": " + sum);
// } else {
//     console.log("Ошибка: число должно быть положительным и в интервале от 1 до 999.");
// }

// //second version

// let num2 = prompt("Введите число (в интервале от 1 до 999)");
// if (num2 > 0 && num2 <= 999) {
//     let sum = 0;
//     let i = 100;
//     while (i <= 999) {
//         if (num2 % i === 0) {
//             sum += i;
//         }
//         i++;
//     }
//     console.log("Сумма всех трехзначных делителей числа " + num2 + ": " + sum);
// } else {
//     console.log("Ошибка: число должно быть положительным и в интервале от 1 до 999.");
// }

// // 2.9.6 bonus change to 1 loop


// let n = prompt("Введите целое число");
// if (n > 1) {
//     console.log("Ниже простые числа меньше " + n);
//     for (let i = 2; i < n; i++) {
//         let isTrue = true;
//         for (let b = 2; b < i; b++) {
//             if (i % b === 0) {
//                 isTrue = false;
//             }
//         }
//         if (isTrue) {
//             console.log(i);
//         }
//     }
// } else {
//     console.log("Ошибка: неверное число!!!");
// }


// // //2.10

// let inputText = prompt("Введите текст:");
// let ifNum = /\d/;
// if (ifNum.test(inputText)) {
//     console.log("В строке есть цифры");
// } else {
//     console.log("В строке нет цифр");
// }



// //2.10 second version-change to loop
// let someText = prompt("Input some text here");
// if (/^[a-zа-яё]+$/i.test(someText)) {
//     console.log("Only текст");
// } else if (/^\d+$/.test(someText)) {
//     console.log("Only numbers");
// // } else if (/^[a-zа-яё\d]+$/i.test(someText)) {
// //     console.log("Text and numbers");
// // } else {
// //     console.log("Try again ");
// // }

// // ///

// // let inputSomeTextHere = prompt("Введите текст:");
// // let isNumber = false;
// // for (let i = 0; i < inputSomeTextHere.length; i++) {
// //     if (!isNaN(inputSomeTextHere[i])) {
// //         isNumber = true;
// //         break;
// //     }
// // }
// // if (isNumber) {
// //     console.log("В строке есть цифры");
// // } else {
// //     console.log("В строке нет цифр");
// // }
// // //2.10.11 bonus

// let n2 = +prompt("Введите положительное число:");
// if (isNaN(n2) || n2 <= 0) {
//     console.log("Вы ввели неверное значение, введите положительное число");
// } else {
//     let fib1 = 0, fib2 = 1, fibN = 0;
//     for (let i = 2; i <= n; i++) {
//         fibN = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = fibN;
//     }
//     console.log(`n-й элемент последовательности Фибоначчи: ${fibN}`);
// }

// // // //2.11.3

// // let numbers = prompt("Введите пять чисел, разделенных запятыми: ");
// // numbers = numbers.split(',').map(Number);
// // let smallest = Math.min(...numbers);
// // console.log("Наименьшее число: " + smallest);

// // //2.11.3.2

// // let getNumbers = prompt("Введите пять чисел, разделенных запятыми: ");

// // getNumbers = getNumbers.split(',').map(Number);

// // let small = getNumbers[0];
// // let large = getNumbers[0];

// // for (let i = 1; i < getNumbers.length; i++) {
// //     if (getNumbers[i] < small) {
// //         small = getNumbers[i];
// //     }
// //     else if (getNumbers[i] > large) {
// //         large = getNumbers[i];
// //     }
// // }
// // console.log("Наименьшее число: " + small);
// // console.log("Наибольшее число: " + large);



// // //2.11.4
// // let salaries = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];

// // function getAnnualSalary() {
// //     return salaries.map(salary => salary * 12);
// // }

// // function getTotalSalary() {
// //     let annualSalaries = getAnnualSalary();
// //     let sum = 0;
// //     for (let i = 0; i < annualSalaries.length; i++) {
// //         sum += annualSalaries[i];
// //     }
// //     console.log(`Total salary for the year: ${sum}`);
// // }

// // function getMonthlySalary(month) {
// //     let monthlySalaries = salaries.map(salary => salary / 12 * month);
// //     console.log(`Monthly salaries for month ${month}: ${monthlySalaries}`);
// // }

// // function getQuarterSalary(quarter) {
// //     let startMonth = (quarter - 1) * 3 + 1;
// //     let endMonth = startMonth + 2;
// //     let sum = 0;
// //     for (let i = startMonth - 1; i < endMonth; i++) {
// //         sum += salaries[i];
// //     }
// //     console.log(`Total salary for quarter ${quarter}: ${sum}`);
// // }

// // console.log(`Annual salaries: ${getAnnualSalary()}`);
// // getTotalSalary();
// // getMonthlySalary(3);
// // getQuarterSalary(2);


// // //2.12.4
// // let numbers = [];
// // for (let i = 1; i < 11; i++) {
// //     numbers.push(Math.random() * 10);
// // }
// // let maxNumber = Math.max(...numbers);
// // console.log(numbers);
// // console.log(maxNumber);


// // //2.12.5
// // let arr = [1, 2, 3, 4, 5];
// // let newArr = [...arr];
// // newArr = newArr.map(num => num * 2);
// // console.log("Исходный массив:", arr);
// // console.log("Новый массив:", newArr);

// // //2.12.5
// // let array = [2, 4, 6, 8, 10];

// // let newArray = [...array];

// // for (let i = 0; i < newArray.length; i++) {
// //     newArray[i] *= 2;
// // }

// // console.log("Исходный массив: ", array);
// // console.log("Новый массив: ", newArray);

// // //2.12.6

// // let employees = [
// //     ['Jaylee Macy', 'marketing'],
// //     ['John Smith', 'management'],
// //     ['Blossom Hartley', 'design'],
// //     ['Austin Carpenter', 'marketing'],
// //     ['Joan Knowles', 'development'],
// //     ['Sally Nunez', 'management'],
// //     ['Laurel Ward', 'development'],
// //     ['Lark Simon', 'marketing'],
// //     ['Jane Stone', 'management'],
// //     ['Courtney Olson', 'development'],
// // ];

// // let development = [];
// // let otherDepartments = [];

// // for (let i = 0; i < employees.length; i++) {
// //     if (employees[i][1] === 'development') {
// //         development.push(employees[i][0]);
// //     } else {
// //         otherDepartments.push(employees[i][0]);
// //     }
// // }

// // console.log(development);
// // console.log(otherDepartments);

// //2.12.7

// // let queue = [];

// // while (true) {
// //     let input = prompt("Введите имя и фамилию нового клиента (или = для вывода очереди):");

// //     if (input === null) {
// //         console.log("Программа завершена.");
// //         break;
// //     } else if (input === '=') {
// //         console.log(queue);
// //         break;
// //     } else if (input) {
// //         queue.push(input);
// //     } else if (queue.length == 0) {
// //         let customer = queue.shift();
// //         console.log("Клиент:", customer);
// //     }
// // }



// // //2.12.8
// // function sortFind(arr) {
// //     arr.sort(function (a, b) {
// //         return a - b;
// //     });
// //     let minVal = Math.min(...arr);
// //     return [arr, minVal];
// // }

// // let array2 = [90, -301, 49, 25, 23];
// // let sortedArrayAndMin = sortFind(array2);
// // console.log("Sorted array:", sortedArrayAndMin[0]);
// // console.log("Minimum value:", sortedArrayAndMin[1]);


// //2.13.3

// // let names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// // function printWithDashes(name) {
// //     console.log("-------------");
// //     console.log(name);
// //     console.log("-------------");
// // }

// // function printWithHearts(name) {
// //     console.log("<3<3<3<3 " + name + " <3<3<3<3");
// // }

// // function printWithIndex(name, index) {
// //     console.log(index + " - " + name);
// // }

// // names.forEach(printWithDashes);
// // names.forEach(printWithHearts);
// // names.forEach(printWithIndex);


// // //2.13.4
// // function kebabToUpper(text) {
// //     return text.toUpperCase().replace(/-/g, '_');
// // }
// // let kebabText = 'some-kebab-style-text-here';
// // let upperText = kebabToUpper(kebabText);
// // console.log(upperText);

// // //2.13.4-2

// // function kebabToUpper(text) {
// //     let words = text.split('-');
// //     let upperWords = words.map(word => word.toUpperCase());
// //     return upperWords.join('_');
// // }

// // let kababText = 'some-kebab-style-text-here';
// // let upText = kebabToUpper(kababText);
// // console.log(upText);


// //2.14.1
// function addTax(prices, taxRate) {
//     if (!Array.isArray(prices)) return console.error('Argument must be an array');
//     if (!prices.every(price => typeof price === 'number')) return console.error('All elements of the array must be numbers');
//     if (typeof taxRate !== 'number') return console.error('Tax rate must be a number'); return prices.map(price => price + (price * taxRate / 100));
// }

// let pricesWithoutTax = [100, 150, 290];
// let taxRate = 18;
// let pricesWithTax = addTax(pricesWithoutTax, taxRate);

// if (pricesWithTax) {
//     console.log(pricesWithTax);
// }

// //2.14.2
// function countEvensAndOdds(arr) {
//     let evens = 0;
//     let odds = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evens++;
//         } else {
//             odds++;
//         }
//     }
//     return `В массиве ${evens} четных и ${odds} нечетных чисел`;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 10];
// console.log(countEvensAndOdds(numbers));

// //2.14.2.2
// function countEvensAndOdds(arr) {
//     let evens = arr.filter(num => num % 2 === 0).length;
//     let odds = arr.filter(num => num % 2 !== 0).length;
//     return `В массиве ${evens} четных и ${odds} нечетных чисел`;
// }
// let numbers2 = [2, 5, 7, 8, 9, 10, 12, 15, 17, 21];
// console.log(countEvensAndOdds(numbers2));


// //2.15.1
// function sort(arr) {
//     return arr.sort((a, b) => {
//         let first = a.match(/\d{4}/);
//         let second = b.match(/\d{4}/);
//         return first - second;
//     });
// }
// let sorted = sort(['1992, Kamran', 'Adil, 1996', 'Dan, 1963']);
// console.log(sorted);


//2.16.1
// let stockItem = {
//     id: 1,
//     place: 'first',
//     weight: 10
// };

// // let shopItem = Object.assign({}, stockItem, {
// //     price: 25
// // });
// // console.log(shopItem);



// let shopItem = { ...stockItem, price: 25 };

// console.log(shopItem);


//2.17.1

// let client = {
//     fullName: 'Flankes Flankeszade Flankes oglu',
//     creditLimit: 2000,
//     balance: 100,
//     percentOfMinPayment: 10,
//     getBalance() {
//         if (this.balance >= 0) {
//             return `Баланс ${this.balance} тугриков`;
//         } else {
//             return `Ваш долг ${-this.balance} тугриков`;
//         }
//     },
//     getMinPayment() {
//         if (this.balance <= 0) {
//             return 'Вы нищеброд';
//         } else {
//             let minPayment = this.balance * this.percentOfMinPayment / 100;
//             return `Минимальный платёж состовляет ${minPayment} тугриков`;
//         }
//     },
//     withdraw(amount) {
//         let availableFunds = this.balance + this.creditLimit;
//         if (amount <= availableFunds) {
//             this.balance -= amount;
//             return `Снято ${amount}. ${this.getBalance()}`;
//         } else {
//             return 'Недостаточно средств на счете';
//         }
//     },
//     refill(amount) {
//         this.balance += amount;
//         return `Пополнение на ${amount} тугриков. ${this.getBalance()}`;
//     }
// }
// console.log(client.getBalance());
// console.log(client.getMinPayment());
// console.log(client.withdraw(700));
// console.log(client.refill(300));



//2.17.2

// const calculator = {
//     memory: 0,
//     add: function (num1, num2) {
//         return num1 + num2;
//     },
//     subtract: function (num1, num2) {
//         return num1 - num2;
//     },
//     multiply: function (num1, num2) {
//         return num1 * num2;
//     },
//     divide: function (num1, num2) {
//         return num1 / num2;
//     },
//     clearMemory: function () {
//         this.memory = 0;
//     },
//     addToMemory: function (num) {
//         this.memory += num;
//     },
//     readMemory: function () {
//         return this.memory;
//     },
//     saveToMemory: function (num) {
//         this.memory = num;
//     }
// };


// console.log(calculator.add(5, 7));
// calculator.saveToMemory(12);
// console.log(calculator.readMemory());
// calculator.addToMemory(5);
// console.log(calculator.readMemory());
// calculator.clearMemory();
// console.log(calculator.readMemory());

//2.18.1

// function reverseWords(str) {
//     return str.split(' ').map(word => {
//         if (word.length >= 5) {
//             return word.split('').reverse().join('');
//         }
//         return word;
//     }).join(' ');
// }

// let input = 'Seriously this is the last one';
// let output = reverseWords(input);
// console.log(output);

//2.18.2
// function del(text) {
//     return text.replace(/[^a-zA-Z]/g, '');
// }
// let text = "egfweg 5456 we w 5g4g1 w51 we1 1e 1ew1g6we51 gw5g4 w45?";
// let result = del(text);
// console.log(result);

//2.18.3










//2.19.1

// class Transaction {
//     constructor(fromClient, toClient, amount) {
//         this.fromClient = fromClient;
//         this.toClient = toClient;
//         this.amount = amount;
//         this.commission = this.calculateCommission();
//     }

//     calculateCommission() {
//         return this.amount * 0.05;
//     }
// }

// const transaction = new Transaction('Musteri 1', 'Musteri 2', 250);
// console.log(transaction.commission); 

