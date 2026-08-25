console.log("task one");
console.log("task two");
setTimeout(() => {
    console.log("task three");

}, 200000);
console.log("task four");
console.log("task five");
//if one process takes time then async jump to next peocess to execute;