'use strict';

var fs = require( 'fs' );
var path = require( 'path' );
var remark = require( 'remark' );
var toPlainText = require( './../lib' );

var fpath = path.join( __dirname, 'fixtures/file.md' );
var file = fs.readFileSync( fpath, 'utf8' );

var doc = remark.use( toPlainText ).process( file );
console.log( doc );
