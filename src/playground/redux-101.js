import { createStore } from 'redux'

// ACTION GENERATORS

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({setValue} = {} ) => ({
    type: 'SET',
    setValue
})

const resetCount = () => ({
    type: 'RESET'
})


// REDUCERS

const countReducer = (state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'SET' :
            return {
                count: action.setValue
            }
        case 'RESET' :
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)


// SUBSCRIPTION

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// CALLS TO ACTION GENERATORS

store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10}))

store.dispatch(setCount( {setValue: -100} ))