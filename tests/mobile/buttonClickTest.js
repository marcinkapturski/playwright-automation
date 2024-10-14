const { expect } = require('chai');

describe('Button Click Test', () => {
  it('should click on "Forms" button and verify navigation', async () => {

    const formsButton = await $('~Forms');
    
    await formsButton.click();

    const formsScreenTitle = await $('~Forms-screen');

    expect(await formsScreenTitle.isDisplayed()).to.be.true;
  });
});
