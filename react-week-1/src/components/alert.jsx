import React, {Component} from "react";

class Alert extends Component {
  state = {showAlert: ""};

  componentDidMount() {
    this.setState({
      showAlert: (
        <div className="alert alert-danger" role="alert">
          I'm Alive!
        </div>
      ),
    });
  }

  render() {
    const {showAlert} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <h1 className="col-4">Hello</h1>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <p className="col-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            dicta facilis aut minus. Pariatur atque odio non! Ea mollitia
            pariatur quibusdam voluptas? Facilis harum nihil tempore asperiores,
            repellat sapiente minus.
          </p>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">{showAlert}</div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

export default Alert;
