describe("Number Box Challenge", () => {
  it("1 - Verify Error Message when nothing is entered!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
    );

    // Defining web elements
    const verifyButton = await $("#number-verify");
    const errorMsg = await $("#conf-msg");

    // Running the test
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal("No number is entered!", await errorMsg.getText());
  });

  it("2 - Verify Error Message when entered number is more than 100!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
    );

    // Defining web elements
    const verifyButton = await $("#number-verify");
    const errorMsg = await $("#conf-msg");
    const number = await $("#number-box");

    // Running the test
    await number.waitForDisplayed();
    await number.setValue(100.001);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await browser.pause(1000);
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Entered number is NOT in range of 0-100!",
      await errorMsg.getText()
    );
  });

  it("3 - Verify Error Message when entered number is less than 0!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
    );

    // Defining web elements
    const verifyButton = await $("#number-verify");
    const errorMsg = await $("#conf-msg");
    const number = await $("#number-box");

    // Running the test
    await number.waitForDisplayed();
    await number.setValue(-0.999);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await browser.pause(1000);
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Entered number is NOT in range of 0-100!",
      await errorMsg.getText()
    );
  });

  it("4 - To solve a challenge enter the number between 0 - 100 & click VERIFY!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
    );

    // Defining web elements
    const verifyButton = await $("#number-verify");
    const number = await $("#number-box");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");

    // Running the test
    await number.waitForDisplayed();
    await number.setValue(99.9999999);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await browser.pause(1000);
    await browser.pause(500);
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });

  ////BONUS! - Automate any found defect! ////

  it("BONUS! - Back to Challenge List.", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
    );

    // Defining web elements
    const verifyButton = await $("#number-verify");
    const number = await $("#number-box");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");
    const backButton = await $("body > section > div > button");

    // Running the test
    await number.waitForDisplayed();
    await number.setValue("88");
    await browser.pause(500);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
    await backButton.waitForDisplayed();
    assert.equal("BACK TO CHALLENGE LIST", await backButton.getText());
  });

  it("BONUS! - Verify Error Message when entered number is more than 100!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
    );

    // Defining web elements
    const verifyButton = await $("#number-verify");
    const errorMsg = await $("#conf-msg");
    const number = await $("#number-box");

    // Running the test
    await number.waitForDisplayed();
    await number.setValue(100.000000000000001);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await browser.pause(1000);
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Entered number is NOT in range of 0-100!",
      await errorMsg.getText()
    );
  });

  it("BONUS! - Verify Error Message when entered number is 1e-16!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
    );

    // Defining web elements
    const verifyButton = await $("#number-verify");
    const errorMsg = await $("#conf-msg");
    const number = await $("#number-box");

    // Running the test
    await number.waitForDisplayed();
    await number.setValue(1e-16);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await browser.pause(1000);
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Entered number is NOT in range of 0-100!",
      await errorMsg.getText()
    );
  });
});
