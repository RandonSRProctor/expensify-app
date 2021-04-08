import React from 'react';

const ExpenseListItem = ({description, amount, createdAt, count}) => (
    <div>
        <h3>{count}. {description}</h3>
        <p>Amount: {amount / 100}</p>
        <p>Created At: {createdAt}</p>
    </div>
);

export default ExpenseListItem;