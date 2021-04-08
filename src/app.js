import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill', note: 'April', amount: 10750, createdAt: 4062021 }))
store.dispatch(addExpense({ description: 'Gas Bill', note: 'April', amount: 3000, createdAt: 4062021 }))
store.dispatch(setTextFilter('water'))

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render( jsx , document.getElementById('app'))