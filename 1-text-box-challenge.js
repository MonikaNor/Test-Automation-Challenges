describe("Text Box Challenge", () => {
  it("1 - Verify Error Message when nothing is entered!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
    );

    // Defining web elements
    const verifyButton = await $("#verify-btn");
    const errorMsg = await $("#conf-msg");

    // Running the test
    await verifyButton.waitForDisplayed();
    await browser.pause(500);
    await verifyButton.click();
    await browser.pause(500);
    await errorMsg.waitForDisplayed();
    await browser.pause(500);
    assert.equal("No value entered in Name field!", await errorMsg.getText());
  });

  it("2 - Verify Error Message when less than 2 letters are entered!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
    );

    // Defining web elements
    const verifyButton = await $("#verify-btn");
    const errorMsg = await $("#conf-msg");
    const enterName = await $("#first-name");

    // Running the test
    await enterName.waitForDisplayed();
    await enterName.setValue("M");
    await browser.pause(500);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Name has to have at least 2 letters!",
      await errorMsg.getText()
    );
  });

  it("3 - Verify Error Message when non letters are entered!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
    );

    // Defining web elements
    const verifyButton = await $("#verify-btn");
    const errorMsg = await $("#conf-msg");
    const enterName = await $("#first-name");

    // Running the test
    await enterName.waitForDisplayed();
    await enterName.setValue("123");
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal("Name can only have letters!", await errorMsg.getText());
  });

  it("4 - Verify Error Message when more than 30 letters are entered!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
    );

    // Defining web elements
    const verifyButton = await $("#verify-btn");
    const errorMsg = await $("#conf-msg");
    const enterName = await $("#first-name");

    // Running the test
    await enterName.waitForDisplayed();
    await enterName.setValue("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Name cannot have more than 30 letters!",
      await errorMsg.getText()
    );
  });

  it("5 - To solve a challenge simply write your name and click VERIFY!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
    );

    // Defining web elements
    const verifyButton = await $("#verify-btn");
    const enterName = await $("#first-name");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");

    // Running the test
    await enterName.waitForDisplayed();
    await enterName.setValue("Monika");
    await browser.pause(500);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await browser.pause(500);
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });

  ////BONUS! - Automate any found defect! ////

  it("BONUS! - Verify Lithuanian letters are accepted.", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
    );

    // Defining web elements
    const verifyButton = await $("#verify-btn");
    const enterName = await $("#first-name");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");

    // Running the test
    await enterName.waitForDisplayed();
    await enterName.setValue("ĄČęėįšŲŪŽ");
    await browser.pause(500);
    await verifyButton.waitForDisplayed();
    await verifyButton.click();
    await browser.pause(500);
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });

  it("BONUS! - Back to Challenge List.", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
    );

    // Defining web elements
    const verifyButton = await $("#verify-btn");
    const enterName = await $("#first-name");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");
    const backButton = await $("body > section > div > button");

    // Running the test
    await enterName.waitForDisplayed();
    await enterName.setValue("Monika");
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
});
