//////////////////////////////// UNFINISHED ///////////////////////////////

describe("Slider Challenge", () => {
  it("1 - Verify Error Message when number is NOT 100. Use boundary values!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/slider.html"
    );

    // Defining web elements
    const title = await $("body > section > div.form-wrap > h1");
    const verifyButton = await $("#slider-verify-btn");
    const errorMsg = await $("#conf-msg");
    const slider = await $("#slider");
    //Runing the test - when value is 0
    await title.waitForDisplayed();
    assert.equal("Slider Challenge", await title.getText());

    await slider.click();
    for (let clicks = 50; clicks > 0; clicks--) {
      await browser.keys("ArrowLeft");
    }
    await browser.pause(500);
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "You have NOT reached 100 yet, try harder!🤪",
      await errorMsg.getText()
    );

    //Runing the test - when value is 99
    await title.waitForDisplayed();
    assert.equal("Slider Challenge", await title.getText());

    await slider.click();
    for (let clicks = 50; clicks < 99; clicks++) {
      await browser.keys("ArrowRight");
    }
    await browser.pause(500);
    await verifyButton.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "You have NOT reached 100 yet, try harder!🤪",
      await errorMsg.getText()
    );
  });

  it("2 - To solve a challenge reach 100 and click Verify button!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/slider.html"
    );

    // Defining web elements
    const title = await $("body > section > div.form-wrap > h1");
    const verifyButton = await $("#slider-verify-btn");
    const slider = await $("#slider");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");
    //Runing the test - when value is 100
    await title.waitForDisplayed();
    assert.equal("Slider Challenge", await title.getText());

    await slider.click();
    for (let clicks = 50; clicks < 100; clicks++) {
      await browser.keys("ArrowRight");
    }
    await browser.pause(500);
    await verifyButton.click();
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });
});
