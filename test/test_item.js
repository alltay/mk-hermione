const assert = require('chai').assert;

describe('test_item', function() {
    it('should find hermione', function() {
        return this.browser
            .url('shop/goods/2810535_dummyitem1/')
            .assertView('simple-item', '.nw_info_article2')
    });
});