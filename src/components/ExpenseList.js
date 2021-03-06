import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense, index) => (
                <ExpenseListItem 
                    key={expense.description}
                    {...expense}
                    count={index + 1}
                />
            ))
        }
        <p>Total of {props.expenses.length} expenses</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);