import React from 'react';
import Products from './Products';



export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className='product-list'>
        ProductList
        {this.props.products.map((product, index) => {
          return (
            // <div key={index} onClick={() => {this.props.changeCurrent(current)}}>
            //   <img src={product.image}></img>
            //   <div>{product.item}</div>
            //   <div>Current Bid: ${product.curr_bid}</div>
            //   <div>Bid ends in: {product.ends_in}</div>
            // </div>
            <Products key={index} product={product} changeCurrent={this.props.changeCurrent}/>
          )
        })}
      </div>
    )
  }
}