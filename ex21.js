const p = input =>
    input
        .split("\n")
        .filter(x => x.length > 0)
        .map(xx =>
            xx
                .split(/\s/)
                .map(e => parseInt(e, 10))
                .filter(x => !Number.isNaN(x))
        );

const mm = row => ({max: Math.max(...row), min: Math.min(...row)});

module.exports = input => {
    const parsed = p(input);
    return parsed.reduce((acc, row) => {
        const {min, max} = mm(row);
        return acc + (max - min);
    }, 0);
};
