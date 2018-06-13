'use strict';

const fs = require('fs');

const readThreeFiles = module.exports = (fd, callback) => { /* eslint-disable-line */
  fs.readFile(fd[0], (err1, data1) => { /* eslint-disable-line */
    if (err1) return callback(err1); // throw new Error(`Reading from ${fd[0]} failed.`);
    fs.readFile(fd[1], (err2, data2) => { /* eslint-disable-line */
      if (err2) return callback(err2); // throw new Error(`Reading from ${fd[1]} failed.`);
      fs.readFile(fd[2], (err3, data3) => { /* eslint-disable-line */
        if (err3) return callback(err3); // throw new Error(`Reading from ${fd[2]} failed.`);
        callback(null, [data1, data2, data3]);
      });
    });
  });
};
