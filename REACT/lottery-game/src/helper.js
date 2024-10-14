function genTicket(n) {
    let arr = [];

    for(let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}

function sum(arr) {
    return arr.reduce((s, el) => s += el);
}

export {genTicket, sum};