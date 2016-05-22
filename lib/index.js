'use strict';

/**
* remark plugin to convert Markdown to plain text.
*
* @module remark-plain-text
*
* @example
* var remark = require( 'remark' );
* var toPlainText = require( 'remark-plain-text' );
*
* remark.use( toPlainText );
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
