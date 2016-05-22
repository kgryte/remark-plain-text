'use strict';

// MODULES //

var transformer = require( './transformer.js' );


// ATTACHER //

/**
* Attach a plugin to compile Markdown to plain text to a remark processor.
*
* @param {Remark} remark - processor
* @param {Object} [options] - plugin options
* @return {Function} transformer
*/
function attacher() {
	return transformer;
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
