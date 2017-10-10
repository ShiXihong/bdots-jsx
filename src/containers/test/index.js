import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import * as actions from '../../actions/test';
import {Button} from 'react-bootstrap';
import ListItem from '../../components/list-item';

import './sega.css';


class Test extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log("componentWillMount init");
    }

    componentDidMount(){
        console.log("componentDidMount init");
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps init");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate init");
        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate init");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate init");
    }

    render() {
        const { state } = this.props;
        const data = state.data;

        return (
            <div>
                <Button onClick={this.props.actions.getData.bind(this)}>
                    test
                </Button>
                <ListItem  data={data}/>
            </div>
        );
    }
}

const oConnect = connect(state => ({
        state: state.text
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    }))(Test);

export default withRouter(oConnect);

