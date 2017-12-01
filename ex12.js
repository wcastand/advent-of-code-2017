const p = input => input.split("").map(e => parseInt(e, 10));

module.exports = input =>
    p(input).reduce((acc, v, index, arr) => {
        const l = arr.length / 2;
        if (index + l < arr.length && v === arr[index + l]) return acc + v;
        if (index + l >= arr.length && v === arr[index + l - arr.length]) return acc + v;
        return acc;
    }, 0);
