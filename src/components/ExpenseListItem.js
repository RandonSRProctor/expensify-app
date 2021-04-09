import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({dispatch, description, amount, createdAt, count, id}) => (
    <div>
        <h3>{count}. {description}</h3>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);