'use strict';
var React = require('react');
var MetaTagsMixin = require('../lib/MetaTagsMixin');

var Product = React.createClass({
  mixins: [MetaTagsMixin],

  product: function() {
    var name = this.props.params.name;
    return _.find(this.props.collections.Products, function(p) {
      return p.name === name;
    });
  },

  componentWillMount: function() {
    this.setTitle("Case Study | Percolate Studio");
    this.setDescription(this.product().description);
  },
  
  render: function() {
    var product = this.product();
    return React.createElement(product.component, _.extend({}, this.props, {product: product}));
  }
});

module.exports = Product;