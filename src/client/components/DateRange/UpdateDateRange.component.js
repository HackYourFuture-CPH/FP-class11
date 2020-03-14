import React from 'react';
import PropTypes from 'prop-types';


const UpdateDateRange = ({type, text}) => {
    return (
        <div>
            <label htmlFor='fromDate'>From:
            <input type={type} name="fromDate" id="fromDate"/>
            </label>
            <label htmlFor='untilDate'>Until:
            <input type={type} name="untilDate" id="untilDate"/>
            </label>
            <button>{text}</button>
        </div>
    )
}

UpdateDateRange.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default UpdateDateRange