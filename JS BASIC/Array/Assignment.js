let mulof10 = [3,0,12,10,50,80,800].every( (n) => (n % 10 == 0));
console.log(mulof10);

mulof10 = [10,0,30,80,90,900].every( (n) => (n % 10 == 0));
console.log(mulof10);

let min = [2,5,7,2,1,34,0,55].reduce( (min, n) => {
    if(n < min){
        return n;
    } else {
        return min;
    }
})
console.log(min);