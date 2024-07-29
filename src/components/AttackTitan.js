// src/Attack.js

import React, { Component } from "react";
import SimpleCard from './SimpleCard';

class Attack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      titans: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/aot/')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            titans: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, titans } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container mt-5">
          <div className="row">
            {titans.map(titan => (
              <div key={titan.id} className="col-md-4">
                <SimpleCard
                  image={titan.image}
                  name={titan.name}
                  status={titan.status}
                  ability={titan.ability}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Attack;
