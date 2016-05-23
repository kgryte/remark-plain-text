beep
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Beep][beep] boop.

<!-- <intro> -->

Beep boop is defined as

<!-- <equation class="equation" label="eq:afoo" align="center" raw="x = y" alt="foo"> -->

<div class="equation" align="center" data-raw-text="x = y" data-equation="eq:foo">
    <img src="./docs/img/foo.svg" alt="foo">
    <br>
</div>

<!-- </equation> -->

<!-- </intro> -->


<!-- <installation> -->

## Installation

``` bash
$ npm install beep-boop
```

<!-- </installation> -->


<!-- <usage> -->

## Usage

``` javascript
var beepboop = require( 'beep-boop' );
```

<a name="beepboop"></a>
#### beepboop( \[options\] )

Beep [boop][boop].

``` javascript
var bebop = beepboop();
```

The function accepts the following options:

* __foo__
* __bar__

To set options,

``` javascript
var opts = {
    'foo': true,
    'bar': false
};
var bebop = beepboop();
```

<!-- </usage> -->


<!-- <examples> -->

## Examples

``` javascript
var beepboop = require( 'beep-boop' );

var bebop = beepboop();
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

<!-- </examples> -->


<!-- <cli> -->

---

## CLI

<!-- <usage> -->

### Usage

``` bash
Usage: beepboop [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

<!-- </usage> -->


<!-- <notes> -->

### Notes

1. Foo
   * Bar
2. Bop
   * Bap
     - Woot

<!-- </notes> -->

<!-- <examples> -->

### Examples

``` bash
$ beepboop
# => bebop
```

<!-- </examples> -->

<!-- </cli> -->


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

Copyright &copy; 2016. Beep boop.

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

[beep]: beep
[boop]: boop

<!-- </links> -->
