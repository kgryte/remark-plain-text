remark-plain-text
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [remark][remark] plugin to compile Markdown to plain text.

<!-- <installation> -->
## Installation

``` bash
$ npm install remark-plain-text
```

<!-- </installation> -->

<!-- <usage> -->
## Usage

``` javascript
var toPlainText = require( 'remark-plain-text' );
```

#### toPlainText()

Compiles Markdown to plain text.

``` javascript
var remark = require( 'remark' );

remark.use( toPlainText );
```

<!-- </usage> -->

<!-- <examples> -->
## Examples

``` javascript
var fs = require( 'fs' );
var path = require( 'path' );
var remark = require( 'remark' );
var toPlainText = require( 'remark-plain-text' );

var fpath = path.resolve( __dirname, '../README.md' );
var file = fs.readFileSync( fpath, 'utf8' );

var doc = remark.use( toPlainText ).process( file );

console.log( doc );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

<!-- </examples> -->

<!-- <tests> -->
---

## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```

<!-- </tests> -->

<!-- <license> -->
---

## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.

<!-- </license> -->

<!-- <links> -->

[npm-image]: http://img.shields.io/npm/v/remark-plain-text.svg
[npm-url]: https://npmjs.org/package/remark-plain-text

[build-image]: http://img.shields.io/travis/kgryte/remark-plain-text/master.svg
[build-url]: https://travis-ci.org/kgryte/remark-plain-text

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/remark-plain-text/master.svg
[coverage-url]: https://codecov.io/github/kgryte/remark-plain-text?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/remark-plain-text.svg
[dependencies-url]: https://david-dm.org/kgryte/remark-plain-text

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/remark-plain-text.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/remark-plain-text

[github-issues-image]: http://img.shields.io/github/issues/kgryte/remark-plain-text.svg
[github-issues-url]: https://github.com/kgryte/remark-plain-text/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul

[remark]: https://github.com/wooorm/remark

<!-- </links> -->
