import React from "react";
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import Menu from './menu';
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      menuData: [
        {name: "appetizers", items:[], id:4},
        {name: "breakfast", items:[], id:1},
        {name: "lunch", items:[], id:3},
        {name: "dinner", items:[], id:5},
        {name: "sides", items:[], id:6}
      ]
    }
  }
  let newArray = data.map(obj => {
    //loop through each object
    //add each item to an array that matches the key of the menuData array to the obj.menuType
    if(menuData[obj.menuType.label]){
      obj.
    }
  })
  componentDidMount() {
    //let items = window.localStorage.getItem('items')

    let apiURL = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/'

    let this_ = this;

    axios.get(apiURL)
      .then(function (response) {
        //console.log(response.data);
        //return response.data
        this_.setState({ sections: response.data })
      })
      .catch(function (error) {

        console.log(error);
      })
  }

  componentDidUpdate() {
    console.log(this.state.sections)
    window.localStorage.setItem('items', JSON.stringify(this.state.items))
  }

  render() {
    return (
      <header>
        <div className="header">

          <h1>Ursafox </h1>
          <h2>really great Korean food + drink</h2>

        </div>
        <Menu title="appetizers"></Menu>
        <Menu title="breakfast"></Menu>
        <Menu title="lunch"></Menu>
        <Menu title="dinner"></Menu>
        <Menu title="sides"></Menu>
      </header>

    );
  }
}


export default App;
