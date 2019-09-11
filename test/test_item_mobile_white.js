const assert = require('chai').assert;

describe('test_item_mobile_white', function() {
    it('should find hermione', function() {
        return this.browser
            .url('shop/goods/2810535_dummyitem1/?force_mobile=1&ssrm2066=1')
            .assertView('simple-item-mobile-white', '.nw_info_article2')
    });
});