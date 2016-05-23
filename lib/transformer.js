'use strict';

// MODULES //

var fs = require( 'fs' );
var path = require( 'path' );


// TRANSFORMER //

/**
* Transforms a Markdown file.
*
* @private
* @param {Node} ast - root node
* @param {File} file - virtual file
*/
function transformer( ast, file ) {
	var fpath;

	fpath = path.resolve( __dirname, '../examples/fixtures/ast.json' );
	fs.writeFileSync( fpath, JSON.stringify( ast ), {'encoding': 'utf8' } );
	// console.log( ast, file );
} // end FUNCTION transformer()


// EXPORTS //

module.exports = transformer;
