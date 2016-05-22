'use strict';

// MODULES //

var stripBadges = require( 'remark-strip-badges' );
var unlink = require( 'remark-unlink' );
var squeezeParagraphs = require( 'remark-squeeze-paragraphs' );
var normalizeHeadings = require( 'remark-normalize-headings' );
var transformer = require( './transformer.js' );


// ATTACHER //

/**
* Attach a plugin to a remark processor in order to compile Markdown to plain text.
*
* @param {Remark} remark - processor
* @param {Object} [options] - plugin options
* @return {Function} transformer
*/
function attacher( remark ) {

	// Strip badges from the file:
	remark.use( stripBadges );

	// Remove all links, references and definitions:
	remark.use( unlink );

	// Remove empty paragraphs:
	remark.use( squeezeParagraphs );

	// Adjust the heading levels such that only one top-level heading exists in the document:
	remark.use( normalizeHeadings );

	return transformer;
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
