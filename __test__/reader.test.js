'use strict';

const fs = require('fs');
const readThreeFiles = require('../lib/reader');

const files = [];
const exData = [];

describe('reader.js tests for lab 03', () => {
  beforeAll(() => {
    files.push(`${__dirname}/./mock_data/test1.txt`);
    files.push(`${__dirname}/./mock_data/test2.txt`);
    files.push(`${__dirname}/./mock_data/test3.txt`);
    exData.push(fs.readFileSync(files[0]).toString());
    exData.push(fs.readFileSync(files[1]).toString());
    exData.push(fs.readFileSync(files[2]).toString());
  });
  test('readThreeFiles tests', () => {
    readThreeFiles(files, (err, data) => {
      if (err) {
        console.log('r3f unexpected error', err);
        return;
      }
      expect(data).toHaveLength(3);
      expect(data[0].toString()).toEqual(exData[0]);
      expect(data[1].toString()).toEqual(exData[1]);
      expect(data[2].toString()).toEqual(exData[2]);
    });
  });
  test('readThreeFiles with bad fd[0]', () => {
    const badFiles = files.slice(); // create copy so async behavior doesnt mess up tests above.
    badFiles[0] = 'bad filename';
    readThreeFiles(badFiles, (err, data) => { /* eslint-disable-line */
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });
  test('readThreeFiles with bad fd[1]', () => {
    const badFiles = files.slice(); // create copy so async behavior doesnt mess up tests above.
    badFiles[1] = 'bad filename';
    readThreeFiles(badFiles, (err, data) => { /* eslint-disable-line */
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });
  test('readThreeFiles with bad fd[2]', () => {
    const badFiles = files.slice(); // create copy so async behavior doesnt mess up tests above.
    badFiles[2] = 'bad filename';
    readThreeFiles(badFiles, (err, data) => { /* eslint-disable-line */
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });
});
