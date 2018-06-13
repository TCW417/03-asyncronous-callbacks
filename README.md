![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 03: Asynchronous Callbacks
===

[![Build Status](https://travis-ci.org/TCW417/03-asyncronous-callbacks.svg?branch=master)](https://travis-ci.org/TCW417/03-asyncronous-callbacks)

This lab involves the following files and functions:

- **lib/reader.js**  This file exports readThreeFiles(fd: array[3] of file paths, callback: f(error, data array[3])).  The function takes an array of three file paths and a callback with the error first signature, with the second parameter being an array of three buffers, data in which corresponds with the three paths supplied to the "parent" function.  Data returned IS NOT modified, so it's up to the calling function to deal with data conversion as needed.

- **__test__/reader.test.js** This file executes tests of readThreeFiles function.

- **__test__/mock_data/testN.txt** Three files with text with which to test the readThreeFiles function.
