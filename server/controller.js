// Controller here
// complete building out the controller
var Product = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    Product.getProductsHelper()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  post: (req, res) => {
    Product.postProductsHelper(req.body)
    .then(() => {
      res.status(200).send('posted');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  put: (req, res) => {
    // console.log(req.params._id);
    Product.updateProductHelper(req.params._id, req.body.curr_bid)
    .then(() => {
      res.status(200).send('put');
    })
    .catch((err) => {
      console.error(err);
    })
  },
  delete: (req, res) => {
    Product.deleteProductHelper(req.params._id)
    .then(() => {
      res.status(200).send('deleted');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  }
}

module.exports = controller