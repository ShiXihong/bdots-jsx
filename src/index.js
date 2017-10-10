import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import ScrollToTop from './utils/scroll-top-top';
import * as Utils from './utils/utils';
import registerServiceWorker from './register-service-worker';
import configureStore from './store';
import rootSaga from './sagas';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './static/css/normalize.css';
import './static/css/global.css';


//create redux store
//use saga middware
const store = configureStore();
store.runSaga(rootSaga);

//set mutiler language
const oLang = Utils.getUserLanguage();
addLocaleData([...en, ...zh]);

import(`./i18n/${oLang.lang}.js`).then((module) => {

    ReactDOM.render(
        <IntlProvider locale={oLang.local} messages={module.default}>
            <Provider store={store}>
                <Router>
                    <ScrollToTop>
                        <MuiThemeProvider>
                            <App/>
                        </MuiThemeProvider>
                    </ScrollToTop>
                </Router>
            </Provider>
        </IntlProvider>,
        document.getElementById('root')
    );

});
registerServiceWorker();