var subModule = require('./module1_sub.js');
var helpers = require('./lib/helpers.js');

document.write(helpers.louder('Text from module1'));
document.write('<br>');
document.write(subModule);
