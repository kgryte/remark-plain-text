# beep

> Beep boop.

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

```bash
$ npm install beep-boop
```

<!-- </installation> -->

<!-- <usage> -->

## Usage

```javascript
var beepboop = require( 'beep-boop' );
```

<a name="beepboop"></a>

#### beepboop( \[options] )

Beep boop.

```javascript
var bebop = beepboop();
```

The function accepts the following options:

-   **foo**
-   **bar**

To set options,

```javascript
var opts = {
    'foo': true,
    'bar': false
};
var bebop = beepboop( opts );
```

<!-- </usage> -->

<!-- <examples> -->

## Examples

```javascript
var beepboop = require( 'beep-boop' );

var bebop = beepboop();
// returns 'beep boop'
```

To run the example code from the top-level application directory,

```bash
$ node ./examples/index.js
```

<!-- </examples> -->

<!-- <cli> -->

* * *

## CLI

<!-- <usage> -->

### Usage

```bash
Usage: beepboop [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

<!-- </usage> -->

<!-- <notes> -->

### Notes

1.  Foo
    -   Bar
2.  Bop
    -   Bap
        -   Woot

<!-- </notes> -->

<!-- <examples> -->

### Examples

```bash
$ beepboop
# => bebop
```

<!-- </examples> -->

<!-- </cli> -->

<!-- <tests> -->

* * *

## Tests

### Unit

This repository uses tape for unit tests. To run the tests, execute the following command in the top-level application directory:

```bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.

### Test Coverage

This repository uses Istanbul as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

```bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

```bash
$ make view-cov
```

<!-- </tests> -->

<!-- <license> -->

* * *

## License

MIT license.

## Copyright

Copyright © 2016. Beep boop.

<!-- </license> -->

<!-- <links> -->

<!-- </links> -->
