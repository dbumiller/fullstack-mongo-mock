import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bid: this.props.product.curr_bid
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.bid > this.props.product.curr_bid) {
      axios.put(`name/products/${this.props.product._id}`, {curr_bid: this.state.bid})
      .then(() => {
        this.props.getProducts();
      })
      .catch((err) => {
        console.error(err);
      })
    }
  }

  handleInput(e) {
    this.setState({
      bid: e.target.value
    });
  }

  render(){
    if (this.props.product === 'loading') {
      return (
        <div>LOADING...</div>
      )
    } else {
    return(
      <div className = 'product-viewer' id='product-viewer-container'>
        Product-viewer
        <img src={this.props.product.image}></img>
              <div>{this.props.product.item}</div>
              <div>Current Bid: ${this.props.product.curr_bid}</div>
              <div>Bid ends in: {this.props.product.ends_in}</div>
              <form onSubmit={this.handleSubmit}>
                <label>Your Bid: $</label>
                <input placeholder={this.props.product.curr_bid + 1} onChange={this.handleInput} ></input>
                <button type='submit'>Submit</button>
              </form>
      </div>
    )
            }
  }
}