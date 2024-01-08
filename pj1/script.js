console.log("***************The Faulty Calculator*********************");

// function calc_faulty(a, b, op) {
//     if (Math.random() < 0.1) {
//         if (op == '+')
//             console.log(a - b);
//         else if (op == '-') {
//             console.log(a / b);
//         }
//         else if (op == '*')
//             console.log(a + b);
//         else if (op == '/')
//             console.log(a ** b);
//         else
//             console.log("Invalid Operator");
//     }
//     else {
//         if (op == '+')
//             console.log(a + b);
//         else if (op == '-') {
//             console.log(a - b);
//         }
//         else if (op == '*')
//             console.log(a * b);
//         else if (op == '/')
//             console.log(a / b);
//         else
//             console.log("Invalid Operator");
//     }
// }
// calc_faulty(2, 4, '+');

let a = prompt("Enter first number\n")
let b=prompt("Enter second number\n")
let op=prompt("Enter the operator\n")

let obj={
   "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"

}

if(Math.random()<0.1)
{
    c=obj[c];
alert(`The Result is -> ${eval(`${a} ${op} ${b}`)}`);
}

else
{
alert(`The Result is -> ${eval(`${a} ${op} ${b}`)}`);
}
