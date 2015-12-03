var fs = require("fs");
var path = require("path");
var glob = require("glob");
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

var srcPath = "/example/src";
var buildPath = "/example/build";

gulp.task("webpack", ["webpack-entry-module"],
  function(cb) {
    webpack({
      context: __dirname + srcPath,
      entry: "./webpack-entry-module.js",
      output: {
        path: __dirname + buildPath,
        filename: "./bundle.js"
      }
    }, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({ colors: true }));
      cb();
    });
  });

//region webpack-entry-module

/**
 * Generates entry module file, which supposed be loaded first,
 * and conditionaly run other modules.
 *
 * To run special module reference it in HTML like this:
 * <script src="bundle.js" webpack-entry-module="module_for_page.js"></script>
 *
 * Source:
 * https://github.com/artin-phares/webpack-entry-module
 */
gulp.task("webpack-entry-module", function() {
  var modules = getModulePaths();
  var entryModule = getWebpackEntryModuleBootstrapCode(modules);

  fs.writeFileSync("." + srcPath + "/webpack-entry-module.js", entryModule);
});

/**
 * Gets paths of src modules
 */
function getModulePaths() {
  var modules = [];

  glob.sync(__dirname + srcPath + "/**/*.js", {
    nonull: false
  }).forEach(function (file) {
    if (file.indexOf("webpack-entry-module.js") !== -1) return;
    file = path.normalize(path.relative(__dirname + srcPath,file));
    file = file.replace(/\\/g, "/");
    modules.push(file);
  });

  return modules;
}

/**
 * Gets code of entry module
 */
function getWebpackEntryModuleBootstrapCode(modules) {
	
	var template = "" +
		"// webpack-entry-module bootstrap (autogeneraged)\n\n" +
		"// Extract path to entry module from script-tag\n" +
		"// TODO: check attribute in script-tag of webpack bundle only, not just first one\n" +
		"var scriptTag = document.querySelector('script[webpack-entry-module]');\n" +
		"var entryModule = scriptTag.getAttribute('webpack-entry-module');\n" +
		"if (!entryModule) throw Error('No entry module specified!');\n\n" +
		"// We should explicitly require all modules,\n" +
		"// so webpack can find them in text of this module and then bundle\n" +
		"switch(entryModule) {\n" +
			"//MODULE_CASES_STUB\n" +
			"default: throw new Error('Unknown entry module: ' + entryModule);\n" +
		"}";
	
	// resolve template
	var cases = [];
	modules.forEach(function(module) {
		cases.push("case '" + module + "': require('./" + module + "'); break;");
	});
	
	return template.replace("//MODULE_CASES_STUB", cases.join("\n"));
}

//endregion webpack-entry-module

gulp.task("html", function() {
  gulp.src(__dirname + srcPath + "/**/*.html")
    .pipe(gulp.dest(__dirname + buildPath))
});

gulp.task("default", ["html", "webpack"]);