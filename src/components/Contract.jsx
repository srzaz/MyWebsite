
import React, { Component } from 'react';
import lottery from '../lottery';
class Contract extends Component {
  state = {
    manager: ''
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();

    this.setState({ manager, players });
  }
  render() {
    return (
      <div className="contact">
        <div class="container">
          <div class="row align-items-center my-5">
          
            <div class="col-lg-5">
              <h1 class="font-weight-light">Lottery Contract</h1>
              <p>
      
                this contract is managed by {this.state.manager}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contract;