'use strict';

describe('myApp.homepage module', function() {

  beforeEach(module('myApp.homepage'));

  describe('homepage controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var homepageCtrl = $controller('homepageCtrl');
      expect(homepageCtrl).toBeDefined();
    }));

  });
});