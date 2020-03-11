import React from 'react';
import './Link.style.css';
import PropTypes from 'prop-types';


export default function Link({href, text}) {
    return (
        <a href={href}>{text}</a>
    )
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}