const async = require("async");

async.series([
  (callback) => {
    async.parallel(
      [
        (callback) => {
          setTimeout(() => {
            console.log("I execute first_1.");
            callback();
          }, 2000);
        },
        (callback) => {
          setTimeout(() => {
            console.log("I execute first_2.");
            callback();
          }, 1000);
        },
      ],
      callback
    );
  },
  (callback) => {
    setTimeout(() => {
      console.log("I execute next.");
      callback();
    }, 500);
  },
  (callback) => {
    setTimeout(() => {
      console.log("I execute last.");
      callback();
    }, 100);
  },
]);
