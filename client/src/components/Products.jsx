import React from 'react';



export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product
    }
  }

  render() {

    return(
      <div className='product-list-entry'>
        <div key={this.props.index} onClick={
          () => {
          var current = this.state.product;
          this.props.changeCurrent(current)
          }}>
                <img src={this.props.product.image}></img>
                <div>{this.props.product.item}</div>
                <div>Current Bid: ${this.props.product.curr_bid}</div>
                <div>Bid ends in: {this.props.product.ends_in}</div>
              </div>
      </div>
    )
  }
}


// const Products = (props) => {
  // return(
  //   <div className='product-list-entry'>
  //     <div key={props.index}>
  //             <img src={props.product.image}></img>
  //             <div>{props.product.item}</div>
  //             <div>Current Bid: ${props.product.curr_bid}</div>
  //             <div>Bid ends in: {props.product.ends_in}</div>
  //           </div>
  //   </div>
  // )
// }

// export default Products