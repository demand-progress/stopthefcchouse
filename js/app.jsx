// Modules
const React = require('react');
const ReactDOM = require('react-dom');
import Main from './containers/Main.jsx'
import Footer from './containers/Footer.jsx';
// Checking for outdated browsers
(() => {
    const isIE = navigator.userAgent.match(/MSIE (\d+)\./);
    if (isIE) {
        const version = +isIE[1];
        if (version < 10) {
            alert('Unfortunately your browser, Internet Explorer ' + version + ', is not supported.\nPlease visit the site with a modern browser like Firefox or Chrome.\nThanks!');
        }
    }

    if (/Android 2\.3/.test(navigator.userAgent)) {
        alert('Unfortunately your browser, Android 2.3, is not supported.\nPlease visit the site with a modern browser like Firefox or Chrome.\nThanks!');
    }
})()

function render() {
    ReactDOM.render(
        <Main />,
        document.querySelector('#app')
    );
    ReactDOM.render(
        <Footer />,
        document.querySelector("#footer")
    )
}

render();