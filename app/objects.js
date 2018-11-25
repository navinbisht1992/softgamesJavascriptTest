if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      obj.fn = fn;

      return obj.fn();
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      let prop = [];

      for (let i in obj) {
        if (obj.hasOwnProperty(i))
          prop.push(`${i}: ${obj[i]}`);
      }

      return prop;
    }
  };
});
