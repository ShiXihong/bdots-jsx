import React from 'react';
import './style.css';

export default ({data}) => (
    <ul className="list-item">
        {(data instanceof Array)
            ? data.map(item => {
                return (<li key={item.ID}>{item.ID}-{item.Name}</li>);
            })
            : ''
        }
    </ul>
);


