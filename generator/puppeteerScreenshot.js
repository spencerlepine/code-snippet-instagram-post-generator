const puppeteer = require('puppeteer');

const tmpFolder = `${__dirname}/src/tmp`
const metadata = require(`${tmpFolder}/metadata.json`)

const generateScreenshot = async () => {
  const { slug } = metadata
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({
    width: 550,
    height: 550,
  });

  await page.goto('http://localhost:3000');


  const root = await page.$('#root');
  const bounding_box = await root.boundingBox();

  const imgOutputPath = `${tmpFolder}/${slug}-snippet.png`
  await root.screenshot({
    path: imgOutputPath,
    clip: {
      x: bounding_box.x,
      y: bounding_box.y,
      width: Math.min(bounding_box.width, page.viewport().width),
      height: Math.min(bounding_box.height, page.viewport().height),
    },
  });

  await browser.close();
}
generateScreenshot()