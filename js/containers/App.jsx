import React, { Component } from 'react';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

class App extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div>
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;