function adj() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }
}

function shop() {
    let a = " Engine ";
    let b = " Food ";
    let c = " Garments ";
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }
}

function last() {
    let a = "Bros.";
    let b = "Ltd.";
    let c = "Hub";
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }

}
console.log("Your new business name :\n", adj(),shop(),last());
