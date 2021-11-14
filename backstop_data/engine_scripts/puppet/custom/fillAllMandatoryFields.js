module.exports = async page => {
    await page.type("#first-name", "Arthur");
    await page.type("#last-name", "Svensson");
    await page.type("#email", "arthur-svensson@example.com");
    await page.click("#agree");
}