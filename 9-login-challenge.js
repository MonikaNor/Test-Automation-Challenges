describe("Login Challenge", () => {
  it("1 - Click Log in when nothing is entered. Verify the message!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/login.html"
    );

    // Defining web elements
    const login = await $("#login-btn");
    const errorMsg = await $("#conf-msg");

    // Running the test
    await login.waitForDisplayed();
    await login.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "You have NOT filled Username field",
      await errorMsg.getText()
    );
  });

  it("2 - Click Log in when Username is filled & Password is empty. Verify the message!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/login.html"
    );

    // Defining web elements
    const login = await $("#login-btn");
    const errorMsg = await $("#conf-msg");
    const userName = await $("#user-name");
    // Running the test
    await userName.waitForDisplayed();
    await userName.setValue("Monika");
    await login.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Either password is incorrect or not filled!",
      await errorMsg.getText()
    );
  });

  it("3 - Click Log in when Username is NOT filled & Password is filled. Verify the message!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/login.html"
    );

    // Defining web elements
    const login = await $("#login-btn");
    const errorMsg = await $("#conf-msg");
    const password = await $("#password");
    // Running the test
    await password.waitForDisplayed();
    await password.setValue("abcd1234");
    await login.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "You have NOT filled Username field",
      await errorMsg.getText()
    );
  });

  it("4 - Click Log in when Username is filled but Password is invalid. Verify the message!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/login.html"
    );

    // Defining web elements
    const login = await $("#login-btn");
    const errorMsg = await $("#conf-msg");
    const userName = await $("#user-name");
    const password = await $("#password");
    // Running the test
    await userName.waitForDisplayed();
    await userName.setValue("Monika");
    await password.waitForDisplayed();
    await password.setValue("789asdf");
    await login.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "Either password is incorrect or not filled!",
      await errorMsg.getText()
    );
  });

  it("5 - To solve a challenge click Log in when Username & Password are correctly filled!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/login.html"
    );

    // Defining web elements
    const login = await $("#login-btn");
    const userName = await $("#user-name");
    const password = await $("#password");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");
    // Running the test
    await userName.waitForDisplayed();
    await userName.setValue("Monika");
    await password.waitForDisplayed();
    await password.setValue("abcd1234");
    await login.click();
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });
});
