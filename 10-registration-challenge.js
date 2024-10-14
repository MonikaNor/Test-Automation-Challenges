describe("Simple Registration Form Challenge", () => {
  it("1 - Verify Error Message when all required fields are not filled!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );

    // Defining web elements
    const submitBtn = await $("#submit-btn");
    const errorMsg = await $("#conf-msg");
    // Running the test
    await submitBtn.waitForDisplayed();
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "No value entered in First Name field!",
      await errorMsg.getText()
    );
  });

  it("2 - Verify Error Message when one of the mandatory field is not filled!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );

    // Defining web elements
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const email = await $("#email");
    const genderF = await $("#sex-female");
    const genderM = await $("#sex-male");
    const phoneNumber = await $("#mobile-number");
    const submitBtn = await $("#submit-btn");
    const errorMsg = await $("#conf-msg");
    // Running the test - No First Name entered
    await lastName.waitForDisplayed();
    await lastName.setValue("N");
    await browser.pause(500);
    await email.setValue("email@domain.com");
    await browser.pause(500);
    await genderF.click();
    await browser.pause(500);
    await phoneNumber.setValue("123456789");
    await browser.pause(500);
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "No value entered in First Name field!",
      await errorMsg.getText()
    );
    // Running the test - No Last Name entered
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );
    await firstName.waitForDisplayed();
    await firstName.setValue("Monika");
    await browser.pause(500);
    await email.setValue("email@domain.com");
    await browser.pause(500);
    await genderF.click();
    await browser.pause(500);
    await phoneNumber.setValue("123456789");
    await browser.pause(500);
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "No value entered in Last Name field!",
      await errorMsg.getText()
    );
    // Running the test - No Email entered
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );
    await firstName.waitForDisplayed();
    await firstName.setValue("Monika");
    await browser.pause(500);
    await lastName.waitForDisplayed();
    await lastName.setValue("N");
    await browser.pause(500);
    await genderF.click();
    await phoneNumber.setValue("123456789");
    await browser.pause(500);
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal("No value entered in Email field!", await errorMsg.getText());

    // Running the test - No Phone Number entered
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );
    await firstName.waitForDisplayed();
    await firstName.setValue("Ponas");
    await browser.pause(500);
    await lastName.waitForDisplayed();
    await lastName.setValue("Ponaitis");
    await browser.pause(500);
    await email.setValue("email@domain.com");
    await browser.pause(500);
    await genderM.click();
    await browser.pause(500);
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "No value entered in Mobile Phone field!",
      await errorMsg.getText()
    );
  });

  it("3 - Verify Error Message when email has wrong format!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );

    // Defining web elements
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const email = await $("#email");
    const genderM = await $("#sex-male");
    const phoneNumber = await $("#mobile-number");
    const submitBtn = await $("#submit-btn");
    const errorMsg = await $("#conf-msg");
    // Running the test
    await firstName.waitForDisplayed();
    await firstName.setValue("Ponas");
    await browser.pause(500);
    await lastName.waitForDisplayed();
    await lastName.setValue("Ponaitis");
    await browser.pause(500);
    await email.setValue("email");
    await genderM.click();
    await browser.pause(500);
    await phoneNumber.setValue("123456789");
    await browser.pause(500);
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal("Email format is not valid!", await errorMsg.getText());
  });

  it("4 - To solve a challenge fill the registration form properly and SUBMIT!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );

    // Defining web elements
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const email = await $("#email");
    const genderM = await $("#sex-male");
    const phoneNumber = await $("#mobile-number");
    const submitBtn = await $("#submit-btn");
    const termsCheckbox = await $("#terms-checkbox");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");
    // Running the test
    await firstName.waitForDisplayed();
    await firstName.setValue("Ponas");
    await browser.pause(500);
    await lastName.waitForDisplayed();
    await lastName.setValue("Ponaitis");
    await browser.pause(500);
    await email.setValue("email@domain.com");
    await genderM.click();
    await browser.pause(500);
    await phoneNumber.setValue("123456789");
    await browser.pause(500);
    await termsCheckbox.click();
    await submitBtn.click();
    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });

  ////BONUS! - Automate any found defect! ////

  it("BONUS! - Verify Error Message when Gender is not selected!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );

    // Defining web elements
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const email = await $("#email");
    const genderM = await $("#sex-male");
    const phoneNumber = await $("#mobile-number");
    const submitBtn = await $("#submit-btn");
    // Running the test
    await firstName.waitForDisplayed();
    await firstName.setValue("Ponas");
    await browser.pause(500);
    await lastName.setValue("Ponaitis");
    await browser.pause(500);
    await email.setValue("email@domain.com");
    await genderM.click();
    await browser.pause(500);
    await phoneNumber.setValue("123456789");
    await browser.pause(500);
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal("Gender is NOT selected", await errorMsg.getText());
  });

  it("BONUS! - Verify Error Message when First Name and Last Name consists only of symbols", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );

    // Defining web elements
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const email = await $("#email");
    const genderM = await $("#sex-male");
    const phoneNumber = await $("#mobile-number");
    const submitBtn = await $("#submit-btn");
    // Running the test
    await firstName.waitForDisplayed();
    await firstName.setValue("!@#$%^&*()_+-");
    await browser.pause(500);
    await lastName.setValue("!@#$%^&*()_+-");
    await browser.pause(500);
    await email.setValue("email@domain.com");
    await genderM.click();
    await phoneNumber.setValue("123456789");
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal(
      "First Name and Last Name values NOT valid!",
      await errorMsg.getText()
    );
  });

  it("BONUS! - Verify Error Message when Phone Number is negative", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );

    // Defining web elements
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const email = await $("#email");
    const genderM = await $("#sex-male");
    const phoneNumber = await $("#mobile-number");
    const submitBtn = await $("#submit-btn");
    // Running the test
    await firstName.waitForDisplayed();
    await firstName.setValue("Ponas");
    await lastName.setValue("Ponaitis");
    await email.setValue("email@domain.com");
    await genderM.click();
    await phoneNumber.setValue("-123456789");
    await browser.pause(1000);
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal("Mobile Phone format is not valid!", await errorMsg.getText());
  });

  it("BONUS! - Verify Error Message when Phone Number contains symbols and letters", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );

    // Defining web elements
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const email = await $("#email");
    const genderM = await $("#sex-male");
    const phoneNumber = await $("#mobile-number");
    const submitBtn = await $("#submit-btn");
    // Running the test
    await firstName.waitForDisplayed();
    await firstName.setValue("Ponas");
    await lastName.setValue("Ponaitis");
    await email.setValue("email@domain.com");
    await genderM.click();
    await phoneNumber.setValue("1.11111111111111111e+156");
    await browser.pause(1000);
    await submitBtn.click();
    await errorMsg.waitForDisplayed();
    assert.equal("Mobile Phone format is not valid!", await errorMsg.getText());
  });
});
