var subModule = require('./module2_sub.js');
var helpers = require('./lib/helpers.js');

document.write(helpers.louder('Text from module2'));
document.write('<br>');
document.write(subModule);
