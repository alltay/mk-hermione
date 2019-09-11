const assert = require('chai').assert;

describe('test_cat_white', function() {
    it('should find hermione', function() {
        return this.browser
            .url('shop/dummy_cat/?pagenum=1&view_count=12&ssrm2066=1')
            .assertView('simple-cat-white', '.module_info')
    });
});