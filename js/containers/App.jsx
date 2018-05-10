import React, { Component } from 'react';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textContent: {
                header: null,
                subHeader: null,
                congressLanguage: null,
                main: null
            }
        }  
    }

    componentDidMount(){
        window.scrollTo(0, 0);

        axios({
          method: "get",
          url: 'https://api.tipe.io/api/v1/document/5af33e3968f0a10013429fdc',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'DC37ZIL72X4BNJ6A3SPO6KF5N',
            'Tipe-Id': 'NWFlOWYyYTQzMjNmYzkwMDEzY2I0ZGZh'
          }
        })
          .then(response => {
              console.log(response)
            this.setState({
              textContent:{
                header: response.data.blocks[0].value,
                subHeader: response.data.blocks[1].value,
                congressLanguage: response.data.blocks[2].value,
                main: response.data.blocks[3].value
              }
            })
          })
          .catch(console.error);
      }

    render() {
        const { header, subHeader, main, congressLanguage } = this.state.textContent
        return(
            <div>
                <Main header={ header } subHeader= {subHeader} main={ main } congressLanguage={ congressLanguage }/>
                <Footer />
            </div>
        )
    }
}

export default App;