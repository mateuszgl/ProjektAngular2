/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {


  // map tells the System loader where to look for things
  var map = {
    'app':                        'app',
      // angular bundles /core/index.js
      '@angular/core': 'components/@angular/core/bundles/core.umd.js',
      '@angular/common': 'components/@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'components/@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'components/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'components/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'components/@angular/http/bundles/http.umd.js',
      '@angular/router': 'components/@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'components/@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'components/@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'components/@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'components/@angular/upgrade/bundles/upgrade-static.umd.js',

      // other libraries
      'rxjs':                      'components/rxjs',
      'angular-in-memory-web-api': 'components/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      '@ng-bootstrap/ng-bootstrap': 'components/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':    { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':   {defaultExtension: 'js' }
  };

  var packageNames = [
  ];


  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);