'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /blog when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/blog");
  });


  describe('blog', function() {

    beforeEach(function() {
      browser.get('index.html#!/blog');
    });


    it('should render blog when user navigates to /blog', function() {
      expect(element.all(by.css('div.sub-header')).first().getText()).
        toMatch(/Blog/);
    });

  });


  describe('glossary', function() {

    beforeEach(function() {
      browser.get('index.html#!/glossary');
    });


    it('should render glossary when user navigates to /glossary', function() {
      expect(element.all(by.css('div.sub-header')).first().getText()).
        toMatch(/Glossary/);
    });

  });
});
