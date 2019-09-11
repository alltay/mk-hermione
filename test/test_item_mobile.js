const assert = require('chai').assert;

describe('test_item_mobile', function() {
    it('should find hermione', function() {
        return this.browser
            .url('shop/goods/2810535_dummyitem1/?force_mobile=1')
            .assertView('simple-item-mobile', '.nw_info_article2')
    });
});