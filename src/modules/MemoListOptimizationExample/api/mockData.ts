export const mockListItems = new Array(300)
    .fill(undefined)
    .map((_, i) => i + 1)
    .map((n) => ({
        id: n,
        name: `Item ${n}`,
    }));
