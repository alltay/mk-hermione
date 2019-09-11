const assert = require('chai').assert;

describe('test_cat_mobile_white', function() {
    it('should find hermione', function() {
        return this.browser
            .url('shop/dummy_cat/?pagenum=1&view_count=12&force_mobile=1&ssrm2066=1')
            .assertView('simple-cat-mobile-white', '.module_info')
    });
});