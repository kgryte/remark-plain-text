'use strict';

var fs = require( 'fs' );
var path = require( 'path' );
var remark = require( 'remark' );
var toPlainText = require( './../lib' );

var fpath;
var opts;
var file;
var doc;

// Load a Markdown file...
fpath = path.join( __dirname, 'fixtures/input.md' );
opts = {
	'encoding': 'utf8'
};
file = fs.readFileSync( fpath, opts );

// Compile the Markdown file to plain text:
doc = remark.use( toPlainText ).process( file );

// Write the file to disk...
fpath = path.join( __dirname, 'fixtures/output.md' );
fs.writeFileSync( fpath, doc, opts );

