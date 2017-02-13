
var moduleIdRegex = /moduleId\s*:(\s*module.id\s*([,}]))/gm;

module.exports = function removeModuleIdFromComponents(source, sourceMap) {
	this.cacheable();
	
	var newSource = source.replace(moduleIdRegex, '');
	
	this.callback(null, newSource, sourceMap);
};