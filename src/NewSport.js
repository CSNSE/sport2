import React, { Component } from 'react'
import { UICreateSport, TeamNavBar } from "./ui-components";
import "./App.css";

class NewSport extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        <TeamNavBar/>
        <UICreateSport style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default NewSport