import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, count, id}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{count}. {description}</h3>
        </Link>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
    </div>
);

export default ExpenseListItem;