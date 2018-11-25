if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      let sum = 0,
          i = 0,
          j = arr.length - 1;

      // Can use for...of or for...in or Array.reduce, with complexity O(n)
      // Followinig have complexity O(n/2)
      while (i <= j) {
        if (i === j)
          sum += arr[i];
        else
          sum += (arr[i] + arr[j]);

        ++i;
        --j;
      }

      return sum;
    },

    remove : function(arr, item) {
      while (arr.includes(item)) {
        arr.splice( arr.indexOf(item), 1 );
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      while (arr.includes(item)) {
        arr.splice( arr.indexOf(item), 1 );
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      // Can also use Array.concat()
      return [...arr1, ...arr2];
    },

    insert : function(arr, item, index) {
      // can also use Array.fill(item,index,index).
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      let count = 0,
          i = 0,
          j = arr.length - 1;

      // Can use for...of or for...in, with complexity O(n)
      // Followinig have complexity O(n/2)
      while (i <= j) {
        if (i === j && arr[i] === item)
          ++count;
        else if (arr[i] === item)
          ++count;
        else if (arr[j] === item)
          ++count;

        ++i;
        --j;
      }
      return count;
    },

    duplicates : function(arr) {
      let duplicates = [],
          d = {},
          i = 0,
          j = arr.length - 1;

      // Complexity O(n/2)
      while (i <= j) {
        if (i === j)
          d[arr[i]] ? d[arr[i]] += 1 : d[arr[i]] = 1;   // Complexity O(1)
        else {
          d[arr[i]] ? d[arr[i]] += 1 : d[arr[i]] = 1;   // Complexity O(1)
          d[arr[j]] ? d[arr[j]] += 1 : d[arr[j]] = 1;   // Complexity O(1)
        }

        ++i;
        --j;
      }

      // Worst complexity O(n), best complexity O(n/2)
      for (let k in d) {
        if (d[k] > 1)
          duplicates.push(k);
      }

      return duplicates;

    },

    square : function(arr) {
      let i = 0,
          j = arr.length - 1;

      // Can use for...in or Array.map(), with complexity O(n)
      // Followinig have complexity O(n/2)
      while (i <= j) {
        if (i === j)
          arr[i] = Math.pow(arr[i],2);
        else {
          arr[i] = Math.pow(arr[i],2);
          arr[j] = Math.pow(arr[j],2);
        }

        ++i;
        --j;
      }

      return arr;
    },

    findAllOccurrences : function(arr, target) {
      let occurrences = [];

      for (let i in arr) {
        if (arr[i] === target)
          occurrences.push(i);
      }

      return occurrences;
    }
  };
});
