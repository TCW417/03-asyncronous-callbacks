'use strict';

const fs = require('fs');

const rd = module.exports = {};

rd.readThreeFiles = (fd, callback) => { /* eslint-disable-line */
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

rd.readAllFiles = (fdArray, callback) => {
  const allData = [];
  const recursiveRead = (fd) => {
    // console.log('recursing, fd=', fd);
    // if (!fd) { console.log('returning on undefined fd'); return; }
    if (!fd) return;
    fs.readFile(fd, (err, data) => {
      if (err) return callback(err);
      allData.push(data);
      return recursiveRead(fdArray.pop());
      // const rfd = fdArray.pop();
      // if (rfd) { console.log('recursing on ', rfd); return recursiveRead(rfd); }
      // return allData;
    });
  };
  recursiveRead(fdArray.pop());
};

