'use strict';

/**
* Transforms a Markdown file.
*
* @param {Object} ast - root node
* @param {File} file - virtual file
*/
function transformer( ast, file ) {
	console.log( ast, file );
} // end FUNCTION transformer()


// EXPORTS //

module.exports = transformer;
