import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill', note: 'April', amount: 10700, createdAt: 4062021 }))
store.dispatch(addExpense({ description: 'Gas Bill', note: 'April', amount: 3000, createdAt: 4062021 }))

store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

console.log(store.getState())

ReactDOM.render( <AppRouter visibleExpenses={JSON.stringify(visibleExpenses)} />, document.getElementById('app'))