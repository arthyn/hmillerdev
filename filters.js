const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const minify = require("babel-minify");
const rootUrl = require('./src/_data/metadata.json').url

module.exports = {
	// Short date
	shortDate: dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("MM/yy");
	},
	// Date formatting (human readable)
	readableDate: dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
	},
	// Date formatting (machine readable)
	machineDate: dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
	},
	// Minify CSS
	cssmin: code => {
		return new CleanCSS({}).minify(code).styles;
	},
	// Minify JS
	jsmin: code => {
		let minified = minify(code);
		if( minified.error ) {
			console.log("UglifyJS error: ", minified.error);
			return code;
		}
		return minified.code;
	},
	generateShareLink: (url, text) => {    
		const shareText = `${text} by @hmillerdev`    
		const postUrl = `${rootUrl}${url}`    
		return `https://twitter.com/intent/tweet/?text=${encodeURI(shareText)}&amp;url=${encodeURI(postUrl)}` 
	},  
	generateFindLink: (url) => {    
		const postUrl = `${rootUrl}${url}`   
		return `https://twitter.com/search?f=tweets&src=typd&q=${encodeURI(postUrl)}`  
	}
}