const { assert } = require("chai");

describe("Radio-button Challenge", () => {
  it("1 - Verify Error Message when NO option is selected!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html"
    );

    // Defining web elements
    const confirm = await $("#confirm-radio-challenge");
    const errorMsg = await $("#conf-msg");

    // Running the test
    await confirm.waitForDisplayed();
    await confirm.click();
    await browser.pause(1000);
    await errorMsg.waitForDisplayed();
    assert.equal("No option is selected!", await errorMsg.getText());
  });

  it("2 - Select each role + Confirm & verify text in message", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html"
    );

    // Defining web elements
    const tester1 = await $("#profession-tester");
    const developer2 = await $("#profession-developer");
    const analyst3 = await $("#profession-analyst");
    const writer4 = await $("#profession-writer");
    const confirm = await $("#confirm-radio-challenge");
    const textMsg = await $("#conf-msg");

    // Running the test - Checking text messages
    await tester1.waitForDisplayed();
    await tester1.click();
    await confirm.waitForDisplayed();
    await confirm.click();
    await textMsg.waitForDisplayed();
    assert.equal("QA Test Engineer is selected!", await textMsg.getText());

    await developer2.click();
    await confirm.click();
    await textMsg.waitForDisplayed();
    assert.equal("Software Developer is selected!", await textMsg.getText());

    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html"
    );
    await analyst3.click();
    await confirm.click();
    await textMsg.waitForDisplayed();
    assert.equal("Business Analystic is selected!", await textMsg.getText());

    await writer4.click();
    await confirm.click();
    await textMsg.waitForDisplayed();
    assert.equal("Technical Writer is selected!", await textMsg.getText());
  });

  it("3 - To solve a challenge Confirm all professions at least once!", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html"
    );

    // Defining web elements
    const tester1 = await $("#profession-tester");
    const developer2 = await $("#profession-developer");
    const analyst3 = await $("#profession-analyst");
    const writer4 = await $("#profession-writer");
    const confirm = await $("#confirm-radio-challenge");
    const h1 = await $("body > section > div > h1");
    const h2 = await $("body > section > div > p");

    // Running the test
    await tester1.waitForDisplayed();
    await tester1.click();
    await confirm.waitForDisplayed();
    await confirm.click();

    await developer2.click();
    await confirm.click();

    await analyst3.click();
    await confirm.click();

    await writer4.click();
    await confirm.click();

    await h1.waitForDisplayed();
    assert.equal("Wohoo! 🥳", await h1.getText());
    await h2.waitForDisplayed();
    assert.equal("You have solved the challenge!", await h2.getText());
  });

  ////BONUS! - Automate any found defect! ////

  it("BONUS! - Verify Business Analyst message is correct.", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html"
    );

    // Defining web elements
    const analyst3 = await $("#profession-analyst");
    const confirm = await $("#confirm-radio-challenge");
    const textMsg = await $("#conf-msg");

    // Running the test
    await analyst3.waitForDisplayed();
    await analyst3.click();
    await confirm.click();
    await textMsg.waitForDisplayed();
    assert.equal("Business Analyst is selected!", await textMsg.getText());
  });

  it("BONUS! - Confirm all professions at least once then go back and confirm 1 profession", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html"
    );

    // Defining web elements
    const tester1 = await $("#profession-tester");
    const developer2 = await $("#profession-developer");
    const analyst3 = await $("#profession-analyst");
    const writer4 = await $("#profession-writer");
    const confirm = await $("#confirm-radio-challenge");
    const h1 = await $("body > section > div > h1");
    const textMsg = await $("#conf-msg");

    // Running the test
    await tester1.waitForDisplayed();
    await tester1.click();
    await confirm.waitForDisplayed();
    await confirm.click();
    await developer2.click();
    await confirm.click();
    await analyst3.click();
    await confirm.click();
    await writer4.click();
    await browser.pause(1000);
    await confirm.click();

    await h1.waitForDisplayed();
    await browser.pause(1000);
    await browser.back();
    await browser.pause(1000);
    await tester1.waitForDisplayed();
    await tester1.click();
    await browser.pause(1000);
    await confirm.waitForDisplayed();
    await confirm.click();

    await textMsg.waitForDisplayed();
    assert.equal("QA Test Engineer is selected!", await textMsg.getText());
  });
});
