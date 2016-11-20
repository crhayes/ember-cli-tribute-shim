/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-cli-tribute-shim',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('tribute', '^2.1.0');
  }
};
