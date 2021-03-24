import React from 'react'

const EditExpensePage = (props) => (
    <div>
        This is from my Edit Dashboard component.
        My custom parameter is: {props.match.params.id}
    </div>
)

export default EditExpensePage;