import React from 'react';

import './other-login.css';

export default () => (
    <div className="other-login-content">
        <div className="other-login-line">
            <span>&nbsp;</span>
            <span className="text">或</span>
            <span>&nbsp;</span>
        </div>
        <div className="other-login-item">
            <a href="/"><span className="fa fa-qq"></span></a>
            <a href="/"><span className="fa fa-wechat"></span></a>
        </div>
    </div>
)