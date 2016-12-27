const assert = require('assert');

describe('Initial page', ()=> {
    it('has a page title', ()=>{
        browser.url('/');
        assert.equal(browser.getTitle(), 'Baby Animals');
    })
});