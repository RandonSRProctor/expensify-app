import { createStore, combineReducers } from 'redux'
import { v4 as uuid } from 'uuid'

// ADD_EXPENSE

const addExpense = (
    { 
     description = '',
     note = '',
     amount = 0,
     createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})



// REMOVE_EXPENSE
// EDIT_EXPENSE

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        default:
            return state
    }
}

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    })
)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addExpense({ description: 'Rent', amount: 100 }))

const demoState = {
    expenses: [{
        id: 'l2k34j;23l4j',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}