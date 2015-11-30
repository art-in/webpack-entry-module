// webpack-entry-module bootstrap (autogeneraged)

// Extract path to entry module from script-tag
// TODO: check attribute in script-tag of webpack bundle only, not just first one
var scriptTag = document.querySelector('script');
var entryModule = scriptTag.getAttribute('webpack-entry-module');
if (!entryModule) throw Error('No entry module specified!');

// We should explicitly require all modules,
// so webpack can find them in text of this module and then bundle
switch(entryModule) {
case 'lib/helpers.js': require('./lib/helpers.js'); break;
case 'module1_sub.js': require('./module1_sub.js'); break;
case 'module1.js': require('./module1.js'); break;
case 'module2_sub.js': require('./module2_sub.js'); break;
case 'module2.js': require('./module2.js'); break;
case 'sub/module3.js': require('./sub/module3.js'); break;
default: throw new Error('Unknown entry module: ' + entryModule);
}