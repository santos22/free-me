(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/natestrauser_font-awesome/load.js                                         //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var head = document.getElementsByTagName('head')[0];                                  // 1
                                                                                      // 2
//Generate a style tag                                                                // 3
var style = document.createElement('link');                                           // 4
style.type = 'text/css';                                                              // 5
style.rel = "stylesheet";                                                             // 6
style.href = '//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css';
                                                                                      // 8
head.appendChild(style);                                                              // 9
                                                                                      // 10
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['natestrauser:font-awesome'] = {};

})();
