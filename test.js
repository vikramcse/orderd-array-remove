var expect = require('chai').expect;
var remove = require('./index.js');

describe('tests for checkign removal of index from orderd array', function() {
  it('should return array without element 3 in orderd form', function() {
    expect(remove([1, 2, 3, 4, 5], 3)).to.eql([1, 2, 4, 5]);
  });

  it('should return array without element "c" in orderd form', function() {
    expect(remove(['a', 'b', 'c', 'd'], 'c')).to.eql(['a', 'b', 'd']);
  });
});
