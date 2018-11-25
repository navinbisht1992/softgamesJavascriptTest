if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(...arr);
    },

    speak : function(fn, obj) {
      obj.fn = fn;
      return obj.fn();
    },

    functionFunction : function(str) {
      return function(str1) {
        return `${str}, ${str1}`;
      };
    },

    makeClosures : function(arr, fn) {
      let functions = [];

      for (let i = 0; i < arr.length; i++) {
        functions.push( function() {
          return fn(arr[i]);
        });
      }

      return functions;
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn(str1,str2,str3);
      }
    },

    useArguments : function() {
      let sum = 0;

      for (let i of arguments) {
        sum += i;
      }

      return sum;
    },

    callIt : function(fn) {
      let argument = [],
          f;

      [f, ...argument] = arguments;

      return fn(...argument);
    },

    partialUsingArguments : function(fn) {
      let argument = [],
          f;

      [f, ...argument] = arguments;
      return function () {
        [...argument] = [...argument, ...arguments];
        return fn(...argument);
      }
    },

    curryIt : function(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return fn(a,b,c);
          }
        }
      }
    }
  };
});
