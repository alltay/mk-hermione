const assert = require('chai').assert;

describe('test_cat', function() {
    it('should find hermione', function() {
        return this.browser
            .url('shop/dummy_cat/?pagenum=1&view_count=12')
            .assertView('simple-cat', '.module_info')
    });
});