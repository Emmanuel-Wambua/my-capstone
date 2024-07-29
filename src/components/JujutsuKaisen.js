// src/MyHero.js

import React, { Component } from "react";
import SimpleCard from './SimpleCard';

class JujutsuKaisen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      curses: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/jjk/')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            curses: result,
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
    const { error, isLoaded, curses } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container mt-5">
          <div className="row">
            {curses.map(curse => (
              <div key={curse.id} className="col-md-4">
                <SimpleCard
                  image={curse.image}
                  name={curse.name}
                  status={curse.status}
                  ability={curse.ability}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default JujutsuKaisen;
