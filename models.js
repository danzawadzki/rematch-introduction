// function to create a one second delay
const delay = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

// count model
export const count = {
    state: 0,
    reducers: {
        increment(state, payload) {
            return state + payload
        }
    },
    effects: (dispatch) => ({
        async incrementAsync(payload, state) {
            await delay(2000);
            dispatch.count.increment(payload);
        }
    })
};