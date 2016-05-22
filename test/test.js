'use strict';

// MODULES //

var tape = require( 'tape' );
var toPlainText = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof toPlainText, 'function', 'main export is a function' );
	t.end();
});
