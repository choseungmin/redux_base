//ActionType
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//Action
const increment = (diff) => ({
    type: INCREMENT,
    diff: diff
});

const decrement = (diff) => ({
    type: DECREMENT,
    diff: diff
});

//State
const initialState = {
    number: 0,
    foo: 'foo',
    bar: 'bar'
};

//Reducer
function counter(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + action.diff
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - action.diff
            };
        default:
            return state;
    }
};

//Store
const { createStore } = Redux;
const store = createStore(counter);

//Subscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Dispatch
store.dispatch(increment(3));
store.dispatch(decrement(8));
store.dispatch(increment(5));


















