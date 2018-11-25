if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      let files = [];

      for (let i of data.files) {
        if (typeof i === 'object')
          files = [...files, ...this.listFiles(i, dirName)];
        else {
          if (dirName) {
            if (i.split('.')[1] === dirName)
              files.push(i);
          }
          else
            files.push(i);
        }
      }
      return files;
    },

    permute: function(arr) {
      let l = arguments[1] || 0,
          r = arguments[2] || arr.length-1,
          ans = arguments[3] || [];

      if (l == r) {
        let a = [];

        a.push(...arr);
        ans.push(a);
      }
      else {
        for (let i = l; i <= r; i++) {
          [arr[l], arr[i]] = [arr[i], arr[l]];   // Swap using destructuring
          this.permute(arr, l+1, r, ans);
          [arr[l], arr[i]] = [arr[i], arr[l]];   // Swap using destructuring
        }
      }

      return ans;
    }
  };
});
