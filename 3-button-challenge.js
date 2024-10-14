describe("Button Challenge", () => {
  it("1-2 - Verify that Green and Red buttons are disabled by default!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/button.html"
    );

    // Defining web elements
    var redButton = $("#simple-button-3");
    var yellowButton = $("#simple-button-1");
    var greenButton = $("#simple-button-2");

    // Running the test (Verifying that Green and Red buttons are disabled, and Yellow button is enabled)
    await greenButton.waitForDisplayed();

    console.log(
      "Green button attributes:",
      await greenButton.getAttribute("disabled")
    );
    console.log(
      "Red button attributes:",
      await redButton.getAttribute("disabled")
    );
    console.log(
      "Yellow button attributes:",
      await yellowButton.getAttribute("")
    );

    if ((await greenButton.getAttribute("disabled")) !== null) {
      console.log("The Green button is disabled.");
    } else {
      console.log("The Green button is enabled.");
    }

    await redButton.waitForDisplayed();
    if ((await redButton.getAttribute("disabled")) !== null) {
      console.log("The Red button is disabled.");
    } else {
      console.log("The Red button is enabled.");
    }

    await yellowButton.waitForDisplayed();
    if ((await yellowButton.getAttribute("disabled")) !== null) {
      console.log("The Yellow button is disabled.");
    } else {
      console.log("The Yellow button is enabled.");
    }
  });

  it("3 - To solve a challenge light up Lithuanian flag by clicking on all buttons starting from Yellow!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/button.html"
    );

    // Defining web elements
    const yellowButton = await $("#simple-button-1");
    const greenButton = await $("#simple-button-2");
    const redButton = await $("#simple-button-3");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");

    // Running the test (Clicking on all the buttons to light up Lithuanian flag)
    await yellowButton.waitForDisplayed();
    await yellowButton.click();
    await greenButton.waitForDisplayed();
    await greenButton.click();
    await redButton.waitForDisplayed();
    await redButton.click();

    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });
});
