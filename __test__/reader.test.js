'use strict';

const fs = require('fs');
const rd = require('../lib/reader');

const files = [];
const exData = [];

describe('reader.js tests for lab 03', () => {
  beforeAll(() => {
    for (let i = 1; i < 6; i++) {
      files.push(`${__dirname}/mock_data/test${i}.txt`);
      exData.push(fs.readFileSync(files[i - 1]).toString());
    }
  });
  test('readThreeFiles tests', (done) => { /* eslint-disable-line */
    rd.readThreeFiles(files, (err, data) => {
      if (err) {
        console.log('r3f unexpected error', err);
        return;
      }
      expect(data).toHaveLength(3);
      expect(data[0].toString()).toEqual(exData[0]);
      expect(data[1].toString()).toEqual(exData[1]);
      expect(data[2].toString()).toEqual(exData[2]);
    });
    done();
  });
  test('readThreeFiles with bad fd[0]', (done) => {/* eslint-disable-line */
    const badFiles = files.slice(); // create copy so async behavior doesnt mess up tests above.
    badFiles[0] = 'bad filename';
    rd.readThreeFiles(badFiles, (err, data) => { /* eslint-disable-line */
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
    done();
  });
  test('readThreeFiles with bad fd[1]', (done) => { /* eslint-disable-line */
    const badFiles = files.slice(); // create copy so async behavior doesnt mess up tests above.
    badFiles[1] = 'bad filename';
    rd.readThreeFiles(badFiles, (err, data) => { /* eslint-disable-line */
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
    done();
  });
  test('readThreeFiles with bad fd[2]', (done) => { /* eslint-disable-line */
    const badFiles = files.slice(); // create copy so async behavior doesnt mess up tests above.
    badFiles[2] = 'bad filename';
    rd.readThreeFiles(badFiles, (err, data) => { /* eslint-disable-line */
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
    done();
  });

  test('readAllFiles (recursive version) tests: three files', (done) => { /* eslint-disable-line */
    rd.readAllFiles(files, (err, data) => {
      if (err) {
        console.log('r3f unexpected error', err);
        return;
      }
      expect(data).toHaveLength(files.length);
      for (let i = 0; i < files.length; i++) {
        expect(data[i].toString()).toEqual(exData[i]);
      }
    });
    done();
  });
  test('readAllFiles (recursive version) tests: one file', (done) => { /* eslint-disable-line */
    rd.readAllFiles([files[0]], (err, data) => {
      if (err) {
        console.log('r3f unexpected error', err);
        return;
      }
      expect(data).toHaveLength(1);
      expect(data[0].toString()).toEqual(exData[0]);
    });
    done();
  });
  test('readAllFiles with bad fd[2]', (done) => { /* eslint-disable-line */
    const badRFiles = files.slice(); // create copy so async behavior doesnt mess up tests above.
    badRFiles[2] = 'bad filename';
    rd.readAllFiles(badRFiles, (err, data) => { /* eslint-disable-line */
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
    done();
  });
});
