const assert = require('chai').assert;

describe('test_cat_mobile', function() {
    it('should find hermione', function() {
        return this.browser
            .url('shop/dummy_cat/?pagenum=1&view_count=12&force_mobile=1')
            .assertView('simple-cat-mobile', '.module_info')
    });
});