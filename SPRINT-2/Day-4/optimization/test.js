const memoFunc = (func) => { //reduces time (memo function)
    const cache = {};
    return (input) => {
        return cache[input] || (cache[input] = func(input));
    }
}
// It stops recomputing the same logic again and again for the same input, if that input has already been calculated.

//fibonacci sum
const fib = memoFunc((n) => {
    if(n <= 1) {
        return n
    }

    return fib(n-1) + fib(n-2);
});

console.time("T1");
console.log(fib(22));
console.timeEnd("T1");
