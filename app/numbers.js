if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      let binary = num.toString(2).split('').reverse();

      return parseInt(binary[bit-1]);
    },

    base10: function(str) {
      return parseInt(str,2);
    },

    convertToBinary: function(num) {
      let binary = num.toString(2);

      while (binary.length < 8) {
        binary = binary.split('');
        binary.unshift(0)
        binary = binary.join('');
      }

      return binary;
    },

    multiply: function(a, b) {
      return parseFloat(parseFloat(a * b).toPrecision(8));
    }
  };
});

