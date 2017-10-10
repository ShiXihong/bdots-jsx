import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Routes from '../../routes';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userToken: null,
            isLoadingUserToken: true,
        };
    }

    async componentDidMount() {

        this.setState({isLoadingUserToken: false});
    }

    updateUserToken = (userToken) => {
        this.setState({
            userToken: userToken
        });
    };

    render() {
        const childProps = {
            userToken: null,
            updateUserToken: this.updateUserToken,
        };

        return !this.state.isLoadingUserToken
            &&
            (
                <div className="bdots-web app">
                    <Header />
                    <main className="content">
                        <Routes childProps={childProps}/>
                    </main>
                    <Footer />
                </div>
            );
    }
}

export default withRouter(App);