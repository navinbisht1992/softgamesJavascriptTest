if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
      return /([A-Z]).*\1/i.test(str);
    },

    endsWithVowel : function(str) {
      return /[aeiou]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
      var num = str.match(/[0-9]{3}/);
      if (num)
        return num[0];

      return false;
    },

    matchesPattern : function(str) {
      return /^[0-9]{3}-{1}[0-9]{3}-{1}[0-9]{4}$/.test(str);
    },

    isUSD : function(str) {
      return /^[$]{1}(?:\d+|\d{1,3},(?:\d{3},)*\d{3})(?:\.\d{2})?$/.test(str);
    }
  };
});
