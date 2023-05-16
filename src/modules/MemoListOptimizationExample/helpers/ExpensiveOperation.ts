export const expensiveOperation = (selected) => {
    // Here we use selected just because we want to simulate
    // an operation that depends on the props
    let total = selected ? 1 : 0;
    for (let i = 0; i < 200000; i++) {
        total += Math.random();
    }
    return total;
};
