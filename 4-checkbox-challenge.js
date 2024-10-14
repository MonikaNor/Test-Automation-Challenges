describe("Checkbox Challenge", () => {
  it("1 - Verify that 1, 3, 5 checkboxes are checked by default!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/check-box.html"
    );

    // Defining web elements
    const checkbox1 = await $("#checkbox1");
    const checkbox3 = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(5)"
    );
    const checkbox5 = await $("#ba");

    // Running the test
    await checkbox1.waitForDisplayed();
    await checkbox3.waitForDisplayed();
    await checkbox5.waitForDisplayed();
    await expect(await checkbox1.isSelected()).equals(true);
    await expect(await checkbox3.isSelected()).equals(true);
    await expect(await checkbox5.isSelected()).equals(true);
  });

  it("2 - Verify that 2, 4 checkboxes are NOT checked by default!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/check-box.html"
    );

    // Defining web elements
    const checkbox2 = await $(".checkbox2");
    const checkbox4 = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(7)"
    );
    // Running the test
    await checkbox2.waitForDisplayed();
    await checkbox4.waitForDisplayed();
    await expect(await checkbox2.isSelected()).equals(false);
    await expect(await checkbox4.isSelected()).equals(false);
  });

  it("3 - Verify Error Message when NO checkbox is selected!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/check-box.html"
    );

    // Defining web elements
    const checkbox1 = await $("#checkbox1");
    const checkbox3 = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(5)"
    );
    const checkbox5 = await $("#ba");
    const errorMsg = await $("#conf-msg");
    const confirm = await $("#confirm-btn");

    // Running the test - Unselecting checkboxes 1, 3 and 5
    await checkbox1.waitForDisplayed();
    await checkbox1.click();
    await browser.pause(1000);
    await checkbox3.waitForDisplayed();
    await checkbox3.click();
    await browser.pause(1000);
    await checkbox5.waitForDisplayed();
    await checkbox5.click();
    await browser.pause(1000);
    // Running the test - Confirming and checking the error message
    await confirm.click();
    await errorMsg.waitForDisplayed();
    assert.equal("No checkbox is selected!", await errorMsg.getText());
  });

  it("4 - Verify Error Message when checkbox combination is not correct!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/check-box.html"
    );

    // Defining web elements
    const checkbox2 = await $(".checkbox2");
    const checkbox4 = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(7)"
    );
    const errorMsg = await $("#conf-msg");
    const confirm = await $("#confirm-btn");

    // Running the test
    await checkbox2.waitForDisplayed();
    await checkbox2.click();
    await checkbox4.waitForDisplayed();
    await checkbox4.click();
    await confirm.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "The combination of selected profession(s) is NOT correct!",
      await errorMsg.getText()
    );
  });

  it("5 - To solve a challenge select only checkboxes related to software testing roles + Confirm.", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/check-box.html"
    );

    // Defining web elements
    const checkbox1 = await $("#checkbox1");
    const checkbox2 = await $(".checkbox2");
    const checkbox4 = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(7)"
    );
    const checkbox5 = await $("#ba");
    const confirm = await $("#confirm-btn");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");

    // Running the test
    await checkbox1.waitForDisplayed();
    await checkbox1.click();
    await checkbox2.waitForDisplayed();
    await checkbox2.click();
    await checkbox4.waitForDisplayed();
    await checkbox4.click();
    await checkbox5.waitForDisplayed();
    await checkbox5.click();
    await confirm.click();
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });
});
