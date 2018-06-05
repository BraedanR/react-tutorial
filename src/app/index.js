import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homelink: "Home",
            homeMounted: true
        }
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homelink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

  render () {
      let homeCmp = "";
      if (this.state.homeMounted) {
          homeCmp = (
              <Home
              name={"Max"}
              initialAge={27}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              initialLinkName={this.state.homelink}
              />
          );
          }
      return (
          <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header homelink={this.state.homelink}/>
                </div>
            </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                {homeCmp}
            </div>
        </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <button onClick={() => this.onChangeHomeMounted()} className="btn btn-primary"> (Un)Mount home component</button>
            </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
