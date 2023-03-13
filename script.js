let num = prompt("Введите число (в интервале от 1 до 999)");

if (num > 0 && num <= 999) {
    let sum = 0;

    for (let i = 100; i <= 999; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    console.log("Сумма всех трехзначных делителей числа " + num + ": " + sum);
} else {
    console.log("Ошибка: число должно быть положительным и в интервале от 1 до 999.");
}



//bonus


let n = prompt("Введите целое число:");
if (n > 1) {
    console.log("Ниже простые числа меньше " + n);
    for (let i = 2; i < n; i++) {
        let isTrue = true;
        for (let b = 2; b < i; b++) {
            if (i % b === 0) {
                isTrue = false;
            }
        }
        if (isTrue) {
            console.log(i);
        }
    }
} else {
    console.log("Ошибка: число должно быть больше 1.");
}