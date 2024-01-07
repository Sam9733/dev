console.log("***************The Faulty Calculator*********************");

function calc_faulty(a, b, op) {
    if (Math.random() < 0.1) {
        if (op == '+')
            console.log(a - b);
        else if (op == '-') {
            console.log(a / b);
        }
        else if (op == '*')
            console.log(a + b);
        else if (op == '/')
            console.log(a ** b);
        else
            console.log("Invalid Operator");
    }
    else {
        if (op == '+')
            console.log(a + b);
        else if (op == '-') {
            console.log(a - b);
        }
        else if (op == '*')
            console.log(a * b);
        else if (op == '/')
            console.log(a / b);
        else
            console.log("Invalid Operator");
    }
}

calc_faulty(2, 4, '+');
