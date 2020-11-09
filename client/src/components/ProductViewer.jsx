import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bid: props
    }
  }



  render(){
    if (this.props.product === 'loading') {
      return (
        <div>LOADING...</div>
      )
    } else {
    return(
      <div className = 'product-viewer'>
        Product-viewer
        <img src={this.props.product.image}></img>
              <div>{this.props.product.item}</div>
              <div>Current Bid: ${this.props.product.curr_bid}</div>
              <div>Bid ends in: {this.props.product.ends_in}</div>
      </div>
    )
            }
  }
}