const getSum = require("./ex21");
const {parseFile} = require("./parseFile");

describe("ex2", () => {
    describe("examples", () => {
        it("1122", () => {
            const result = getSum(`
            5 1 9 5
            7 5 3
            2 4 6 8`);
            expect(result).toBe(18);
        });
        it("1121", () => {
            const result = getSum(`
            5 1 9 5
            7 5 3
            2 4 6 12`);
            expect(result).toBe(22);
        });
    });
    it("solution", () => {
        const input = parseFile("./ex2.txt");
        const result = getSum(input);
        expect(result).toBe(51833);
    });
});
