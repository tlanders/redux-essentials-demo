export const INCREMENT_COUNT = 'INCREMENT_COUNT';

export const incrementCount = (amount = 1) => ({
    type: INCREMENT_COUNT,
    amount
});

export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const decrementCount = (amount = 1) => ({
    type: DECREMENT_COUNT,
    amount
});
