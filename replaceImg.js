const puppeteer = require("puppeteer");

(async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 500,
       defaultViewport:{
        width: 900,
        height: 900
       }
    });
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/republicworld/?hl=en");
    await page.waitFor("button.dCJp8.afkep.xqRnw");
    await page.$eval("button.dCJp8.afkep.xqRnw", (btn) => btn && btn.click());
    await page.$$eval("img.FFVAD", async (images) => {
        var promises = [];

        images.forEach((img) => {
            promises.push(
                new Promise((resolve, reject) => {
                    img.removeAttribute("srcset");
                    img.src = "https://static-29.sinclairstoryline.com/resources/media/495a9202-27a6-4767-a3c1-fbe74aeb2aee-large16x9_889726838_p_340197635717462_200_fs.jpg?1521762484901";
                    img.addEventListener("load", ()=>{
                        console.log("Image loaded.")
                        resolve("Img loaded.")
                    })
                })
            )
        });

        await Promise.all(promises);
    });
    await page.evaluate(()=>{
        window.scrollBy({
            top: 300,
            behavior: "smooth"
        })
    })
    console.log("Completed.")
})();