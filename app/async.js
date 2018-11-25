if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : async function(value) {
      return value;
    },

    manipulateRemoteData : async function(url) {
      try {
        let result = await $.ajax({
          url,
          method: "GET"
        });

        let people = [],
            i = 0,
            j = result.people.length - 1;

        while (i <= j) {
          if (i === j)
            people.push(result.people[i].name);
          else {
            people.push(result.people[i].name);
            people.push(result.people[j].name);
          }

          ++i;
          --j;
        }

        people.sort();

        return people;
      }
      catch(err) {
        return err;
      }
    }
  };
});
