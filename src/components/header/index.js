import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import './header.css';

class Header extends Component {

    handleLogout = event => {
        this.props.history.push('/');
    };

    render() {
        const {state} = this.props;

        return (
            <header className="header">
                <div className="header-content">
                    <div className="header-left">
                    <ul>
                        <li>
                            <Link to="/test"> <FormattedMessage id="Home" defaultMessage={'Home'}/> </Link>
                        </li>
                        <li>
                            <Link to="/test"> <FormattedMessage id="Forum" defaultMessage={'Forum'}/> </Link>
                        </li>
                        <li>
                            <Link to="/test"> <FormattedMessage id="Blog" defaultMessage={'Blog'}/> </Link>
                        </li>

                    </ul>
                </div>
                    <div className="header-right">
                        <ul>
                            <li>
                                {
                                    state.userInfo
                                        ?
                                        <Link to={`/profile/${state.userInfo.account}`}>
                                            <FormattedMessage id="Welcome" values={{name:state.userInfo.account}}/>
                                        </Link>
                                        :
                                        <Link to="/login"><FormattedMessage id="Login"/></Link>
                                }
                            </li>
                            <li>
                                {
                                    state.userInfo
                                        ?
                                        <Link to="/profile"><FormattedMessage id="Profile"/></Link>
                                        :
                                        <Link to="/register"><FormattedMessage id="Register"/></Link>
                                }

                            </li>
                            <li>
                                <a onClick="" href="javascript:void(0)">
                                    <FormattedMessage id="Collect"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

const oConnect = connect(state => ({
    state: state.header
}))(Header);

export default withRouter(oConnect);


