export const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";
export const DECREMENT_BY_AMOUNT = "DECREMENT_BY_AMOUNT";

export const incrementByAmount = (amount = 1) => {
    return {
        type: INCREMENT_BY_AMOUNT,
        amount
    }
};

export const decrementByAmount = (amount = 1) => {
    return {
        type: DECREMENT_BY_AMOUNT,
        amount
    }
};