const toDay = new Date();

let month = toDay.getMonth() + 1;
let date = toDay.getDate();
let year = toDay.getFullYear();

console.log(year + '年' + month + '月' + date + '日');
