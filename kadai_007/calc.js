function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let num = getRandomInt(1, 100)
let num_3 = num % 3;
let num_5 = num % 5;
console.log(num_3)
console.log(num_5)
console.log(num)
if (num_3 === 0 && num_5 === 0){
    console.log('3と5の倍数です');
} else if (num_3 == 0) {
    console.log('3の倍数です');
} else if (num_5 == 0) {
    console.log('5の倍数です');
} else {
    console.log(num)
}
