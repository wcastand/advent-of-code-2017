const p = input => input.split("").map(e => parseInt(e, 10));

module.exports = input =>
    p(input).reduce((acc, v, index, arr) => {
        if (index + 1 < arr.length && v === arr[index + 1]) return acc + v;
        if (index + 1 === arr.length && v === arr[0]) return acc + v;
        return acc;
    }, 0);
