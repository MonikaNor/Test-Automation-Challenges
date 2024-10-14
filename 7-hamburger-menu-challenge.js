describe("Hamburger Menu Challenge", () => {
  it("1 - Verify Error Message for all options except VERIFY ME.", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/hamburger-menu.html"
    );

    // Defining web elements
    const openMenu = await $(".icon");
    const home = await $("#hamburger-menu-home");
    const about = await $("#hamburger-menu-about");
    const blog = await $("#hamburger-menu-blog");
    const contact = await $("#hamburger-menu-contact");
    const errorMsg = await $("#conf-msg");
    // Running the test
    await openMenu.waitForDisplayed();
    await openMenu.click();
    await home.waitForDisplayed();
    await home.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMsg.getText()
    );
    await about.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMsg.getText()
    );
    await blog.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMsg.getText()
    );
    await contact.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMsg.getText()
    );
  });

  it("2 - To solve a challenge, select the option VERIFY ME.", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/hamburger-menu.html"
    );

    // Defining web elements
    const openMenu = await $(".icon");
    const verifyMe = await $("#hamburger-menu-verify");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");
    // Running the test
    await openMenu.waitForDisplayed();
    await openMenu.click();
    await verifyMe.waitForDisplayed();
    await verifyMe.click();
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });
});
