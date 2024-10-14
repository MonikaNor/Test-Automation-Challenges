describe("Drop-down Challenge", () => {
  it("1 - Verify Error Message and Country when selected country is NOT Lithuania!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/drop-down.html"
    );

    // Defining web elements
    const verifyButton = await $("#dropdown-verify-btn");
    const dropDown = await $("#country");
    const errorMsg = await $("#conf-msg");
    // Running the test
    await dropDown.waitForDisplayed();
    await dropDown.selectByVisibleText("Australia");
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Selected country is Australia, NOT Lithuania!",
      await errorMsg.getText()
    );
    console.log("Country selected is:", await dropDown.getValue());
  });

  it("2 - Verify Error Message with at least 3 countries", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/drop-down.html"
    );

    // Defining web elements
    const verifyButton = await $("#dropdown-verify-btn");
    const dropDown = await $("#country");
    const errorMsg = await $("#conf-msg");
    // Running the test - 1st country
    await dropDown.waitForDisplayed();
    await dropDown.selectByVisibleText("Bolivia");
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Selected country is Bolivia, NOT Lithuania!",
      await errorMsg.getText()
    );
    // Running the test - 2nd country
    await dropDown.waitForDisplayed();
    await dropDown.selectByVisibleText("Macedonia");
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Selected country is Macedonia, NOT Lithuania!",
      await errorMsg.getText()
    );
    // Running the test - 3rd country
    await dropDown.waitForDisplayed();
    await dropDown.selectByVisibleText("Zimbabwe");
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Selected country is Zimbabwe, NOT Lithuania!",
      await errorMsg.getText()
    );
  });

  it("3 - To solve a challenge select the country Lithuania from drop down list and VERIFY it!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/drop-down.html"
    );

    // Defining web elements
    const verifyButton = await $("#dropdown-verify-btn");
    const dropDown = await $("#country");
    const errorMsg = await $("#conf-msg");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");
    // Running the test - 1st country
    await dropDown.waitForDisplayed();
    await dropDown.selectByVisibleText("Lithuania");
    console.log("Country selected is:", await dropDown.getValue());
    await verifyButton.click();
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });
});
