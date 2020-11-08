var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => { return Product.find({})},
  postProductsHelper: (item) => { return Product.create(item)},
  updateProductHelper: (_id, curr_bid) => {
    console.log(_id);
    return Product.findOneAndUpdate({_id}, {curr_bid: curr_bid})
  },
  deleteProductHelper: (_id) => { return Product.deleteOne({_id})}
};

module.exports = helpers