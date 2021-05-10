import "source-map-support/register";
import chromium from "chrome-aws-lambda";
import AWS from "aws-sdk";

const { S3_BUCKET_NAME, URL } = process.env;

export const screenshot = async (): Promise<void> => {
  AWS.config.update({ region: process.env.AWS_REGION || "ap-northeast-1" });
  try {
    await chromium.font(
      "https://raw.githack.com/googlefonts/noto-cjk/main/Sans/OTF/Japanese/NotoSansCJKjp-Regular.otf"
    );
    const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(URL, {
      waitUntil: "networkidle0",
    });
    const data = (await page.screenshot({ fullPage: true })) as Buffer;
    await browser.close();
    const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
    const resp = await s3
      .upload({
        Bucket: S3_BUCKET_NAME,
        Key: "m5paper.png",
        Body: data,
        ContentType: "image/png",
        ACL: "public-read",
      })
      .promise();
    console.log(resp);
  } catch (err) {
    console.error(err);
  }
};
