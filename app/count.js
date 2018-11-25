if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      let timers = [];

      for (let i = 1, s = start; s <= end; ++i,++s) {

        let t = setTimeout( () => {
          console.log(s);
        },100*i);

        timers.push(t);
      }

      return {
        cancel: () => {
          for (let i of timers) {
            clearTimeout(i);
          }
        }
      };
    }
  };
});