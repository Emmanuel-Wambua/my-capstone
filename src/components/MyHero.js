// src/MyHero.js

import React, { Component } from "react";
import SimpleCard from './SimpleCard';

class MyHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      heros: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/mha/')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            heros: result,
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
    const { error, isLoaded, heros } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container mt-5">
          <div className="row">
            {heros.map(hero => (
              <div key={hero.id} className="col-md-4">
                <SimpleCard
                  image={hero.image}
                  name={hero.name}
                  status={hero.status}
                  ability={hero.ability}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default MyHero;
